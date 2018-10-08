from django.shortcuts import render
from django.http import Http404


def index(request):
    print('FRONT')

    return render(
        request,
        'front/index.html',
    )