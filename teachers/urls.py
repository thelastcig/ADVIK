from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from teachers import views_teachers

urlpatterns = [
    path('add_teachers/', views.add_teacher_entry),
    path('add_students/', views.add_student_entry),
    path('oldpage/', views_teachers.oldpage, name='old'),
    path('old/',views.old, name='old'),
]
