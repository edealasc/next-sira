import google.generativeai as genai
from scrapers.kebenajobs import scrape_jobs_until_page as scrape_kebenajobs
from scrapers.effoysira import scrape_jobs_until_page as scrape_effoysira
from scrapers.hamerejobs import scrape_jobs_until_page as scrape_hamerejobs
from scrapers.ethiojobs import scrape_jobs_until_page as scrape_ethiojobs
from pydantic import BaseModel
from typing import List, Optional
import json
import os
import re
import codecs

# Replace with your actual Gemini API key


class Requirements(BaseModel):
    gender: Optional[str] = None
    agemax: Optional[int] = None
    agemin: Optional[int] = None
    other: Optional[str] = None
    skills: Optional[List[str]] = None

class Job(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    description: Optional[str] = None
    requirements: Optional[Requirements] = None
    isOnline: Optional[bool] = None
    is_remote: Optional[bool] = None
    location: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    address: Optional[str] = None
    salary: Optional[str] = None
    salary_min: Optional[str] = None
    salary_max: Optional[str] = None
    deadline: Optional[str] = None
    job_type: Optional[str] = None
    category: Optional[str] = None
    posted_date: Optional[str] = None
    experience_level: Optional[str] = None
    education_level: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    application_method: Optional[str] = None
    application_instructions: Optional[str] = None
    application_url: Optional[str] = None
    number_of_positions: Optional[int] = None
    tags: Optional[List[str]] = None

class Jobs(BaseModel):
    jobs: Optional[List[Job]] = None

def ask_gemini(prompt):
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
    parts = [{"text": prompt}]
    response = model.generate_content(parts)
    if hasattr(response, "candidates") and response.candidates and response.candidates[0].content.parts:
        part = response.candidates[0].content.parts[0]
        if hasattr(part, 'text'):
            return part.text
    return "Sorry, I couldn't generate a response."

def append_to_json_file(data, filename):
    if os.path.exists(filename):
        with open(filename, "r", encoding="utf-8") as f:
            try:
                existing = json.load(f)
            except Exception:
                existing = {}
    else:
        existing = {}

    if "jobs" in existing and "jobs" in data:
        existing["jobs"].extend(data["jobs"])
    else:
        existing = data

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    PAGE_COUNT = 1  # Change this to scrape more or fewer pages

    print("Scraping Kebenajobs...")
    kebenajobs_data = scrape_kebenajobs(PAGE_COUNT)
    print(f"Kebenajobs: {len(kebenajobs_data)} jobs scraped.")

    # print("Scraping Effoysira...")
    # effoysira_data = scrape_effoysira(PAGE_COUNT)
    # print(f"Effoysira: {len(effoysira_data)} jobs scraped.")

    # print("Scraping Hamerejobs...")
    # hamerejobs_data = scrape_hamerejobs(PAGE_COUNT)
    # print(f"Hamerejobs: {len(hamerejobs_data)} jobs scraped.")

    # print("Scraping Ethiojobs...")
    # ethiojobs_data = scrape_ethiojobs(PAGE_COUNT)
    # print(f"Ethiojobs: {len(ethiojobs_data)} jobs scraped.")

    all_jobs = (
        kebenajobs_data 
        # effoysira_data +
        # hamerejobs_data +
        # ethiojobs_data
    )

    print(f"Total jobs scraped: {len(all_jobs)}")

    # Prompt in the exact essay assistant format, but for jobs, and with field explanations
    prompt = f"""
You are an expert AI job data structurer. Your job is to take a list of raw job postings (as Python dicts) and convert them into a JSON object with a single key 'jobs', whose value is a list of job objects.

Each job object should have the following fields (with their meaning):

- title: The job title or position name DON'T PUT THE COMPANY NAME HERE.
- company: The name of the hiring company or organization.
- description: A summary or description of the job.
- requirements: An object with the following fields:
    - gender: Gender requirement, if any.
    - agemax: Maximum age allowed, if specified.
    - agemin: Minimum age required, if specified.
    - other: Any other requirements not covered by the above.
    - skills: List of required skills.
- isOnline: true if the application is online, false if in person.
- is_remote: true if the job can be done remotely, false otherwise.
- location: General location or area of the job.
- country: Country where the job is located.
- city: City where the job is located.
- address: Full address if available.
- salary: Salary information as a string (e.g., "Negotiable", "ETB 10,000/month").
- salary_min: Minimum salary if specified.
- salary_max: Maximum salary if specified.
- deadline: Application deadline.
- job_type: Type of job (e.g., Full-time, Part-time, Contract, Internship).
- category: Job category or field (e.g., IT, Engineering, Healthcare).
- posted_date: The date the job was posted.
- experience_level: Required experience level (e.g., Entry, Mid, Senior).
- education_level: Required education level (e.g., Bachelor’s, Master’s, Diploma).
- contact_email: Email address for application or inquiries.
- contact_phone: Phone number for application or inquiries.
- application_method: How to apply (e.g., Online, In-person, Email).
- application_instructions: Any special instructions for applying.
- application_url: Direct link to apply online (if online).
- number_of_positions: How many people are being hired.
- tags: List of tags or keywords for the job.

Fill missing fields with null.

ONLY return your response as a JSON object in the following format. Do NOT include any other explanation, breakdown, or text outside the JSON.


{{
  "jobs": [
    {{
      "title": ...,
      "company": ...,
      "description": ...,
      "requirements": {{"gender": ..., "agemax": ..., "agemin": ..., "other": ..., "skills": [...]}},
      "isOnline": ...,
      "is_remote": ...,
      "location": ...,
      "country": ...,
      "city": ...,
      "address": ...,
      "salary": ...,
      "salary_min": ...,
      "salary_max": ...,
      "deadline": ...,
      "job_type": ...,
      "category": ...,
      "posted_date": ...,
      "experience_level": ...,
      "education_level": ...,
      "contact_email": ...,
      "contact_phone": ...,
      "application_method": ...,
      "application_instructions": ...,
      "application_url": ...,
      "number_of_positions": ...,
      "tags": [...]
    }}
    // ...more job objects as needed
  ]
}}

Here is the data:
{all_jobs}
Return only a valid JSON string, with no code block, no Python code, and no variable assignment.
"""

    structured = ask_gemini(prompt)

    print("Structured data:")
    print(structured)

    # Clean Gemini output: remove code blocks and Python code
    def extract_json(text):
        # Remove code block markers and comments
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"```$", "", text)
        # Remove lines starting with // (JSON comments)
        text = re.sub(r"^\s*//.*$", "", text, flags=re.MULTILINE)
        # Remove python variable assignment if present
        text = re.sub(r"^.*?=\s*", "", text, count=1)
        # Remove import statements
        text = re.sub(r"^import.*\n", "", text)
        # Remove trailing commas before closing brackets/braces
        text = re.sub(r",(\s*[}\]])", r"\1", text)
        # Replace invalid \ escapes (keep only valid ones)
        text = re.sub(r'\\(?!["\\/bfnrtu])', r"\\\\", text)
        # Remove non-breaking space escapes like \xa0
        text = text.replace("\\xa0", " ")
        # Strip leading/trailing whitespace
        return text.strip()

    try:
        json_str = extract_json(structured)
        # Optionally decode unicode escapes
        json_str = codecs.decode(json_str, 'unicode_escape')
        structured_json = json.loads(json_str)
        append_to_json_file(structured_json, "jobs_output.json")
        print("Appended to jobs_output.json")
    except Exception as e:
        print("Failed to parse or append structured data:", e)