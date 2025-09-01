import requests
from bs4 import BeautifulSoup
import time
BASE_URL = "https://effoysira.com/page/{}/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/115.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}

def get_job_links(html):
    soup = BeautifulSoup(html, "html.parser")
    jobs = []
    # Each job is in <article class="wp-block-post ...">
    for article in soup.select("article.wp-block-post"):
        job = {}
        # Title and link
        h2 = article.find("h2")
        a = h2.find("a") if h2 else None
        job["title"] = a.get_text(strip=True) if a else None
        job["link"] = a["href"] if a and a.has_attr("href") else None
        # Date
        date_div = article.find("div", class_="ct-dynamic-data")
        job["date"] = date_div.get_text(strip=True) if date_div else None
        jobs.append(job)
    return jobs

def get_job_links_from_page(page_num):
    url = BASE_URL.format(page_num)
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return get_job_links(response.text)

def parse_job_details(html):
    soup = BeautifulSoup(html, "html.parser")
    job = {}

    # Title (first h1 or h2 in main content)
    main = soup.find(id="main-container")
    if main:
        h1 = main.find("h1")
        if h1:
            job["title"] = h1.get_text(strip=True)
        else:
            h2 = main.find("h2")
            job["title"] = h2.get_text(strip=True) if h2 else None

    # All job positions (h4.wp-block-heading)
    job["positions"] = []
    for h4 in soup.select("h4.wp-block-heading"):
        pos = {"position": h4.get_text(strip=True)}
        # Get following <p> tags for requirements and location
        next_p = h4.find_next_sibling("p")
        while next_p and next_p.name == "p":
            strong = next_p.find("strong")
            label = strong.get_text(strip=True).lower() if strong else ""
            value = next_p.get_text(strip=True)
            if "qualification" in label or "experience" in label:
                pos["qualification_and_experience"] = value
            elif "work of place" in label or "work place" in label:
                pos["location"] = value
            next_p = next_p.find_next_sibling("p")
        job["positions"].append(pos)

    # How to apply (h3.wp-block-heading and following <p> or <blockquote>)
    how_to_apply = None
    for h3 in soup.select("h3.wp-block-heading"):
        if "how to apply" in h3.get_text(strip=True).lower():
            how_to_apply = []
            sib = h3.find_next_sibling()
            while sib and sib.name in ["p", "blockquote"]:
                how_to_apply.append(sib.get_text(separator=" ", strip=True))
                sib = sib.find_next_sibling()
            break
    job["how_to_apply"] = how_to_apply

    # Application date (inside <cite> in blockquote)
    cite = soup.find("cite")
    job["application_date"] = cite.get_text(strip=True) if cite else None

    # Notes (all <p> after "Note that:")
    notes = []
    note_p = soup.find("p", string=lambda s: s and "Note that" in s)
    if note_p:
        sib = note_p.find_next_siblings("p")
        for p in sib:
            notes.append(p.get_text(strip=True))
    job["notes"] = notes

    return job

def scrape_jobs_until_page(last_page):
    all_jobs = []
    for page in range(1, last_page + 1):
        print(f"Scraping page {page}: {BASE_URL.format(page)}")
        jobs = get_job_links_from_page(page)
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
        print(job)