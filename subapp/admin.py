from django.contrib import admin

# Register your models here.
# # Register your models here.
from django.contrib import admin
            
from .models import Book,Users,Advertisements,Jobs

admin.site.register(Book)
admin.site.register(Users)
admin.site.register(Jobs)
admin.site.register(Advertisements)