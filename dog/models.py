from django.db import models


class Dog(models.Model):
    name = models.CharField(
        max_length=100,
        blank=True
    )
    img = models.ImageField(blank=True)
    desc = models.TextField(blank=True)

    def __str__(self):
        return self.name