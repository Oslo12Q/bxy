# encoding: utf-8
__author__ = '0slo'

from django.contrib import admin
from .models import AppletUser
# Register your models here.


admin.site.site_header = 'Applet Management'
admin.site.site_title = 'Applet Management'

# 电话等信息
@admin.register(AppletUser)
class AppletUserAdmin(admin.ModelAdmin):
    list_display = ('PhoneNum','Record_of_formal_schooling','Age','Mandarin_level','is_custom','create_time','update_time') # 展示的字段
    search_fields = ['PhoneNum'] # 可根据电话检索
    list_per_page = 20
    ordering = ('-create_time',)
    list_display_links = ('PhoneNum','Record_of_formal_schooling', 'Age','Mandarin_level','create_time','update_time','is_custom')
    list_filter = ('is_custom',)