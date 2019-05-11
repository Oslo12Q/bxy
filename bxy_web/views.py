# encoding: utf-8
__author__ = '0slo'

import json
import time
import random
import datetime
import logging
import traceback
from .models import AppletUser
from django.shortcuts import render
from django.http import HttpResponse



'''
    # json时间转换
'''
class DateEncoder(json.JSONEncoder):  
    def default(self, obj):  
        if isinstance(obj, datetime):  
            return obj.__str__()  
        return json.JSONEncoder.default(self, obj) 

'''
    # 通用函数返回json数据
'''
def get_json_response(request, json_rsp):
    return HttpResponse(json.dumps(json_rsp,cls=DateEncoder), content_type='application/json')


def demo(request):
    return render(request,'demo.html')


'''
    # pc html
'''
def pc(request):
    return render(request,'pc/index.html')


'''
    # wap html
'''
def wap(request):
    return render(request,'wap/index.html')

'''
    # 首页
'''
def index(request):
    return render(request,'index.html')


'''
    # 增加数据
'''
def create_users(request):
    try:
        #if request.method != 'POST':
        #    return get_json_response(request, dict(suc_id=0, ret_cd=405, ret_ts=long(time.time()),errorMsg = 'Method not allowed',successResult=''))
        #import pdb
        #pdb.set_trace()
        Record_of_formal_schooling = request.POST.get('xueli')  # 学历
        if not Record_of_formal_schooling:
            Record_of_formal_schooling = 1
        Age = request.POST.get('age')  # 年龄
        if not Age:
            Age= 1
        Mandarin_level = request.POST.get('level')
        if not Mandarin_level:
            Mandarin_level = 1
        
        PhoneNum = request.GET['phone']
        if not PhoneNum:
            return get_json_response(request, dict(suc_id=0, ret_cd=104, ret_ts=long(time.time()),errorMsg = 'phone is None',successResult=''))

        AppletUser.objects.create(Record_of_formal_schooling = Record_of_formal_schooling,Age = Age,Mandarin_level = Mandarin_level,PhoneNum = PhoneNum,is_custom = 0,create_time = datetime.datetime.now(),update_time = datetime.datetime.now())
        return get_json_response(request, dict(suc_id=1, ret_cd=200, ret_ts=long(time.time()),errorMsg = '',successResult=''))

    except Exception, err:
        print err
        return get_json_response(request, dict(suc_id=0, ret_cd=500, ret_ts=long(time.time()),errorMsg = 'Server internal error',successResult=''))


