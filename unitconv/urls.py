from django.urls import path
from . import views

app_name = 'unitconv'
urlpatterns = [
    path('convert', views.convert, name='home'),

]
