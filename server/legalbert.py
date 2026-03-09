from transformers import AutoTokenizer, AutoModel
import torch

model_name = "nlpaueb/legal-bert-base-uncased"

device = "cuda" if torch.cuda.is_available() else "cpu"

print(f"Loading LegalBERT on {device}...")

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name).to(device)


def analyze_legal_text(text):

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=512
    ).to(device)

    with torch.no_grad():
        outputs = model(**inputs)

    embedding = outputs.last_hidden_state.mean(dim=1)

    return embedding.detach().cpu().numpy()