from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.http import JsonResponse
# from .models import Post
from .forms import ContactForm
from .html import html_content
import pdb
from django.views.generic import View
from .utils import *

# Create your views here.
  

def ClientView(request):	
	return render(request,'create_user/client_regi.html')
def Clientdetailspost(request):
	if request.method == 'POST':
		pdb.set_trace()
		print(request.POST)
		pass

def BlogView(request):
	return render(request,'create_user/employee_regi.html')

def Clientdetailsview(request):
	return render(request,'services/client_details.html')

def employee_details(request):
	return render(request,'services/employee_details.html')

def employee_details(request):
	return render(request,'services/employee_details.html')

def payslip_generate(request):
	if request.method == 'POST': 
		client = request.POST.get('field1')
		employee_id = request.POST.get('field2')
		
	return render(request,'services/payslip_generate.html')

def payslip_generate_get(request):
	if request.method == 'POST': 
		client = request.POST.get('client_name')
		employee_id = request.POST.get('employee_id')
		print(employee_id)
		# today = timezone.now()
		params = {}
		file = Render.render_to_file('invoice.html', params)
        # return JsonResponse({"key": file,"employee_id":employee_id})
		return JsonResponse({"key": file,"employee_id":employee_id})
