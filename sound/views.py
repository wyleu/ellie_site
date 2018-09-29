from django.http import response
from django.shortcuts import render
from django.http import Http404


def index(request):
    return render(
        request,
        'sound/index.html',
    )


def cup(request):
    return render(
        request,
        'midi.html',
    )