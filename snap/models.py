from django.db import models


class SnapAnimations(models.Model):

    EASING_STRINGS= (
        "linear",
        "easein",
        "easeout",
        "easeinout",
        "backin",
        "backout",
        "bounce",
        "elastic",
    )
    EASING_CHOICES= ((item, item) for item in EASING_STRINGS)

    selector = models.CharField(
        max_length=100,
    )
    svg = models.TextField(),
    easing = models.CharField(
        max_length = 10,
        choices=EASING_CHOICES
    )

    transition_time= models.IntegerField(default = 500)
    init_state = models.TextField(blank=True)

    def __str__(self):
        return self.selector