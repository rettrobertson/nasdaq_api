from django.urls import path
from . import views

app_name = 'gold'
urlpatterns = [
    path('', views.gold, name='home'),

]
