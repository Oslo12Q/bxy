# encoding: utf-8
__author__ = '0slo'

from django.db import models

# Create your models here.
# 用户
class AppletUser(models.Model):
    PhoneNum = models.CharField(max_length=200,verbose_name='电话',blank=True,null=True) # 手机号码
    schooling = (
        ('0', '高中及以下'),
        ('1', '大专'),
        ('2', '本科'),
        ('3', '硕士以以上')
    )
    Record_of_formal_schooling = models.CharField(choices=schooling, verbose_name='最高学历',max_length=200)  # 学历
    AGES = (
        ('0', '18-24岁'),
        ('1', '24-35岁'),
        ('2', '35岁以上')
    )
    Age = models.CharField(choices=AGES, verbose_name='年龄',max_length=200)  # 性别
    Mandarin = (
        ('0', '三级甲等'),
        ('1', '二级乙等'),
        ('2', '二级甲等'),
        ('3', '一级甲等')
    )
    Mandarin_level = models.CharField(choices = Mandarin, verbose_name='普通话等级',max_length=200)

    is_custom = models.BooleanField('审核')
    create_time = models.DateTimeField('创建时间') # 创建时间
    update_time = models.DateTimeField('更新时间') # 更新时间
    
    def  __str__(self):
    	return self.PhoneNum

    class Meta:
        verbose_name = '申请人员'
        verbose_name_plural='申请人员'