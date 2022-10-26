from dataclasses import fields
from rest_framework import serializers
from .models import Book,Users

class BookSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Book
      # fields={' title',' author','publisher',' isbno'}
      fields =  '__all__'
      
class UsersSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Users
      fields =  '__all__'


