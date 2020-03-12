from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.http import JsonResponse
from .models import ClientRegi
from .forms import ContactForm
from .html import html_content
import pdb
from django.views.generic import View
from .utils import Zip_download,Render
from django.core import serializers
import json

# Create your views here.
  

def ClientView(request):	
	return render(request,'create_user/client_regi.html')
def Clientdetailspost(request):
	if request.method == 'POST':
		pdb.set_trace()
		print(request.POST)
		client = request.POST.get('client_name')
		email = request.POST.get('email')
		telephone_no =request.POST.get('telephone_no')
		regards = request.POST.get('regards')
		clinet_info = request.POST.get('clinet_info')
		try:
			ClientRegi.objects.create(client_name=client,email=email,Ph_no=telephone_no,regards=regards,text=clinet_info)
			return JsonResponse({"data": "success"})
		except:
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
		file1 = Render.render_to_file('invoice.html', params)
		l = [file]
		zip_file =  Zip_download.download_zip(l)
		# tmpJson = serializers.serialize("json",zip_file)
		# tmpObj = json.loads(zip_file.decode("utf-8"))
		# json.loads(data.decode("utf-8"))
		# data = serializers.serialize('json', zip_file)
		return JsonResponse({"key": file,"employee_id":employee_id})
		return zip_file
		# return HttpResponse(json.dumps(tmpObj), mimetype="application/json")

