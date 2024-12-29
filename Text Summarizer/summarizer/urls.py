from django.urls import path
from . import views

urlpatterns = [
    path('summarize', views.submit_summarization, name='submit_summarization'),
    path('summarize/status/<int:id>', views.get_status, name='get_status'),
]
