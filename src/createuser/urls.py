from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from .views import *

urlpatterns = [
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    
    url(r'^clientregistartion/',ClientView,name='clientregistartion'),
    url(r'^clientdetails_post/',Clientdetailspost,name='clientdetails_post'),
    url(r'^PostForm/',BlogView,name='blog'),
    url(r'^Clientdetails/',Clientdetailsview,name='clientdetails'),
    url(r'^employeedetails/',employee_details,name='employeedetails'),
    url(r'^payslip/',payslip_generate,name='payslip'),
    url(r'^payslip_get/',payslip_generate_get,name='payslip_get'),
]