# charge/views.py
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json


def index(request):
    # http://www.apcjones.com/talks/2013-11-28_NOSQLX/
    return render(request, 'charge/index.html', {})

