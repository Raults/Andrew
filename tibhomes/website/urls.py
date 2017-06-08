from django.conf.urls import url
from website import views

urlpatterns = [
    url(r'^home/$', views.home.as_view()),
    url(r'^gallery/$', views.gallery.as_view()),
]
