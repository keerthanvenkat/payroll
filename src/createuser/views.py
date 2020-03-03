from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
# from .models import Post
from .forms import ContactForm
import pdb
from payslip.database_common import *

# Create your views here.



def ContactView(self,request):

	# POST
	if request.method == 'POST':
		QUERY = "INSERT INTO man_power(ph_no,emial)" \
				"VALUES (%s, %s, %s)"
		flag = execute(self,QUERY,param=None)
		if flag:
			context =  "success"
			return render(request,'create_user/client_regi.html',context)

	else:
		return render(request,'create_user/client_regi.html')

def BlogView(request):
	return render(request,'create_user/employee_regi.html')

def Clientdetailsview(request):
	return render(request,'services/client_details.html')

def employee_details(request):
	return render(request,'services/employee_details.html')

def employee_details(request):
	return render(request,'services/employee_details.html')

def payslip_generate(request):
	return render(request,'services/payslip_generate.html')