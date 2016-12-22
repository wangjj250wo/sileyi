/**
 * Created by hxsd on 2016/12/1.
 */
window.onload=function(){
    var calendar=document.getElementById("calendar");
    var dateList=document.getElementById("dateList");
    var title=document.getElementById('title');
    var btn1=document.getElementById("next");
    var btn2=document.getElementById("last");
    var iNow=0;
    var downBtn=document.getElementById("downBtn");
    var sYear=document.getElementById("sYear");
    var sMonth=document.getElementById("sMonth");
    //用for循环给下拉框添加内容-----------------------------------------------------
    for(var i=1;i<13;i++){
        if(i==10){//下拉框优先显示10月
            sMonth.innerHTML+="<option value="+i+" selected='selected'>"+i+"</option>";
        }else{
            sMonth.innerHTML+="<option value="+i+">"+i+"</option>";
        }

    }
    for(var k=2000;k<2021;k++){
        if(k==2016){//下拉框优先显示2016年
            sYear.innerHTML+="<option value="+k+" selected='selected'>"+k+"</option>";
        }else{
            sYear.innerHTML+="<option value="+k+">"+k+"</option>";
        }
    }
    //封装函数----------------------------------------------------------------------------------------------------------
    function run(e,y,m){//传递参数e作为按月份跳转时的变量，传递y、m作为通过下拉框传递时的变量
        dateList.innerHTML="";
        //创建一块表
        var oDate=new Date();
        //找到今天的日期
        var year=oDate.getFullYear();
        var month=oDate.getMonth();
        var today=oDate.getDate();
        console.log(m);
        //通过if判断y是否存在来确定是用下拉框改变时间还是用按钮切换的----------------------------------------------------------------------------
        if(y){//通过下拉框改变
            oDate.setFullYear(y,m+1,0);//把日期拨到下月的第0天，会自动跳回到本月的最后一天，此时时间被拨到了本月的最后一天
            //通过下拉框改变时间并不会改变iNow的值，所以需要计算出iNow正确的值
            //重要！！！！！！！如果在这里不计算出iNow的值，下拉框和按钮就不能交替使用
            var changeYear=y-year;//如果存在年份的改变，用传入的年份值y减去系统日期今天的年份值得到改变的年份数
            var changeMonth=m-month+12*changeYear;//改变的月份值（iNow）=传入的月份值-系统日期今天的月份值+12*改变的年份数
        }else{//通过按钮改变
            oDate.setMonth(month+1+e,0);//把日期拨到下月的第0天，会自动跳回到本月的最后一天，此时时间被拨到了本月的最后一天
        }
        var newMonth=oDate.getMonth();//得到此时本月的月份（用于标题显示）
        var newYear=oDate.getFullYear();//得到此时的年份（用于标题显示）
        var allDate=oDate.getDate();//本月的天数
        //找到本月第一天是星期几--------------------------------------------------------------------------------------------------------------
        oDate.setDate(1);//把日期拨到本月的第一天
        var first_week=oDate.getDay();//找到本月第一天是星期几
        //插入上月的日期------------------------------------------------------------------------------------------------------------------------
        for(var i=0;i<first_week;i++){//因为本结构是从星期天排到星期六，所以上月的天数循环从0开始
            var li=document.createElement("li");
            dateList.appendChild(li);
        }
        //插入本月的日期--------------------------------------------
        for(var j=1;j<allDate+1;j++){
            var li=document.createElement("li");
            li.innerHTML=j;
            dateList.appendChild(li);
        }

        //给日历上颜色---------------------------------------------------------------------------------------
        var aLi=dateList.children;//找到所有的li
        for(var k=0;k<aLi.length;k++){
            aLi[k].index=k;//发牌照
            aLi[k].onclick=function(){
                for(var c=0;c<aLi.length;c++){
                    aLi[c].className="";//点击li时先用循环清空所有的颜色样式
                    if(aLi[c].innerHTML==today&&e==0) {//天数和系统时间相同&&月份增加数等于0
                        aLi[c].className = "red";
                    }else if(c%7==0||c%7==6){//周末两天为红色
                        aLi[c].className="sun";
                    }
                }
                if(aLi[this.index].innerHTML!=""){//当点击的li样式不为空时执行语句（作用是防止点击到上个月空白的天数时还产生点击的效果）
                    aLi[this.index].className="dianji";
                }
            };
            if(aLi[k].innerHTML==today&&e==0) {//天数和系统时间相同&&月份增加数等于0
                aLi[k].className = "red";
            }else if(aLi[k].innerHTML==today&&changeMonth==9){
                aLi[k].className = "red";
            }else if(k%7==0||k%7==6){//周末两天为红色
                aLi[k].className="sun";
            }
        }
        //标题-------------------------------------------------------------------------------------------------
        title.innerHTML=newYear+"年"+(newMonth+1)+"月";
        //把通过下拉框改变的月份值传递出去，用来改变iNow的值！！！！！
        return changeMonth;
        console.log(downYear);
        //console.log(downMonth);
        /*console.log(changeYear);*/
        /*console.log(changeMonth);*/
    }
    run(iNow);
    btn1.onclick= function () {//按钮：下个月
        iNow++;
        run(iNow);
    };
    btn2.onclick=function(){//按钮：上个月
        iNow--;
        run(iNow);
    };
    downBtn.onclick=function(){
        var downYear=sYear.value;
        var downMonth=sMonth.value-1;
        iNow=run(iNow,downYear,downMonth);//重要！！！！把changeMonth的值赋给iNow
    }
}
