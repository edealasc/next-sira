from django.urls import path
from . import views

urlpatterns = [
    path('import_test/', views.import_jobs_from_json, name='import_json'),
    path('feed/', views.jobs_feed, name='jobs_feed'),
    path('<int:job_id>/', views.job_details, name='job_details'),
    path('<int:job_id>/apply_online/', views.apply_online, name='apply_online'),  # <-- Add this line
    path('match_all/',views.match_all_jobs_for_user, name='match_all_jobs')
]