from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SummarizationRequest
from .utils import generate_summary  # Create this function for Hugging Face summarization
import json

@csrf_exempt
def submit_summarization(request):
    if request.method == "POST":
        data = json.loads(request.body)
        text = data.get("text")
        style = data.get("style", "formal")
        if not text:
            return JsonResponse({"error": "Text is required"}, status=400)

        # Save the request to the database
        summarization_request = SummarizationRequest.objects.create(input_text=text, style=style)
        
        try:
            # Generate the summary
            summary = generate_summary(text, style)
            summarization_request.summary_text = summary
            summarization_request.status = "completed"
            summarization_request.save()
            return JsonResponse({"id": summarization_request.id, "summary": summary})
        except Exception as e:
            summarization_request.status = "failed"
            summarization_request.save()
            return JsonResponse({"error": str(e)}, status=500)

def get_status(request, id):
    try:
        summarization_request = SummarizationRequest.objects.get(id=id)
        return JsonResponse({
            "id": summarization_request.id,
            "status": summarization_request.status,
            "summary": summarization_request.summary_text,
        })
    except SummarizationRequest.DoesNotExist:
        return JsonResponse({"error": "Request not found"}, status=404)
