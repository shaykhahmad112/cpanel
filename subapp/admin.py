from django.contrib import admin

# Register your models here.
# # Register your models here.
from django.contrib import admin
            
from .models import Book,Users

admin.site.register(Book)
admin.site.register(Users)