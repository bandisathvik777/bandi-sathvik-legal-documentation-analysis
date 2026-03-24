# Legal Documentation Assistant (AI Powered)

## 📌 About The Project

Legal documentation is often complex, time-consuming, and difficult for non-lawyers to understand. This project provides an **AI-powered platform** that simplifies the creation and understanding of legal documents.

🚀 The system allows users to:

* Generate legal documents dynamically
* Chat with generated documents
* Extract and analyze text from PDFs using OCR
* Get AI-powered legal insights

---

## 🎯 Key Features

### 📄 1. Dynamic Legal Document Generation

* Generate documents like:

  * Contract Documents
  * Trademark & Copyright Agreements
  * Banking/Finance Documents
* Uses **template-based DOCX generation**
* Placeholder replacement system (`#1`, `#2`, etc.)

---

### 🤖 2. AI Chatbot (Legal Assistant)

* Chat with generated documents
* Uses:

  * **LegalBERT** → for embeddings
  * **Gemini API** → for answer generation
* Answers based strictly on document context

---

### 📑 3. OCR-Based PDF Chat (NEW 🚀)

* Upload scanned or normal PDFs
* Extract text using:

  * PyPDF2 (text PDFs)
  * Tesseract OCR (scanned PDFs)
* Ask questions about uploaded PDF

---

### 🧠 4. Multi-AI Architecture

* LegalBERT → document understanding
* Gemini API → natural language answers
* Supports:

  * Multiple API keys
  * Multiple model fallback
  * Quota handling

---

### 🗂️ 5. Multi-Template System (NEW)

Different templates based on service:

| Service               | Template          |
| --------------------- | ----------------- |
| Contract Documents    | `localfile.docx`  |
| Trademark & Copyright | `localfile2.docx` |
| Banking/Finance       | `localfile3.docx` |

---

### 🛢️ 6. PostgreSQL Integration

* Stores:

  * Services
  * Forms
  * Questions
* Dynamic form generation from DB

---

## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS

### Backend

* Flask (Python)

### Database

* PostgreSQL

### AI / NLP

* LegalBERT (Transformers)
* Gemini API (Google)

### OCR & File Processing

* Tesseract OCR
* pdf2image
* PyPDF2
* python-docx
* mammoth

---

## 📁 Updated File Structure

```
Legal-Documentation-Assistant
 ┣ 📂client
 ┣ 📂server
 ┃ ┣ 📂docs
 ┃ ┃ ┣ localfile.docx
 ┃ ┃ ┣ localfile2.docx
 ┃ ┃ ┣ localfile3.docx
 ┃ ┃ ┣ Output2.docx
 ┃ ┣ app.py
 ┃ ┣ requirements.txt
 ┣ 📂model
 ┃ ┣ similarity.py
 ┃ ┣ legalbert (embedding logic)
```

---

## ⚙️ Environment Variables (.env)

```
DATABASE_NAME=legal_docs
DATABASE_USER=postgres
PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=5432

GEMINI_API_KEY=your_key
GEMINI_OCR_KEY=your_second_key   # optional fallback
```

---

## 🚀 Getting Started

### 1. Clone Repo

```
git clone https://github.com/your-repo.git
cd Legal-Documentation-Assistant
```

---

### 2. Backend Setup

```
cd server
python -m venv docbuddy
docbuddy\Scripts\activate
pip install -r requirements.txt
```

Run server:

```
python app.py
```

---

### 3. Frontend Setup

```
cd client
npm install
npm start
```

---

## 🔍 OCR Setup (IMPORTANT)

### Install Tesseract:

* Path example:

```
C:\Program Files\Tesseract-OCR\tesseract.exe
```

### Install Poppler:

* Required for PDF → Image conversion

---

## ⚠️ Known Issues & Fixes

### Gemini Quota Error (429)

* Happens due to free tier limit (20/day)
* Fix:

  * Use multiple API keys
  * Reduce chunk size
  * Use fallback models

---

## 💡 Improvements Made

✅ Added OCR chatbot
✅ Added multi-template support
✅ Integrated PostgreSQL dynamically
✅ Added LegalBERT embeddings
✅ Added Gemini fallback system
✅ Improved document generation

---

## 📸 Screenshots

(Add your latest screenshots here)

---

## 👨‍💻 Contributors

* Sathvik (You 🔥 — major backend + AI + OCR work)
* Original contributors (as listed)

---

## 📚 References

* LawRato dataset
* Google Gemini API
* HuggingFace Transformers

---

## 📜 License

MIT License
