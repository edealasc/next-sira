import requests
from bs4 import BeautifulSoup

URL = "https://kebenajobs.com/page/2/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/115.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}

def get_job_links(url):
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    job_links = []
    # Each job post is in <article> with <h2> containing <a href="...">
    for article in soup.find_all("article"):
        h2 = article.find("h2", class_="blog-entry-title")
        if h2:
            a = h2.find("a", href=True)
            if a:
                job_links.append(a["href"])
    return job_links

def parse_job_details(html):
    soup = BeautifulSoup(html, "html.parser")
    job = {}

    # Title
    title_tag = soup.find("h1", class_="title entry-title")
    job["title"] = title_tag.get_text(strip=True) if title_tag else None

    # Author and date (optional)
    meta = soup.find("ul", class_="nv-meta-list")
    if meta:
        author = meta.find("span", class_="author-name")
        job["author"] = author.get_text(strip=True) if author else None
        date = meta.find("time", class_="entry-date published")
        job["date"] = date.get_text(strip=True) if date else None

    # Main content (all <p> tags inside the job description)
    content = soup.find("div", class_="nv-content-wrap entry-content")
    if content:
        paragraphs = content.find_all("p")
        job["paragraphs"] = [p.get_text(separator=" ", strip=True) for p in paragraphs]
        # If you want the HTML of the content:
        job["content_html"] = str(content)

    return job

# Example usage:
if __name__ == "__main__":
    links = get_job_links(URL)
    for link in links:
        print(link)
    url = "https://kebenajobs.com/ethiopian-airlines-group-2/"
    response = requests.get(url, headers=HEADERS)
    job_info = parse_job_details(response.text)
    for k, v in job_info.items():
        print(f"{k}: {v}\n")