
/*******************************

	* rollGallery
	* Copyright (c) yeso!
	* Date: 2010-10-13

˵����
	* ����԰����Ԫ�ص�ֱ�Ӹ�Ԫ��Ӧ�ø÷���
	* example: $("#picturewrap").rollGallery({ direction:"top",speed:2000,showNum:4,aniMethod:"easeOutCirc"});
	* direction:�ƶ����򡣿�ȡֵΪ��"left" "top"
	* speed:�ٶȡ���λ����
	* noStep:����Ϊ��true  �򰴷ǲ���ʽ�������ǲ����¶���Ч��ʧЧ��
	* speedPx:�ǲ�������µ��ƶ��ٶȡ���λ����
	* showNum:��ʾ�����Ԫ�������ɵ���Ԫ�ظ���
	* rollNum:һ�ι����ĸ���ע���ܸ������ΪrollNum�ı���
	* aniSpeed:�����ٶ�
	* aniMethod:�����������������磺easing��֧�֣�
	* childrenSel:��Ԫ��ɸѡ��
*******************************/

;(function($){
	
$.fn.rollGallery=function( options ){
	
	var opts=$.extend({},$.fn.rollGallery.defaults,options);
	
	return this.each(function(){
		var _this=$(this);
		var step=0;
		var maxMove=0;
		var animateArgu=new Object();
		_this.intervalRGallery=null;
		
		if( opts.noStep&&(!options.speed) ) opts.speed=30;
		
		if( opts.direction=="left"){
			step=_this.children( opts.childrenSel ).outerWidth(true);
		}else{
			step=_this.children( opts.childrenSel ).outerHeight(true);
		}
		
		maxMove=-(step*_this.children( opts.childrenSel ).length);
		_this[0].maxMove=maxMove;
		if( opts.rollNum ) step*=opts.rollNum;	
		animateArgu[ opts.direction ]="-="+step;	
				
		_this.children( opts.childrenSel ).slice( 0,opts.showNum ).clone(true).appendTo( _this );
		_this.mouseover( function(){ clearInterval( _this.intervalRGallery ); });
		_this.mouseout( function(){ _this.intervalRGallery=setInterval( function(){
				if( parseInt(_this.css( opts.direction ))<=maxMove ){
					_this.css( opts.direction , "0px");
				}
				if( opts.noStep ){
					_this.css( opts.direction, (parseInt(_this.css( opts.direction ))-opts.speedPx+"px") );
				}
				else{
					_this.animate( animateArgu ,opts.aniSpeed,opts.aniMethod );
				}
			}, opts.speed );});
		
		_this.mouseout();
	});
			
};

$.fn.rollGallery.defaults={
	direction : "left",
	speed : 3000,
	noStep : false,
	speedPx : 1,
	showNum : 1,
	aniSpeed:"slow",
	aniMethod:"swing",
	childrenSel:"*"
};
	
})(jQuery);

<!--�����ٶ�-->
$(document).ready(function($){
	$("#leftlist").rollGallery({
		direction:"left",
		speed:2000,
		showNum:1
	});
});