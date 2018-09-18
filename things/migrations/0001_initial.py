# Generated by Django 2.0.8 on 2018-09-08 17:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Connection',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('order', models.IntegerField(default=0)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('img', models.ImageField(blank=True, upload_to='')),
                ('desc', models.TextField(blank=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('posx', models.IntegerField(default=0)),
                ('posy', models.IntegerField(default=0)),
                ('posz', models.IntegerField(default=0)),
                ('colr', models.FloatField(default=1.0)),
                ('colg', models.FloatField(default=0.7)),
                ('colb', models.FloatField(default=0.0)),
                ('rad', models.FloatField(default=0.5)),
            ],
            options={
                'ordering': ['modified'],
            },
        ),
        migrations.CreateModel(
            name='Node',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('order', models.IntegerField(default=0)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('img', models.ImageField(blank=True, upload_to='')),
                ('desc', models.TextField(blank=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('posx', models.IntegerField(default=0)),
                ('posy', models.IntegerField(default=0)),
                ('posz', models.IntegerField(default=0)),
                ('colr', models.FloatField(default=1.0)),
                ('colg', models.FloatField(default=0.7)),
                ('colb', models.FloatField(default=0.0)),
                ('rad', models.FloatField(default=0.5)),
            ],
            options={
                'ordering': ['modified'],
            },
        ),
    ]