# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppletUser',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('PhoneNum', models.CharField(max_length=200, null=True, verbose_name=b'\xe7\x94\xb5\xe8\xaf\x9d', blank=True)),
                ('Record_of_formal_schooling', models.CharField(max_length=200, verbose_name=b'\xe6\x9c\x80\xe9\xab\x98\xe5\xad\xa6\xe5\x8e\x86', choices=[(b'0', b'\xe9\xab\x98\xe4\xb8\xad\xe5\x8f\x8a\xe4\xbb\xa5\xe4\xb8\x8b'), (b'1', b'\xe5\xa4\xa7\xe4\xb8\x93'), (b'2', b'\xe6\x9c\xac\xe7\xa7\x91'), (b'3', b'\xe7\xa1\x95\xe5\xa3\xab\xe4\xbb\xa5\xe4\xbb\xa5\xe4\xb8\x8a')])),
                ('Age', models.CharField(max_length=200, verbose_name=b'\xe5\xb9\xb4\xe9\xbe\x84', choices=[(b'0', b'18-24\xe5\xb2\x81'), (b'1', b'24-35\xe5\xb2\x81'), (b'2', b'35\xe5\xb2\x81\xe4\xbb\xa5\xe4\xb8\x8a')])),
                ('Mandarin_level', models.CharField(max_length=200, verbose_name=b'\xe6\x99\xae\xe9\x80\x9a\xe8\xaf\x9d\xe7\xad\x89\xe7\xba\xa7', choices=[(b'0', b'\xe4\xb8\x89\xe7\xba\xa7\xe7\x94\xb2\xe7\xad\x89'), (b'1', b'\xe4\xba\x8c\xe7\xba\xa7\xe4\xb9\x99\xe7\xad\x89'), (b'2', b'\xe4\xba\x8c\xe7\xba\xa7\xe7\x94\xb2\xe7\xad\x89'), (b'3', b'\xe4\xb8\x80\xe7\xba\xa7\xe7\x94\xb2\xe7\xad\x89')])),
                ('create_time', models.DateTimeField(verbose_name=b'\xe5\x88\x9b\xe5\xbb\xba\xe6\x97\xb6\xe9\x97\xb4')),
                ('update_time', models.DateTimeField(verbose_name=b'\xe6\x9b\xb4\xe6\x96\xb0\xe6\x97\xb6\xe9\x97\xb4')),
            ],
            options={
                'verbose_name': '\u7533\u8bf7\u4eba\u5458',
                'verbose_name_plural': '\u7533\u8bf7\u4eba\u5458',
            },
        ),
    ]
