# from django.http import HttpResponse
# Create your views here.
# from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer
from django.shortcuts import render
from rest_framework import generics

class Booklist(generics.ListCreateAPIView):
      queryset= Book.objects.all()
      serializer_class=BookSerializer

class Bookdetail(generics.RetrieveUpdateDestroyAPIView):
      queryset=Book
      serializer_class=BookSerializer
      
# class Users(generics.RetrieveUpdateDestroyAPIView):
#       queryset=Users
#       serializer_class=BookSerializer       