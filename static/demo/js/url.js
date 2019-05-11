/**
*改变url里的指定QueryString参数的值，如果指定的param不存在，则自动加到新生成的url里。可以取出不规范的(无等号)QueryString。
*/
function getRedirectURL(param,value,surl){	
	if(!surl){
		surl=window.location.href;
	}
    //if(surl.substring(surl.length-1)=="?") surl=surl.substring(0,surl.length-1);
	value=URLEncode(value);
	var pos=surl.indexOf("#");
	if(pos!=-1){
		surl=surl.substring(0,pos);
	}
	pos=surl.indexOf("?");
	
	if(pos==-1||pos==surl.length-1){
	
		if(param!=null){
	        if(param!="") surl+="?"+param+"="+(value?value:"");
		}
		return surl;
	}
	var sNewURL=surl.substring(0,pos)+"?";
	//alert(sNewURL)

	surl=surl.substring(pos+1);
	//alert(surl)
	var aParam=surl.split("&");
	var bParamFound=false;
	var bFirstParam=true;
	for(var i=0;i<aParam.length;i++){
		if(aParam[i].length==0||aParam[i].indexOf("=")==-1){
			continue;
		}
		else if(param==null){
			sNewURL+=(bFirstParam?"":"&")+aParam[i];
		}
		else if(aParam[i].toUpperCase().indexOf(param.toUpperCase()+"=")==0){
			sNewURL+=(bFirstParam?"":"&")+param+"="+(value!=null?value:"");
			bParamFound=true;
		}
		else{
			sNewURL+=(bFirstParam?"":"&")+aParam[i];
		}
		bFirstParam=false;
	}
	if(!bParamFound&&param){
		sNewURL+=(sNewURL.substring(sNewURL.length-1)=="?"?"":"&")+param+"="+(value?value:"");
	}
	return sNewURL;
}

function getQueryString(){
	var url=window.location.href;
	var pos=url.indexOf("?");
	if(pos==-1){
		return "";	
	}
	url=url.substring(pos+1);
	pos=url.indexOf("#");
	if(pos!=-1){
		url=url.substring(0,pos);
	}
	return url;
}

/**
*获取指定的url里的某个QueryString的值
*key:QueryString名称
*bNotNull:如果没有找到相应的QueryString则返回空字符串
*url
*/
function getParameter(key,bNotNull,url){
	if(url==null){
		url=window.location.href;
	}
	var pos=url.indexOf("#");
	if(pos!=-1){
		url=url.substring(0,pos);
	}
	var pos1=0,pos2=0;
	var strReturn="";

	pos1=url.indexOf("&"+key+"=");
	if(pos1==-1){
		pos1=url.indexOf("?"+key+"=");
	}  
	if(pos1==-1){
		return (bNotNull?"":null);
	}
	else{
		pos2=url.indexOf("&",pos1+1);
		if(pos2==-1){
			pos2=url.length;
		}
		strReturn=url.substring(pos1+key.length+2,pos2);
		
		return URLDecode(strReturn);   
	}
}

function doRefresh(){
    var url=getRedirectURL();
	url+=(url.indexOf("?")==-1?"?":"&")+"&"+Math.random()
    window.location.href=url;
}

/**
*进行简单的URLEncode
*/
function URLEncode(sUrl){
	if(sUrl==null){
		return "";
	}
	sUrl +="";
	var sRet="";
	for(var i=0;i<sUrl.length;i++){
		var n=sUrl.charCodeAt(i);
		if((n>=48&&n<=57)||(n>=65&&n<=90)||(n>=97&&n<=122)||n<=0||n>=128){
			sRet+=sUrl.charAt(i);
		}
		else{
			if(n==32){
				sRet+="+";
			}
			else{
				var sHex=n.toString(16);
				if(sHex.length==1){
					sHex="0"+sHex;
				}
				sRet+="%"+sHex.toUpperCase();
			}
		}
	}
	return sRet;
}

/**
*进行简单的URLDecode
*/
function URLDecode(sUrl){
	if(sUrl==null){
		return "";
	}
	var sRet="";
	for(var i=0;i<sUrl.length;i++){
		var c=sUrl.charAt(i);
		if(c=='+'){
			sRet+=" ";
		}
		else if(c=='%'){
			var sHex=sUrl.substring(i+1,i+3);
			var n=parseInt(sHex,16);
			if(n>0&&n<128){
				sRet+=String.fromCharCode(n);
				i+=2;
			}
		}
		else{
			sRet+=c;
		}
	}
	return sRet;
}