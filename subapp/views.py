from django.shortcuts import render

# Create your views here.
from .models import Book, Users, Advertisements, Jobs
from .serializers import BookSerializer, UsersSerializer, JobsSerializer, AdvertisementSerializer
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import filters



class Booklist(generics.ListCreateAPIView):
      queryset= Book.objects.all()
      serializer_class=BookSerializer

class Bookdetail(generics.RetrieveUpdateDestroyAPIView):
      queryset=Book
      serializer_class=BookSerializer
      
class Updatebook(generics.RetrieveUpdateAPIView):
      queryset=Book
      serializer_class=BookSerializer

class UserList(generics.ListCreateAPIView):
      queryset= Users.objects.all()
      serializer_class=UsersSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
      queryset=Users
      serializer_class=UsersSerializer
      
class UpdateUser(generics.RetrieveUpdateAPIView):
      queryset=Users
      serializer_class=UsersSerializer

# Jobs
class Job(generics.ListAPIView):
#     serializer_class = JobsSerializer

#     def get_queryset(self):
#         """
#         Optionally restricts the returned purchases to a given user,
#         by filtering against a `username` query parameter in the URL.
#         """
#         queryset = Jobs.objects.all()
#         title = self.request.query_params.get('title')
#         if title is not None:
#             queryset = queryset.filter(Jobs__title=title)
#         return queryset
# class UserListView(generics.ListAPIView):
      queryset = Jobs.objects.all()
      serializer_class = JobsSerializer
      filter_backends = [filters.SearchFilter]
      search_fields = ['title']

        # Advertisement
class Advertisement(generics.ListCreateAPIView):
      queryset= Advertisements.objects.all()
      serializer_class=AdvertisementSerializer