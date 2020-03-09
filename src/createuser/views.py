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

def download_file(request):
    # fill these variables with real values
    fl_path = '/file/path'
    filename = 'downloaded_file_name.extension'

    fl = open(fl_path, 'r')
    mime_type, _ = mimetypes.guess_type(fl_path)
    response = HttpResponse(fl, content_type=mime_type)
    response['Content-Disposition'] = "attachment; filename=%s" % filename
    return response

def ContactView(request):

	# POST
	if request.method == 'POST':
		contact_form = ContactForm(request.POST)
	# POST and VALID data.
		pdb.set_trace()
		client = request.POST.get('field1')
		email = request.POST.get('field2')
		ph_no = request.POST.get('tel_no_1') + request.POST.get('tel_no_2')+request.POST.get('tel_no_3')
		regards = request.POST.get('field4')
		info = request.POST.get('field5')
		
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

# class Pdf(View):

#     def get(self, request):
#         # sales = Sales.objects.all()
#         # today = timezone.now()
#         params = {
#             'today': today,
#             'sales': sales,
#             'request': request
#         }
#         return Render.render('invoice.html', params)

# class Pdf(View):

#     def get(self, request):
#         # sales = Sales.objects.all()
#         today = timezone.now()
#         params = {
#             'today': today,
#             'sales': sales,
#             'request': request
#         }
#         file = Render.render_to_file('invoice.html', params)
#         return JsonResponse({"key": file,"employee_id":employee_id})