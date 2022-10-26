"""crudapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from subapp import views
from .import views
from subapp.views import Booklist, Bookdetail,Updatebook,UserList,UserDetail,UpdateUser

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.react_index, name='index'),
    
    # books Urls
    path('api/books', Booklist.as_view()),
    path('api/books/<int:pk>', Bookdetail.as_view()),
    path('api/update/<int:pk>', Updatebook.as_view()),
     
    #  Users Urls
    path('api/userlist', UserList.as_view()),
    path('api/user/<int:pk>', UserDetail.as_view()),
    path('api/updateuser/<int:pk>', UpdateUser.as_view()),
]
