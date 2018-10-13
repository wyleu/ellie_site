from django.db import models

from django.contrib.auth.models import User


class Person(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)

