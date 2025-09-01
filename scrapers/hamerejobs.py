import requests
from bs4 import BeautifulSoup

URL = "https://harmeejobs.com/jobs/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/115.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}

def get_job_links(html):
    soup = BeautifulSoup(html, "html.parser")
    jobs = []
    # Each job is in <li> with a child <a> (job link)
    for li in soup.select("ul.job_listings li"):
        a = li.find("a", href=True)
        if a:
            job = {
                "title": None,
                "company": None,
                "location": None,
                "expires": None,
                "link": a["href"]
            }
            # Title
            h4 = a.select_one("div.listing-title h4")
            if h4:
                job["title"] = h4.contents[0].strip() if h4.contents else None
            # Company and location
            icons = a.select("ul.listing-icons li")
            for icon in icons:
                text = icon.get_text(strip=True)
                if "Expires:" in text:
                    job["expires"] = text.replace("Expires:", "").strip()
                elif icon.find("i", class_="icon-material-outline-business"):
                    job["company"] = text
                elif icon.find("i", class_="icon-material-outline-location-on"):
                    job["location"] = text
            jobs.append(job)
    return jobs

def parse_job_details(html):
    soup = BeautifulSoup(html, "html.parser")
    job = {}

    # Title
    titlebar = soup.find("div", id="titlebar")
    if titlebar:
        h1 = titlebar.find("h1")
        if h1:
            # Remove job type and new badge from title
            job["title"] = h1.contents[0].strip() if h1.contents else None

    # Company
    company = soup.select_one(".company-info-boxed .content h4 a strong")
    job["company"] = company.get_text(strip=True) if company else None

    # Company website
    website = soup.select_one(".company-data__content--list-item._company_website a.website")
    job["company_website"] = website["href"] if website and website.has_attr("href") else None

    # Job Overview (sidebar)
    overview = {}
    for li in soup.select("#job-details .job-overview ul li"):
        strong = li.find("strong")
        span = li.find("span")
        if strong and span:
            key = strong.get_text(strip=True).replace(":", "").lower()
            overview[key] = span.get_text(strip=True)
    job["overview"] = overview

    # Main job description (as HTML and as text sections)
    desc = soup.select_one(".single_job_listing .job_description")
    if desc:
        job["description_html"] = str(desc)
        # Get all text blocks (h3, ul, p)
        job["description_blocks"] = []
        for child in desc.children:
            if getattr(child, "name", None) in ["h3", "ul", "p"]:
                job["description_blocks"].append(child.get_text(separator=" ", strip=True))
    return job

# Example usage:
if __name__ == "__main__":
    # General jobs page
    response = requests.get(URL, headers=HEADERS)
    jobs = get_job_links(response.text)
    for job in jobs:
        print(job)

    # Individual job page
    url = "https://harmeejobs.com/job/junior-banker-7/"
    response = requests.get(url, headers=HEADERS)
    job_info = parse_job_details(response.text)
    for k, v in job_info.items():
        print(f"{k}: {v}\n")