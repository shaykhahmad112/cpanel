from django.db import models

# Create your models here.
from django.db import models

# books Table
class Book(models.Model):
   title=models.CharField(max_length=50,null=True) 
   author=models.CharField(max_length=50, null=True)
   publisher=models.TextField(max_length=25, null=True)
   isbno=models.IntegerField(max_length=25, null=True)

   def __str__(self):
    return self.title
#  Users Table
class Users(models.Model):
   name=models.CharField(max_length=50, null=True) 
   username=models.CharField(max_length=50, null=True)
   email=models.TextField(max_length=25, null=True)
   phone=models.IntegerField(max_length=15, null=True)
   
   def __str__(self):
    return self.name

class Jobs(models.Model):
   title=models.CharField(max_length=50) 
   jobe_type=models.CharField(max_length=50)
   jobe_category=models.TextField(max_length=25)
   location=models.TextField(max_length=70)
   description=models.TextField(max_length=100)
   salary_posted=models.IntegerField(max_length=15)
   
   def __str__(self):
    return self.title

class Advertisements(models.Model):
   def nameFile(instance, filename):
    return '/'.join(['images', str(instance.title), filename])
   title=models.CharField(max_length=50) 
   image=models.ImageField(upload_to=nameFile,blank=True)
   content=models.TextField(max_length=100)

   def __str__(self):
    return self.title
