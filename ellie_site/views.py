from django.shortcuts import render
from django.http import Http404


def baseobject(request):

    return render(
        request,
        'object.html',
    )

def testobject(request):

    return render(
        request,
        'tests.html'
    )

def cup(request):
    return render(
        request,
        'cup-animation.html'
    )