from django.db import models

class SummarizationRequest(models.Model):
    input_text = models.TextField()
    summary_text = models.TextField(blank=True, null=True)
    style = models.CharField(max_length=50, choices=[('formal', 'Formal'), ('informal', 'Informal'), ('technical', 'Technical')], default='formal')
    status = models.CharField(max_length=20, default='pending')  
    created_at = models.DateTimeField(auto_now_add=True)
