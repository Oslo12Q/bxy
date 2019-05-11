 //AppRoot、AppPath、sLibPath和sUtilPath的设置

/**
* 用getAppRoot函数获取AppRoot对象。其中的第一个参数表示虚拟目录的“深度”，在跟目录下为0，
* 在根目录下的虚拟目录为1，在虚拟目录下建立的子虚拟目录为2，依次类推。
*/
var sAppRoot="/static";

var sAppPath=getAppPath();

var sLibPath=sAppRoot+"/demo";
var sUtilPath=sAppRoot+"/client_scripts/html";
var editorPath=sAppRoot+"/client_scripts/FCKeditor/"

var nVodServerIndex = 0
//以下是整个系统里有可能用到的公共变量
//var sDnsName = "";
//var sFilePath = "/hit/files";
//var sWebPath = "/hit";
//var sAdminPath = "/hit/admin"
var sFilesPath     = sAppRoot +"/files";//getApplicationPath(a_files_domains);
var sReplaceInEditor = sFilesPath+"\nFILE_PATH";//+"\n"+sVodPath+"\nVOD_PATH";
var aReplaceInEditor=sReplaceInEditor.split("\n");
var sBoundary="@@BOUNDARY_";
var sWebPath = sAppRoot;
//接受文件上传的页面名称
var sUploadApp=sAppRoot+"/files/upload.jsp?returl="+sAppRoot+"/files/after_upload.jsp";
//针对Netu的接受文件上传的页面名称
//var sUploadApp=sFilePath+"/upload_netu.jsp";
//var sBaseHref = sFilePath;
//var sVirPath="files_upload"
//var sJsPath=sWebPath+"/index_client";

//以下是整个系统里可能用到的公共函数
function IncludeJS(sFileStr,folder){
    if(!folder)folder="";
    var sFiles=sFileStr.split(",");
    var sFile;
    for(var i=0;i<sFiles.length;i++){
        sFile=sFiles[i];
        if(sFile.indexOf(".")==-1) {
            if(sFile.substring(sFile.length-3).toUpperCase()!=".JS"&&sFile.substring(sFile.length-3).toUpperCase()!="JSP"){
                sFile+=".js";
            }
        }
        if(folder!=""){
            sFile=sLibPath+"/js/"+folder+"/"+sFile;
        }else{
            sFile=sLibPath+"/js/"+sFile;
        }
        sFile=sFile.replace(new RegExp("//","gi"),"/");


        document.write("\<\script language=javascript src=\""+sFile+"\">\<\/script>");
    }
}


function IncludeCSS(sFile){
	if(sFile.substring(sFile.length-4).toUpperCase()!=".CSS"){
		sFile+=".css";
	}
    var skin=serverprop["skin"];

    if(!skin)skin="default";

    var sFile2=sLibPath+"/css/skin/"+skin+"/"+sFile;
    sFile=sLibPath+"/css/"+sFile;
	sFile=sFile.replace(new RegExp("//","gi"),"/");
	sFile2=sFile2.replace(new RegExp("//","gi"),"/");

    document.write("\<\link rel=stylesheet href=\""+sFile+"\">");
	document.write("\<\link rel=stylesheet href=\""+sFile2+"\">");
}



function IncludeEditor(){
    var sFile=sAppRoot+"/client_scripts/FCKeditor/fckeditor.js";
    document.write("\<\script language=javascript src=\""+sFile+"\">\<\/script>");
}

function IncludeCalendar(){
    var sFolder =sAppRoot+'/client_scripts/jscalendar';
    var part1='<script type="text/javascript" src="'+sFolder+'/calendar.js"></script>';
    var part2='<script type="text/javascript" src="'+sFolder+'/calendar-setup.js"></script>';
    var part3='<script type="text/javascript" src="'+sFolder+'/lang/calendar-zh.js"></script>';
    var part4='<style type="text/css"> @import url("'+sFolder+'/calendar-win2k-cold-1.css"); </style>';
    document.write(part1+part2+part3+part4);
}

function getUploadFilePath(){
    return sAppRoot+"/files_upload/";
}

function getUploadURL(){
    return sAppRoot+"/client_scripts/upload.jsp";

}



function OnUploadCompleted(s){
    alert("所调用页面没有重写OnUploadComeplete方法！上传的文件为:"+s);
}

function IncludeActiveJs(sFilePath){
	document.write("\<\script language=javascript src=\""+sFilePath+"\">\<\/script>");
}

function getAppRoot(nPathDept){
	var sPathName=window.location.pathname;
	if(sPathName.toLowerCase().substring(0,1)!="/"){
		sPathName="/"+sPathName;
	}
	var pos1=sPathName.indexOf("/");
	var pos2=pos1;
	for(var i=0;i<nPathDept;i++){
		pos2=sPathName.indexOf("/",pos2+1);
		if(pos2==-1){
			pos2=sPathName.length;
			break;
		}
	}
	return sPathName.substring(pos1,pos2);

}

function getAppPath(){
	var sPathName=window.location.pathname;
	if(sPathName.toLowerCase().substring(0,1)!="/"){
		sPathName="/"+sPathName;
	}
	var pos1=sPathName.indexOf("/");
	var pos2=sPathName.lastIndexOf("/");
	return sPathName.substring(pos1,pos2);
}

 IncludeJS("url");

 String.prototype.replaceAll = function(search, replace){
  var regex = new RegExp(search, "g");
  return this.replace(regex, replace);
 }

 //以下是老版本的FCK用到的
 function IncludeVBS(sFile){
	if(sFile.substring(sFile.length-4).toUpperCase()!=".VBS"){
		sFile+=".vbs";
	}
	sFile=sLibPath+"/js/"+sFile;
	sFile=sFile.replace(new RegExp("//","gi"),"/");
	document.write("\<\script language=vbscript src=\""+sFile+"\">\<\/script>");
}
 function getSaveContent(sContent){
	//alert(sContent)
		sContent=sContent.replace(new RegExp("http://"+getHeader()+"/","gi"),"/");
	//alert(sContent);
	return sContent;
	for(var i=0;i<aReplaceInEditor.length;i+=2){

		sContent=sContent.replace(new RegExp(aReplaceInEditor[i],"gi"),sBoundary+aReplaceInEditor[i+1]);
	}
	return sContent;
}

//将数据库里的@@BOUNDARY_FILE_PATH....的内容替换成真实的http://......
function getDisplayContent(sContent){

	for(var i=0;i<aReplaceInEditor.length;i+=2){
		sContent=sContent.replace(new RegExp(sBoundary+aReplaceInEditor[i+1],"gi"),aReplaceInEditor[i]);
	}
	//alert(sContent)
	var nowpath="http://"+getHeader()+getAppPath()+"/";
	//
	//alert(nowpath)
	sContent=sContent.replace(new RegExp(nowpath,"gi"),"");
	//alert(sContent)
	return sContent;
}

function getDisplayContent2(sContent){
	for(var i=0;i<aReplaceInEditor.length;i+=2){
		sContent=sContent.replace(new RegExp(sBoundary+aReplaceInEditor[i+1],"gi"),aReplaceInEditor[i]);
	}
	//alert(sContent)
	//var nowpath="http://"+window.location.host+getAppPath()+"/";
	//alert(sContent)
	//alert(nowpath)
	sContent=sContent.replace(new RegExp("src=\"/","gi"),"Src=\"http://"+getHeader()+"/");
	sContent=sContent.replace(new RegExp("src=/","gi"),"Src=http://"+getHeader()+"/");
    sContent=sContent.replace(new RegExp("background=\"/","gi"),"background=\"http://"+getHeader()+"/");
	sContent=sContent.replace(new RegExp("background=/","gi"),"background=http://"+getHeader()+"/");
	return sContent;
}

function getHeader(){
	var s=document.location.host;
	return s;
	//alert(s)
	if(document.location.port!="80"){
		s+=":"+document.location.port;
	}
	return s;
}



function openWin(url,winName,feature){
    var win=window.open(url,winName,feature);
    if(win==null){
        alert("系统检测到了您的浏览器安装了弹出窗口拦截器，请进行设置允许弹出本站点的窗口！");
    }
    win.focus();
    return win;
}

 function submitWin(frm,url,winName,feature){
    var win=window.open("about:blank",winName,feature);
    if(win==null){
        alert("系统检测到了您的浏览器安装了弹出窗口拦截器，请进行设置允许弹出本站点的窗口！");
    }
    win.focus();
    frm.target=winName;
    frm.submit();
}

var serverprop=new Array();

IncludeJS("serverprop.jsp");
