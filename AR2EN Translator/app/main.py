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

@app.post("/translate/ar2en")
async def translate_ar_to_en(request: TranslationRequest):
    # Access the text from the JSON body
    result = translate_text(request.text, "ar", "en")
    return {"translated_text": result}

@app.get("/translate/ar2en/status/{id}")
async def get_translation_status(id: str):
    # Dummy status logic; integrate with your backend later
    return {"status": "completed", "id": id}
