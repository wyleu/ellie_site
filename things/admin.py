from django.contrib import admin

from .models import Node, Connection

admin.site.register(Node)
admin.site.register(Connection)