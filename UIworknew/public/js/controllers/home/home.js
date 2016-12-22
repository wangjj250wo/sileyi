/**
 * Created by hxsd on 2016/12/1.
 */
//
myapp.controller("homeCtrl",function($scope){
    $scope.data=[
        {"img":"images/last_06.jpg","title":"思乐谊新品发布会","txt":"2016年6月9日，由思乐谊举办的新品上市发布会在想香格里拉大酒店完美落幕，" +
        "各位来宾莅临共同见证思乐谊具有历史意义的新品上市时刻。"},
        {"img":"images/last_08.jpg","title":"思乐谊职员运动大会","txt":"为进一步弘扬企业文化，强化团队协作精神，增强员工体质，加强各部门的沟通和交流。6月18日，" +
        "思乐谊2016年职工运动会在体育场胜利举行。"},
        {"img":"images/last_10.jpg","title":"思乐谊足球大赛","txt":"思乐谊第二届职工运动会足球赛拉开帷幕，各部门的代表队参加了比。在比赛中，" +
        "各队都表现出了良好的作风和精神风貌，既赛出了成绩，也赛出了友谊。"}
    ];
    $scope.use=[
    ];

    var showAuto=function(){
        console.log(n>count);
        if(n >=(count -1)){
            n=0;
        }else {
            n=n+1;
        }
       // n = n >=(count -1) ?0 : n++;
        $("#banner-h li").eq(n).trigger('click');
    };

    var t = n =0, count;

        count=$("#banner-h-list a").length;


        $("#banner-h-list a:not(:first-child)").hide();
        $("#banner-h li").click(function() {
            var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
            n = i;
            if (i >= count) return;
            $("#banner-h-list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner-h").style.background="";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
        t = setInterval(showAuto, 2000);
        $("#banner-h").hover(function(){clearInterval(t)}, function(){t = setInterval(showAuto, 2000);});

    });



