# Generated by Django 2.0.9 on 2018-12-05 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20181106_1902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.CharField(choices=[('CAM', 'Camiseta'), ('LIC', 'Licra'), ('ALG', 'Algodon')], max_length=3),
        ),
    ]
