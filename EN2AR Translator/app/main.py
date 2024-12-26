import sys
import os

# Add the "app" directory to the Python path
sys.path.append(os.path.join(os.path.dirname(__file__), "app"))

from fastapi import FastAPI
from pydantic import BaseModel
from .models.translate import translate_text

app = FastAPI()

# Define the expected request body using Pydantic
class TranslationRequest(BaseModel):
    text: str

@app.post("/translate/en2ar")
async def translate_en_to_ar(request: TranslationRequest):
    # Access the text from the JSON body
    result = translate_text(request.text, "en", "ar")
    return {"translated_text": result}

@app.get("/translate/en2ar/status/{id}")
async def get_translation_status(id: str):
    # Dummy status logic; integrate with your backend later
    return {"status": "completed", "id": id}
