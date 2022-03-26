from django.shortcuts import render


# Create your views here.
def gold(request):
    return render(request, 'gold/convert.html')
