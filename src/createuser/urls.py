from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from .views import ContactView,BlogView,Clientdetailsview,employee_details,payslip_generate


urlpatterns = [
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^$','blog.views.myblog',name='myblog'),
    url(r'^ContactForm/',ContactView,name='contact'),
    url(r'^PostForm/',BlogView,name='blog'),
    url(r'^Clientdetails/',Clientdetailsview,name='clientdetails'),
    url(r'^employeedetails/',employee_details,name='employeedetails'),
    url(r'^payslip/',payslip_generate,name='payslip'),

]