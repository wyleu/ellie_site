# Generated by Django 2.0.8 on 2018-09-08 18:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('things', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='connection',
            name='dn',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='connection_dn', to='things.Node'),
        ),
        migrations.AddField(
            model_name='connection',
            name='up',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='connection_up', to='things.Node'),
        ),
        migrations.AddField(
            model_name='node',
            name='node',
            field=models.ManyToManyField(blank=True, related_name='connection', through='things.Connection', to='things.Node'),
        ),
    ]
