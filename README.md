# Legal Documentation Assistant

An AI-powered solution to simplify legal documentation for individuals and small businesses in India. The platform allows users to generate, analyze, and interact with legal documents using an AI chatbot (Gemini), assess document risk, and manage their legal files efficiently.

---

## Features

- **Dynamic Legal Document Generation:** Generate contracts and agreements based on user input.
- **AI Chatbot Integration (Gemini):** Ask questions about your documents and receive detailed, plain-language answers.
- **Text-to-Speech:** Listen to chatbot responses for accessibility.
- **Document Risk Meter:** Visual speedometer-style risk assessment of uploaded documents.
- **Custom Document Uploads:** Users can upload their own legal documents for analysis.
- **Obligation Summaries:** Summarize key clauses such as rent, taxes, and lessee obligations.
- **Frontend:** Built with React + Tailwind CSS.
- **Backend:** Python + Flask.
- **Database:** PostgreSQL for storing user sessions and document metadata.

---

## File Structure

👨‍💻Legal-Documentation-Assistant
 ┣ 📂assets                            // Contains all the reference gifs, images
 ┣ 📂client                            // Frontend        
 ┃ ┣ 📂src                                      
 ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📄Chat.jsx
 ┃ ┃ ┣ 📄about.jsx
 ┃ ┃ ┣ 📄Faq.jsx
 ┃ ┃ ┣ 📄Home.jsx
 ┃ ┃ ┣ 📄InputForm.jsx
 ┃ ┃ ┣ 📄LoginPage.jsx
 ┃ ┣ 📂public 
 ┃ ┃ ┣ 📄index.html
 ┣ 📂model                             // Standalone model         
 ┃ ┣ 📄similarity.py                   // Based on Cosine Similarity
 ┃ ┣ 📄bot.py    
 ┃ ┣ 📄chat.py                         // To chat with the standalone model
 ┃ ┣ 📄model.py                        // Based on Bag of Words
 ┃ ┣ 📄train.py                        
 ┃ ┣ 📄dataset.py 
 ┃ ┣ 📄util.py   
 ┃ ┣ 📄trained_model.pth
 ┃ ┣ 📄intents.json                    // Dataset 
 ┣ 📂server                            // Backend 
 ┃ ┣ 📂docs  
 ┃ ┃ ┣ 📄localfile.docx
 ┃ ┃ ┣ 📄Output2.docx
 ┃ ┣ 📄app.py 
 ┃ ┣ 📄createdatabase.py  
 ┃ ┣ 📄requirements.txt      
 ┣ 📄README.md
## Getting Started

### Clone Repository

```bash
git clone https://github.com/bandisathvik777/bandi-sathvik-legal-documentation-analysis.git
cd Legal-Documentation-Assistant
Frontend Setup
bash
Copy code
cd client
npm install
npm start
Visit http://localhost:3000 to view the website.

Backend Setup
bash
Copy code
cd server
python -m venv docbuddy      # Create virtual environment
docbuddy\Scripts\activate    # Activate on Windows
pip install -r requirements.txt
python app.py                # Start Flask server
Database Setup (PostgreSQL)
Create a .env file with your database credentials:

ini
Copy code
DATABASE_HOST=your_database_host
DATABASE_NAME=your_database_name
DATABASE_USER=your_database_username
PASSWORD=your_database_password
DATABASE_PORT=your_database_port
Run the database creation script:

bash
Copy code
python createdatabase.py
Usage
Chatbot: Interact with uploaded documents via the Gemini chatbot.

Document Upload: Upload your own legal documents for analysis and risk assessment.

Risk Meter: Visualize the risk level of a document using the speedometer-style meter.

Summaries: Get concise summaries of key obligations and clauses.

Text-to-Speech: Listen to chatbot responses directly on the platform.

Multi-document Support: Future-proofed for comparing multiple legal files.

Future Enhancements
Integrate LegalBERT for improved NLP and legal context understanding.

Refine risk meter for more granular risk scores based on legal clauses.

Enable multi-document comparison and historical risk tracking.

Add multi-language support for legal documents in India.

Contributors
Sathvik Bandi
