# Generated by Django 5.1.4 on 2024-12-10 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SummarizationRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('input_text', models.TextField()),
                ('summary_text', models.TextField(blank=True, null=True)),
                ('style', models.CharField(choices=[('formal', 'Formal'), ('informal', 'Informal'), ('technical', 'Technical')], default='formal', max_length=20)),
                ('status', models.CharField(default='pending', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]