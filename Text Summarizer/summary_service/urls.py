from django.contrib import admin
from django.urls import path, include
from summary_service import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('summarizer.urls')),
    path('', views.home, name='home'),       
]
