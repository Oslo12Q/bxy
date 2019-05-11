


















var JESONG_MESSAGE_TEXT;
var jesong;
(function(){
	function isMobile(){
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){ 
			return true;
		}else{
			return false;
		}
	}
	if(jesong || (false && false != isMobile())){
		return;
	}
JESONG_MESSAGE_TEXT = {"inviteText":"","extCode":"","msgOfDisConnected":"同学您还有哪些问题需要咨询？如果没有的话，我先准备接待下一位同学，感谢您的咨询， 如果有问题欢迎您微信公众号搜索“赛优职教育”，免费获取报考流程信息！","welcomeMsgOfConnected":"<p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">您好，这里是<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">教师资格证</span>（<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">幼师证</span>）</span><span style=\"font-size: 18px; color: rgb(0, 0, 0); text-decoration: underline; \">咨询中心</span><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">，免费为您提供以下资讯，您是想了解：<br/></span></p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">1.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">报考条件</span>&nbsp;&nbsp; &nbsp;2.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">报考时间</span></span></p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">3.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">考试科目</span>&nbsp;&nbsp; &nbsp;4.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">报考流程</span></span></p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">5.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">非师范生</span>最新国考政策</span></p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"font-size: 18px; color: rgb(0, 0, 0); \">6.<span style=\"font-size: 18px; color: rgb(255, 0, 0); \">回复咨询</span>其他最新消息</span></p>","inviteTitle":"","replyMsgAtConnected":"","msgOfTrans":"您的对话将被转移给我的同事，请稍等同时给您详细解答。"};
jesong={	
	lazy : false,
	version : '2018053110',
	language : 'sc',
	visitorReady : false,
	forceReady : false,
	chatRequest : false,
	jsType : 0,
	callerOpinion : "0",
	env:{
		isPhone : false,
		scheme : "http",
		schemePort : "80",
		server:{
			monitor:'http://prd7.easyliao.com/',
			chat:'http://prd7.easyliao.com/live/',
			file:'http://scripts.easyliao.com/prd7/'
		},
		compId:3981,
		confId:7592,
		vId:'',
		uId:'',
		pId:0,
		sid:878,
		promotionId:0,
		mId:'',
		lang:'',
		min:0,
		pos:'1'
	},
	config:{
		firstToRebot:0,
		phoneChatPop:0,
		monitor:true,
		panel:false,
		frameChatStyle:14,
		forceChatLogo:""
	},
	monitor:{},	panel:{},win:{},icon:{},text:{}, freecall:{}, probe:{}, phone:{},
	_isBindHost:function(){
		var bindHosts = "";
		if(bindHosts != ""){
			var _hosts = bindHosts.split(",");
			var domain = window.location.host;
			var bindHostFlag = false;
			for(var i=0; i < _hosts.length; i++){
				if(domain == _hosts[i]){
					bindHostFlag = true;
					break;
				}
			}
			return bindHostFlag;
		}else{
			return true;
		}
	},
	_genId : function(){
		var random4 = function(){
			return parseInt(Math.random()*9000+1000, 10);
		}
		var cId = "3981";
		while(cId.length < 12){
			cId = "0"+cId;
		}
		var id = ""+new Date().getTime();
		id = id.substring(3);
		id += random4();
		id += random4();
		return "01"+cId+id;
	},
	_createLayout : function(id, className){
		if(!this.lazy){
			document.write('<div id="'+id+'" class="'+className+'"></div>');
		}else{
			var _div = document.createElement("div");
			_div.id = id;
			_div.className = className;
			document.body.appendChild(_div);
		}
	},
	_loadJS : function(src){
		if(!this.lazy){
			//async="async"
			document.write('<scr'+'ipt type="text/javascript" defer src="'+src+'"></scr'+'ipt>');
		}else{
		    var script = document.createElement( "script" ); 
			script.type = "text/javascript"; 
			script.charset = "utf-8";
			script.src = src; 
			document.getElementsByTagName("script")[0].parentNode.appendChild(script); 
		}
	},
	_loadCSS : function(url){ 
		if(!this.lazy){
			document.write('<link rel="stylesheet" type="text/css" href="'+url+'"></link>');
		}else{
			var link = document.createElement( "link" ); 
			link.type = "text/css"; 
			link.rel = "stylesheet"; 
			link.href = url; 
			document.getElementsByTagName( "head" )[0].appendChild( link ); 
		}
	},
	init:function(){
		if(this._isBindHost()){
			jesong.env.vId = this._genId();
			this._createLayout("jesong_panel", "");
			if(jesong.jsType == 1 && jesong.env.isPhone){
				this._createLayout("jesong_chat_layout", "jesong_phone_layout jesong_phone_layout_sc_1");
			}else{
				this._createLayout("jesong_chat_layout", "jesong_chat_layout_pc jesong_chat_layout_pc_sc");
			}
			this._createLayout("jesong_chat_min", "jesong_chat_min_sc");
			this._createLayout("jesong_pop_msg", "");
			if("https:" == document.location.protocol){
				this.env.server.monitor = this.env.server.monitor.replace("http", "https");
				this.env.server.chat = this.env.server.chat.replace("http", "https");
				this.env.server.file = this.env.server.file.replace("http", "https");
				this.env.schemePort = "443";
				this.env.scheme = "https";
				
			}
			this._loadCSS(this.env.server.file + "css/webcall.css?ver=2018053110");
			this._loadJS(this.env.server.file + "js/webcall.js?ver=2018053110");
			this._loadCSS(this.env.server.file + "css/force.css?ver=2018053110");
		}
	},
	words:{
		welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
		greeting:JESONG_MESSAGE_TEXT.replyMsgAtConnected,
		disconnect:JESONG_MESSAGE_TEXT.msgOfDisConnected
	}
};



jesong.monitor.config={
	index:11,
	type:1,
	title:JESONG_MESSAGE_TEXT.inviteTitle,
	text:JESONG_MESSAGE_TEXT.inviteText,
	pos:'3',
	auto:6,
	showInviteAgain:30,
	autoInviteTimes:-1,
	group:'7640',
	start:'00:00',
	end:'23:59',
	mask:false,
//	mainBg:'url(http://imgs.jswebcall.com/M00/04/61/Ch6jw1s5pHaAaWqxAAIPbdh-Z6s934.png) no-repeat',
	mainHeight:'383',
	mainWidth:'744',
//	acceptStyle:'position:absolute;background:url(http://imgs.jswebcall.com/3981/saoma_btn1.jpg?_t=1482477076200) no-repeat;height:77px;width:266px;top:171px;left:245px;',
//	refuseStyle:'position:absolute;background:url(http://imgs.jswebcall.com/3981/gb.png?_t=1477559559022) no-repeat;height:15px;width:15px;top:25px;left:705px;',
	textStyle:'position:absolute;height:0px;width:0px;top:0px;left:0px;'
	
};


jesong.probe = {
	texts:"", 
	groupIds:""
};

jesong.autochat={
	bgcolor:'#3097ef',
	width:320,
	height:435,
	use:0,
	start:'09:00',
	end:'18:00',
	times:-1,
	show:false,
	welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
	waitSendMsg:'',
	connect : '0',
	closeBtn : '1',
	minBtn : '1',
	mask : '0',
//	userHead : 'http://scripts.easyliao.com/prd7//images/chat/201805/head-user.png',
//	visitorHead : 'http://scripts.easyliao.com/prd7//images/chat/201805/head-visitor.png',
	phoneHeight : 80,
	tel : '',
	pageTitle : '客服老师在线',
	pcMinLogo : '',
	tools:{
		emoticons : '1',
		opinion : '1',
		screen : '1',
		file : '1'
	}
};
jesong.init();

})();

		

