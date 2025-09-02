import os
import google.generativeai as genai
from dotenv import load_dotenv
from docx import Document
import PyPDF2
import json
import re
from xhtml2pdf import pisa
import tempfile

load_dotenv()
API_KEY = os.getenv("API_KEY")


def read_pdf_fileobj(fileobj):
    pdf = PyPDF2.PdfReader(fileobj)
    text = ""
    for page in pdf.pages:
        text += page.extract_text() or ""
    return text


def read_docx_fileobj(fileobj):
    doc = Document(fileobj)
    text = ""
    for para in doc.paragraphs:
        text += para.text + "\n"
    return text


def extract_json(text):
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if match:
        return match.group(0)
    return None


def ask_gemini_resume_analysis(resume_text):
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
    prompt = f"""
You are an expert career advisor, professional resume writer, and UX-focused designer.
Rewrite and **enhance the following resume content**, and return a **fully formatted HTML document** (including <html>, <head>, <style>, <body>) with a **modern, minimalist, and professional design** ready to render in a browser or convert to PDF.

Important: The resume **must fit on a single A4 page**. Adjust formatting, font sizes, spacing, and alignments to ensure all content fits neatly without overflowing, while keeping readability and visual appeal. Design should be **minimalist yet attractive**: not overly flashy, but not too dull—clean typography, subtle colors, and clear section separation.

Your goals:
1. **Maximize resume impact**:
   - Use action verbs, quantify achievements with numbers/percentages wherever possible.
   - Focus on measurable results, promotions, awards, and skills that show value.
   - Turn responsibilities into results-driven accomplishments.
2. **Design & readability**:
   - Use clear headings: Experience, Education, Skills, Projects, Certifications, etc.
   - Use bullet points for responsibilities and achievements.
   - Include inline CSS with professional fonts, spacing, subtle colors.
   - Ensure layout, margins, and line heights are optimized for a single-page A4 PDF.
   - Make it visually appealing, minimalist, and ATS-friendly.
3. **Do’s**:
   - Keep formatting clean and consistent.
   - Keep content relevant to career goals.
   - Highlight technical skills, certifications, and impactful projects.
   - Condense or summarize content if needed to fit one page.
4. **Don’ts**:
   - Do NOT add fluff or unverifiable claims.
   - Do NOT include explanations, instructions, or comments outside HTML.
   - Do NOT invent job titles or dates.
   - Avoid generic adjectives like “hardworking,” “excellent,” “team player” without evidence.

Additionally, analyze the resume and provide:
1. An overall resume score (0-100).
2. Subscores for ATS compatibility, keyword match, impact score, and format score (all 0-100).
3. A list of improvement suggestions. Each suggestion should include:
   - type (Critical, Important, Moderate, Minor)
   - title
   - description
   - example
   - status (pending)

**Important:** Return ONLY the JSON object described below. Do NOT include any explanations, markdown, or text outside the JSON. The response must start with '{' and end with '}'.

JSON structure:
{{
  "enhanced_html": "<html>...</html>",
  "score": 78,
  "subscores": {{
    "ats": 85,
    "keywords": 72,
    "impact": 65,
    "format": 90
  }},
  "improvements": [
    {{
      "type": "Critical",
      "title": "Add quantifiable achievements",
      "description": "Include specific numbers and metrics to demonstrate impact",
      "example": "Increased sales by 25% ($2.3M revenue) over 6 months",
      "status": "pending"
    }}
  ]
}}

Resume content to enhance:
---
{resume_text}
---
"""
    response = model.generate_content([{"text": prompt}])
    if hasattr(response, "candidates") and response.candidates and response.candidates[0].content.parts:
        part = response.candidates[0].content.parts[0]
        if hasattr(part, 'text'):
            json_text = extract_json(part.text)
            if json_text:
                try:
                    result = json.loads(json_text)
                    return result, None
                except Exception:
                    return None, "AI response could not be parsed as JSON"
            else:
                return None, "No JSON found in AI response"
    return None, "No response from AI"


def enhance_resume(fileobj, filename):
    ext = os.path.splitext(filename)[1].lower()
    if ext == ".pdf":
        resume_text = read_pdf_fileobj(fileobj)
    elif ext == ".docx":
        resume_text = read_docx_fileobj(fileobj)
    else:
        return None, "Unsupported file type"
    result, error = ask_gemini_resume_analysis(resume_text)
    if not result:
        return None, error
    return result, None


def html_to_pdf_bytes(html_text):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as pdf_file:
        pisa_status = pisa.CreatePDF(html_text, dest=pdf_file)
        pdf_file.seek(0)
        pdf_bytes = pdf_file.read()
    return pdf_bytes if not pisa_status.err else None


def generate_cover_letter(user_info, job_info):
    """
    Generate a custom cover letter using Gemini AI.
    Args:
        user_info (dict): {
            "name": str,
            "email": str,
            "phone": str,
            "education": str,
            "experience": str,
            "skills": list[str],
            "summary": str (optional)
        }
        job_info (dict): {
            "title": str,
            "company": str,
            "description": str,
            "requirements": str,
            "location": str (optional)
        }
    Returns:
        str: Generated cover letter text or error message.
    """
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
    prompt = f"""
You are an expert career advisor and professional writer.
Write a custom cover letter for the following job application. The cover letter should be professional, concise (max 350 words), and tailored to the job and company. Highlight the candidate's relevant experience, skills, and motivation for applying. Use a modern, friendly, and confident tone.

Return ONLY the cover letter text. Do NOT include explanations, markdown, or any extra formatting.

Candidate Info:
Name: {user_info.get("name")}
Email: {user_info.get("email")}
Phone: {user_info.get("phone")}
Education: {user_info.get("education")}
Experience: {user_info.get("experience")}
Skills: {', '.join(user_info.get("skills", []))}
Summary: {user_info.get("summary", "")}

Job Info:
Title: {job_info.get("title")}
Company: {job_info.get("company")}
Description: {job_info.get("description")}
Requirements: {job_info.get("requirements")}
Location: {job_info.get("location", "")}
"""
    response = model.generate_content([{"text": prompt}])
    if hasattr(response, "candidates") and response.candidates and response.candidates[0].content.parts:
        part = response.candidates[0].content.parts[0]
        if hasattr(part, 'text'):
            cover_letter = part.text.strip()
            return cover_letter, None
    return None, "No response from AI"
