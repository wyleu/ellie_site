from django.shortcuts import render
from django.http import Http404

from .models import Dog


def index(request):
    dog_list = Dog.objects.all()

    context = {
        'dog_list': dog_list
    }
    return render(
        request,
        'index.html',
        context)


def detail(request, dog_id):
    try:
        dog = Dog.objects.get(pk=dog_id)
    except Dog.DoesNotExist:
        raise Http404('Dog does npt exist')

    return render(
        request,
        'detail.html',
        {'dog': dog}
    )

def cup(request):
    return render(
        request,
        'cup-animation.html'
    )