from django.shortcuts import render


def index(request):
    return render(request, 'boris/index.html', {})


def sound(request):
    return render(request, 'boris/sound.html', {})
