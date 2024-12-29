from transformers import pipeline

summarizer_pipeline = pipeline("summarization", model="facebook/bart-large-cnn")

def generate_summary(text, style="formal"):
    summary = summarizer_pipeline(text, max_length=130, min_length=30, do_sample=False)[0]["summary_text"]
    if style == "informal":
        summary = summary.lower()
    elif style == "technical":
        summary += " [Technical Summary]"
    return summary
