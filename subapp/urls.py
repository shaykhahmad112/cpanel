
from django.urls import path, include
from subapp import views
from subapp.views import Job,Advertisement

urlpatterns = [
    path('api/adlist/', Advertisement.as_view()),
    path('api/jobs', Job.as_view()),
]
