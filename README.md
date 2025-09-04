# 🚀 NextSira

NextSira is an **AI-powered job search platform** that matches candidates to jobs, automates applications, and provides career insights. The project uses **Django** for the backend and **Next.js** for the frontend, with **PostgreSQL** and **Cloudinary** integration.  

The platform leverages **Gemini LLM** for AI capabilities, **Browser Use** for submitting applications, and **BeautifulSoup (bs4)** for scraping job listings from local websites: **Effoysira, EthioJobs, KebenaJobs, and HamereJobs**.

---

## ✨ Features

- **🌐 Scrapes and aggregates local job listings** from Effoysira, EthioJobs, KebenaJobs, and HamereJobs using BeautifulSoup.  
- **📝 Summarizes job listings with Gemini LLM** to help you make quick and informed decisions.  
- **🎯 Recommends relevant opportunities** using embedding-based matching tailored to your profile.  
- **📄 Dynamically customizes resumes** for each job application.  
- **🤖 Automates job applications** with browser automation, filling forms and generating personalized emails.

---

## 📂 Project Structure

```plaintext
backend/
  backend/
    job/
    user/
    ...
frontend/
  app/
  components/
  hooks/
  lib/
scrapers/
  effoysira.py
  ethiojobs.py
  kebenajobs.py
  hamerejobs.py
agents/
.env
````

---

## ⚡ Getting Started

### Prerequisites

```markdown
- Python 3.10+
- Node.js 18+
- PostgreSQL
- Cloudinary account
```

### 🛠 Backend Setup

```bash
# Install dependencies
cd backend
pip install -r requirements.txt
```

```markdown
# Configure environment
# Copy .env.example to .env and set your secrets
SECRET_KEY=your_secret
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

### 🌐 Frontend Setup

```bash
# Install dependencies
cd frontend
npm install
```

```markdown
# Configure environment
# Set NEXT_PUBLIC_API_BASE in .env to your backend URL
```

```bash
# Start frontend
npm run dev
```

---

## 📡 API Reference

```markdown
- Auth:
  /api/user/register/
  /api/user/token/
  /api/user/token/refresh/

- Jobs:
  /api/job/feed/
  /api/job/details/<id>/
  /api/job/apply/<id>/

- Profile:
  /api/user/profile/
```

---

## 🕵️‍♂️ Scrapers

Job scrapers are located in `scrapers/` and can be run independently to update job data.
Scraping is done using **BeautifulSoup (bs4)** for:

* Effoysira
* EthioJobs
* KebenaJobs
* HamereJobs

---

## 🛡 License

```markdown
MIT
```
