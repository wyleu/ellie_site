from django.db import models
import uuid


class Base(models.Model):

    class Meta:
        abstract = True

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.IntegerField(default=0)
    name = models.CharField(
        max_length=100,
        blank=True
    )
    img = models.ImageField(blank=True)
    desc = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    posx = models.IntegerField(default=0)
    posy = models.IntegerField(default=0)
    posz = models.IntegerField(default=0)

    colr = models.FloatField(default=1.0)
    colg = models.FloatField(default=0.7)
    colb = models.FloatField(default=0.0)

    rad = models.FloatField(default=0.5)

    def __str__(self):
        return self.name


class Connection(Base):
    class Meta:
        ordering = ['modified']
    up = models.ForeignKey(
        'Node',
        on_delete=models.CASCADE,
        related_name='connection_up',
        null=True,
        blank=True
    )
    dn = models.ForeignKey(
        'Node',
        on_delete=models.CASCADE,
        related_name='connection_dn',
        null=True,
        blank=True

    )


class Node(Base):
    class Meta:
        ordering = ['modified']
    node = models.ManyToManyField(
        'self',
        through='Connection',
        symmetrical=False,
        blank=True,
        related_name ='connection'
    )



