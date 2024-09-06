from django.contrib import admin
from .models import Courses, Students, Teachers

# Register your models here.
admin.site.register(Courses)
admin.site.register(Students)
admin.site.register(Teachers)
