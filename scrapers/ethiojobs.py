import requests
from bs4 import BeautifulSoup
import time
BASE_URL = "https://ethiojobs.com.et/?page={}"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/115.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}

def get_job_posts(html):
    soup = BeautifulSoup(html, "html.parser")
    jobs = []
    for post in soup.select("div.job-post-item"):
        job = {}
        # Title and link
        title_tag = post.select_one("h3.job-title a")
        job["title"] = title_tag.get_text(strip=True) if title_tag else None
        job["link"] = title_tag["href"] if title_tag and title_tag.has_attr("href") else None
        # Company (from logo alt or None)
        logo = post.select_one(".company-logo")
        job["company"] = logo["alt"].strip() if logo and logo.has_attr("alt") else None
        # Author
        author_tag = post.select_one("span.author a")
        job["author"] = author_tag.get_text(strip=True) if author_tag else None
        # Date
        date_tag = post.select_one("span.date time")
        job["date"] = date_tag.get_text(strip=True) if date_tag else None
        jobs.append(job)
    return jobs

def parse_job_details(html):
    soup = BeautifulSoup(html, "html.parser")
    job = {}

    # Title
    title_tag = soup.find("div", class_="post-title")
    job["title"] = title_tag.h1.get_text(strip=True) if title_tag and title_tag.h1 else None

    # Summary/Subtitle
    summary_tag = soup.find("div", class_="post-summary")
    job["summary"] = summary_tag.get_text(strip=True) if summary_tag else None

    # Meta info (category and date)
    meta = soup.find("div", class_="post-meta")
    if meta:
        category = meta.find("a", class_="font-weight-normal")
        job["category"] = category.get_text(strip=True) if category else None
        date = meta.find("span")
        job["date"] = date.get_text(strip=True) if date else None

    # Company (from sidebar)
    company_tag = soup.find("h3", class_="company-name")
    job["company"] = company_tag.get_text(strip=True) if company_tag else None

    # Main job sections (overview, responsibilities, requirements, benefits, application)
    content = soup.find("div", class_="post-text")
    if content:
        # Get all sections by their class
        for section in content.find_all("section"):
            section_title = section.find("h2")
            if section_title:
                key = section_title.get_text(strip=True).lower().replace(" ", "_")
                # Collect all text in the section
                section_text = section.get_text(separator="\n", strip=True)
                job[key] = section_text

        # Optionally, get the full HTML for further processing
        job["content_html"] = str(content)

    return job

def scrape_jobs_until_page(last_page):
    all_jobs = []
    for page in range(1, last_page + 1):
        url = BASE_URL.format(page)
        print(f"Scraping page {page}: {url}")
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        jobs = get_job_posts(response.text)
        for job in jobs:
            link = job.get("link")
            if not link:
                continue
            try:
                resp = requests.get(link, headers=HEADERS)
                resp.raise_for_status()
                job_info = parse_job_details(resp.text)
                job_info["url"] = link
                all_jobs.append(job_info)
                time.sleep(1)
            except Exception as e:
                print(f"Failed to scrape {link}: {e}")
    return all_jobs

# Example usage:
if __name__ == "__main__":
    jobs = scrape_jobs_until_page(3)  # Scrape up to page 3
    print(f"Total jobs scraped: {len(jobs)}")
    for job in jobs:
        for k, v in job.items():
            print(f"{k}: {v}\n")