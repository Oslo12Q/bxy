
var fnTimeCountDown = function(d, o){
        var f = {
            zero: function(n){
                var n = parseInt(n, 10);
                if(n > 0){
                    if(n <= 9){
                        n = "0" + n;	
                    }
                    return String(n);
                }else{
                    return "00";	
                }
            },
            dv: function(){
                d = d || Date.UTC(2050, 0, 1); //���δ����ʱ�䣬�������趨����ʱ������2050��1��1��
                var future = new Date(d), now = new Date();
                //���ڽ������ֵ
                var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, 
                dur_minisec = (Math.random())*1000,  pms = {
                    //minisec: "000",
                    sec: "00",
                    mini: "00",
                    hour: "00",
                    day: "00",
                    month: "00",
                    year: "0"
                };
                if(dur > 0){
                    //pms.minisec = f.zero(dur_minisec);
                    pms.sec = f.zero(dur % 60);
                    pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
                    pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                    pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";  //�·ݣ���ʵ��ƽ��ÿ��������� �·���ʱ���䶯
                    pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                    //��ݣ������ع���365��5ʱ48��46����
                    pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
                }
                return pms;
            },
            ui: function(){
                //if(o.minisec){
                    //o.minisec.innerHTML = f.dv().minisec;
                //}
                if(o.sec){
                    o.sec.innerHTML = f.dv().sec;
                }
                if(o.mini){
                    o.mini.innerHTML = f.dv().mini;
                }
                if(o.hour){
                    o.hour.innerHTML = f.dv().hour;
                }
                if(o.day){
                    o.day.innerHTML = f.dv().day;
                }
                if(o.month){
                    o.month.innerHTML = f.dv().month;
                }
                if(o.year){
                    o.year.innerHTML = f.dv().year;
                }
                setTimeout(f.ui,1);
            }
        };	
        f.ui();
    };
    
    var zxx = {
        $: function(id){
            return document.getElementById(id);	
        },
        futureDate: Date.UTC(2018,07,29,18),//����Ƴ�����
        obj: function(){
            return {
                //minisec: zxx.$("minisec"),
                sec: zxx.$("sec"),
                mini: zxx.$("mini"),
                hour: zxx.$("hour"),
                day: zxx.$("day"),
                month: zxx.$("month"),
                year: zxx.$("year")
            }
        }
    };
    
    fnTimeCountDown(zxx.futureDate, zxx.obj());
