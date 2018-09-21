from django.shortcuts import render
from django.http import Http404


def index(request):

    return render(
        request,
        'midi.html',
    )


def cup(request):
    return render(
        request,
        'cup-animation.html'
    )