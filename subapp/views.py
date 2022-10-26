from django.shortcuts import render

# Create your views here.
from .models import Book, Users
from .serializers import BookSerializer, UsersSerializer
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


class Booklist(generics.ListCreateAPIView):
      queryset= Book.objects.all()
      serializer_class=BookSerializer

class Bookdetail(generics.RetrieveUpdateDestroyAPIView):
      queryset=Book
      serializer_class=BookSerializer
      
class Updatebook(generics.RetrieveUpdateAPIView):
      queryset=Book
      serializer_class=BookSerializer

# # @api_view(['DELETE'])
# def Deletebook(request, pk):
# #    if request.method == 'DELETE':    
#     emp = Book.objects.get(id=pk)
#     emp.delete()
#     return Response(status=status.HTTP_204_NO_CONTENT)
    

# SomeModel.objects.filter(id=id).delete()
# class Deletebook(generics.RetrieveUpdateDestroyAPIView):      
# def  Deletebook(self, request, *args, **kwargs):
#         instance = self.get_object()
#         self.perform_destroy(instance)
#         return Response(status=status.HTTP_204_NO_CONTENT)

class UserList(generics.ListCreateAPIView):
      queryset= Users.objects.all()
      serializer_class=UsersSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
      queryset=Users
      serializer_class=UsersSerializer
      
class UpdateUser(generics.RetrieveUpdateAPIView):
      queryset=Users
      serializer_class=UsersSerializer