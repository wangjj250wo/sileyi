/**
 * Created by hxsd on 2016/11/29.
 */

/*分页健康与生活===========================控制器数据*/
myapp.controller("healthCtrl",function($scope,$http){
      /*这个Data是单独的控制器里的作用域数据与其他的控制器的命名控制器数据并不冲突*/
    $scope.data={
        "angela":[
            {
                "title":"#厨房教室#西式浓汤口感醇厚,香味浓郁的的秘密，思乐谊告诉您",
                "congent":"SANOE与你相约每个周末！一起探索没事的秘密.",
                "time":"2016-06-26",
                "images":"images/01.jpg"
            },
            {
                "title":"思乐谊冰极企鹅在广州市隆重登场",
                "congent":"思乐谊冰极企鹅在广州市珠江城话城汇C区隆重登场，在酷热的夏天为羊城广州带来一阵清凉！思乐谊冰极企鹅高达8.5m体型巨大，造型俏皮可爱，是广州旅游的好去处.",
                "time":"2016-02-26",
                "images":"images/02.jpg"
            },
            {
                "title":"#妈妈教室#营养专家教您如何制作最天然健康的爱心食品",
                "congent":"在SANOE思乐谊的妈妈教师中营养专家不仅会向爸爸妈妈们传授宝宝在生长发育的各阶段所需营养元素、科学喂养婴幼儿的知识、还会亲自教您如何为宝宝制作最天然健康的爱心食品。.",
                "time":"2016-08-09",
                "images":"images/03.jpg"
            },
            {
                "title":"SANOE思乐谊宝宝爬行大赛",
                "congent":"爬行，这个在成人看来很简单的动作，对于宝宝来说确实个复杂的运动发展过程，它需要协调手部、腿部、臀部等很多器官，因此，爬行对宝宝成长好处多多.",
                "time":"2016-03-12",
                "images":"images/04.jpg"
            }
        ]
    };
    function rili(){
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
    rili();
});
/*技术与支持三级页面==================控制器数据*/
myapp.controller("health_twoCtrl",function($scope,$http){

        $scope.data={
            "title":"本期活动——制作美食",
            "ohjgs":"西式浓汤口感醇厚、香味浓郁的秘密，思乐谊告诉您！",
            "content1":[
                {
                    "text":"鸡蛋两只洗净，另准备半碗清水。"
                },
                {
                    "text":"鸡蛋打散，加温料理机完全打散，鸡蛋于水的比例（1:1.5.）"
                },
                {
                    "text":"取出蛋羹浇上味极鲜酱油、米醋、香油后用勺子在上面划十字道，让蛋羹入味。接下来就可以美美的享受了"
                },
                {
                    "text":"碗上盖一层保鲜膜，上面用牙签扎两三个小孔。冷水入锅，中火蒸15现象，也容易起蜂窝。）"
                },
                {
                    "text":"用筷子或滤网把蛋液中的气泡完全去掉"
                }

            ],
            "content2":[
                {
                    "text":"把橙汁切成小块"
                },
                {
                    "text":"用手把橙子皮慢慢剥下，如果有种子的话把种子去掉"
                },
                {
                    "text":"把剥好的橙子肉放入搅拌机中倒入少量的凉开水"
                },
                {
                    "text":"大约两分钟，先拔下插头，打开机盖，橙汁就做好了"
                },
                {
                    "text":"倒入碗中，加两块冰糖，香甜可口的橙汁就可以饮用了"
                }
            ]
        }
    });
/*服务与技术支持======控制器数据*/
myapp.controller("TechCtrl",function($scope,$http){
    $scope.data= [
            {
                "title":"搅拌器常见问题1",
                "guzhang":[
                    {"dt":"正确的开机和关机步骤","dd":"请根据说明书指示正确装置机器，具体的步骤请详见说明书。"},
                    {"dt":"噪音大","dd":"一般来说噪音比较大，属于正常现象，工作时由于刀片和加工食物高速转动，相互冲击，噪音大属于正常现象空转噪音大，一般来说，是由于装配不到位所导致。因料理机为间隙运转，其噪声对人产生影响不大，国家标准规为85分贝下。"},
                    {"dt":"绞肉不均匀","dd":"属于正常现象，因绞肉时无水流，肉又有粘性，因此无法形成良性循环，故需要绞肉间隙过程中人工摇一摇。"},
                    {"dt":"如何清洗保证卫生","dd":"容器和刀片组件可用肥皂和水清洗，请勿使用磨蚀性材料清洁，以免划伤。马达机身请用布蘸湿擦拭干净，请勿浸泡于水中或用水冲洗。绞杯若有异味用清水加一小片柠檬，装至主机搅拌1~3分钟，搅拌杯就清新如新。详细的清洁事项可见说明书"},
                    {"dt":"刀片转动无力","dd":"电源电压过低---待电压正常使用。2)插头与插座接触不良---重新插接到位。"},
                    {"dt":"开机电动机不转动","dd":"电源插头没插好或电源线短路，插好电源插头。重新接牢或更换电源线。"},
                    {"dt":"指示灯亮，机器不工作","dd":"请检查下水和食材是否在杯体内刻度线之间，装的太满则机器无法运作，如果还有其他问题请进行保修。"},
                    {"dt":"如何去除机子里面留下的气味","dd":"一片柠檬加少量清水，开机搅拌3秒即可。"}
                ]
            },
            {
                "title":"搅拌器常见问题2",
                "guzhang":[
                    {"dt":"做果汁的注意事项","dd":"在做果汁时，先根据说明书了解哪些水果要加水，哪些不用加，如果要加水的先在料理机杯中加入冷开水,然后加入水果，再进行搅拌，不先入水，直接放入水果搅拌，会缩短电机使用寿命。"},
                    {"dt":"榨汁机漏汁","dd":"因刀网未安装到位，果汁流出集汁盒所致，或者及时清渣以确保流动的顺畅。"},
                    {"dt":"榨汁机粉碎效果较粗","dd":"可能因一次加入的食物量太多。加工食物前，需将食物处理成适合于上盖食物口投放的尺寸。榨汁机对初始较小的食物榨汁效果优于对较大食物的效果。"},
                    {"dt":"刀网拿不下来","dd":"手法问题，由于榨汁机功能的要求，本身刀网就比较紧，取刀网时，手指按住果渣盒，垂直向上取出刀网方可。"}

                ]
            }
        ]
});
