from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from .views import ContactView,BlogView,Clientdetailsview


urlpatterns = [
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^$','blog.views.myblog',name='myblog'),
    url(r'^ContactForm/',ContactView,name='contact'),
    url(r'^PostForm/',BlogView,name='blog'),
    url(r'^Clientdetails/',Clientdetailsview,name='clientdetails'),

]