from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:dog_id>/', views.detail, name='detail'),
    path('cup/', views.cup, name='cup'),
]