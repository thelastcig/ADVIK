from django.shortcuts import render

# Create your views here.
def new(request):
    return render(request, 'new.html')       

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'templates/services.html')

def courses(request):
    return render(request, 'templates/courses.html')

def terms(request):
    return render(request, 'terms.html')

def privacy(request):
    return render(request, 'privacy.html')

def faq(request):
    return render(request, 'faq.html')

def terms_and_conditions(request):
    return render(request, 'terms.html')

def contact_us(request):
    return render(request, 'contact.html')

def termsconditions(request):
    return render(request, 'terms.html')

def privacy_policy(request):
    return render(request, 'privacy.html')

def about_us(request):
    return render(request, 'about.html')


def productservices(request):
    return render(request, 'product/services.html')        

def online_courses(request):
    return render(request, 'templates/online_courses.html')

def login(request):
    # CLearing Session on logout
    request.session = {}
    return render(request, 'login.html', {"msg": ""})

def indtutor(request):
    return render(request, 'teacherRegistration.html')

def studentRegistration(request):
    return render(request, 'studentRegistration.html')

def old(request):
    return render(request, 'index_old.html') 

def price(request):
    return render(request, 'price.html')    




