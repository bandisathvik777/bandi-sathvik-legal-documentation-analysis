import psycopg2

conn = psycopg2.connect(
    dbname="legal_docs",
    user="postgres",
    password="Sathvik@123",
    host="localhost",
    port="5432"
)

cur = conn.cursor()

with open("docs/localfile.docx", "rb") as f:
    file_data = f.read()

cur.execute(
    """
    INSERT INTO templates (template_name, template_file)
    VALUES (%s, %s)
    """,
    ("lease_template", file_data)
)

conn.commit()

cur.close()
conn.close()

print("Template stored successfully")