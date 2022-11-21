from dataclasses import fields
from rest_framework import serializers
from .models import Book,Users,Jobs,Advertisements

class BookSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Book
      # fields={' title',' author','publisher',' isbno'}
      fields =  '__all__'
      
class UsersSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Users
      fields =  '__all__'

class JobsSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Jobs
      fields =  '__all__'

class AdvertisementSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Advertisements
      fields =  '__all__'




