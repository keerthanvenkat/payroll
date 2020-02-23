from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
# from .models import Post
from .forms import ContactForm

# Create your views here.



def ContactView(request):

	# GET
	contact_form = ContactForm  # class not a instance.
	context = {'form':contact_form}
	
	# POST
	if request.method == 'POST':
		contact_form = ContactForm(request.POST)
	# POST and VALID data.
		if contact_form.is_valid():
			contact_name = contact_form.cleaned_data['contact_name']
			contact_email = contact_form.cleaned_data['contact_email']
			content = contact_form.cleaned_data['content']
			subject = "A new contact or lead - {}".format(contact_name)
			# email = EmailMessage(subject,contact_name + '\n' + contact_email + '\n' + content , to=['tuxfux.hlp@gmail.com'])
			# email.send()
			# return HttpResponseRedirect('/blog/thankyou/')
	# POST and NOT VALID DATA.
		else:
			context = {'form':contact_form}
	# GET 
	return render(request,'create_user/user_creation_form.html',context)

def BlogView(request):
	return render(request,'create_user/employee_regi.html')

def Clientdetailsview(request):
	return render(request,'services/client_details.html')