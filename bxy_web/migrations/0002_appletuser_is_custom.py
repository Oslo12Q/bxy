# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bxy_web', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appletuser',
            name='is_custom',
            field=models.BooleanField(default=1, verbose_name=b'\xe5\xae\xa1\xe6\xa0\xb8'),
            preserve_default=False,
        ),
    ]
