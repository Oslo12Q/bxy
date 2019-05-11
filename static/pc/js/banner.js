$(document).ready(function(){
	
	$(".banner_ctrl a").hover(function(){
		$(this).fadeTo(100,.4);
		},function(){
		$(this).fadeTo(100,.1);
	});
			
	var tNum=$(".m_banner .banner").length-1;
	var nNum=0;		
	$(".banner_ctrl .prev").click(function(){
		(nNum-1)<0?n2=tNum:n2=nNum-1;
		bSwitch(nNum,n2);
		nNum=n2;
	});	
	$(".banner_ctrl .next").click(function(){
		(nNum+1)>tNum?n2=0:n2=nNum+1;
		bSwitch(nNum,n2);
		nNum=n2;

	});
	function bSwitch(nNum,n2){
		$(".m_banner .banner").fadeOut(300);
		$(".m_banner .banner").eq(n2).fadeIn(300);
	};
							
	$(function(){
		var switchTime;
	 	$(".m_banner").hover(function(){
			clearInterval(switchTime);
		},function(){
		switchTime = setInterval(function(){
			(nNum+1)>tNum?n2=0:n2=nNum+1;
			bSwitch(nNum,n2);
			nNum=n2;
		},6000);
		}).trigger("mouseleave");
	});

});