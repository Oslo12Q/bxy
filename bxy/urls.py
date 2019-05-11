# encoding: utf-8
__author__ = '0slo'

from django.conf.urls import include, url
from django.contrib import admin
from bxy_web import views

urlpatterns = [
    url(r'^$',views.oslo),
    url(r'^y/$',views.oslo),
    url(r'^y/6bb4837eb74329105ee4568dda7dc67ed2ca2ad9/$',views.y),
    url(r'^y/7c4a8d09ca3762af61e59520943dc26494f8941b/$',views.y1),
    url(r'^cr_users/$',views.create_users),
    url(r'^jiaoyu2/projects/wap/wx/teacher/',views.wap),
    url(r'^jiaoyu2/projects/pc/wx/teacher/',views.pc),
    url(r'^admin/', include(admin.site.urls))
]

from django.conf import settings
if settings.DEBUG is False:
    urlpatterns += [
        url(r'^static/(?P<path>.*)$', 'django.views.static.serve', { 'document_root': settings.STATIC_ROOT}), 
    ]
