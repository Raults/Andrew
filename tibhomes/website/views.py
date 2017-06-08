# djangotemplates/example/views.py
from django.shortcuts import render
from django.views.generic import TemplateView
from django.template import loader

# Add the two views we have been talking about  all this time :)
class home(TemplateView):
    template_name = "home.html"

class gallery(TemplateView):
    template_name = "gallery.html"
