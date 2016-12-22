/**
 * Created by hxsd on 2016/12/1.
 */

myapp.controller("aboutUsCtrl",function($scope){
    $scope.acc = {'title':'思乐怡榨汁深圳分公司',
        'titletwo':'manufacturing since1972 源自台湾',
        'desc':'创立于中国台湾的Sanoe（思乐谊），目前已经拥有20多项国际专利及40余年的小家电研发生产经验，产品被超过2000万欧美家庭使用，并获得广泛的认可和好评。Sanoe以"时尚便利和健康养生融合"为理念，以"Creative design at an affordable price"为目标，致力于让创意的小家电产品进入更多平常百姓家庭，共同分享优质生活。',
    'desctwo':'Founded in Taiwan, China Sanoe Si Leyi. Currently has 20 international patents and more than 40 years of small household electrical appliances R & D and production experience, products are more than 20 million families in Europe and America, and received widespread recognition and praise. Sanoe to "the fusion of fashion conveniencegn at an affordable price" as the goal, is committed to allow creative small home appliance products to enter the more ordinary people family, share a better quality of life.'};


    $scope.data = [
        {"time":"2001","thing":"与日本「Seiwa」电机公司合作生产小型家用电器产品外销。"},
        {"time":"2002","thing":"与美国「Sunbeam,Rival,Black&Decker」等品牌合作。"},
        {"time":"2003","thing":"与美国「Singer」合作生产小家电，外销欧美。"},
        {"time":"2004","thing":"为了供应市场需求，于中国深圳设立工厂，增加产量。"},
        {"time":"2005","thing":"思乐怡最棒棒哒思乐怡最棒棒哒思乐怡最棒棒哒思乐怡最棒棒哒"},
        {"time":"2006","thing":"与瑞士品牌「Bodum」合作生产咖啡研磨系列产品。"},
        {"time":"2007","thing":"与日本「Fukai,Abitelax,Hario」等品牌合作，销售日本市场。"},
        {"time":"2008","thing":"果汁机销入欧洲大型连锁市场「Lidl」。"},
        {"time":"2009","thing":"与法国SEB集团合作以「Moulinex,Krups,Tefal」品牌生产小型家电，"},
        {"time":"2000","thing":"正式以『Sanoe』思乐谊品牌开始进军台湾，大陆市场。"},
        {"time":"2010","thing":"思乐怡最棒棒哒"},
        {"time":"2012","thing":"思乐怡最棒棒哒"},
        {"time":"2015","thing":"思乐怡最棒棒哒"}


    ]


    $(function(){
        var length =$scope.data.length-10;

        var l = 0;
        $(".left_btn").click(function(){

            l-=120;

            if(l<-length*120){
                l=-length*120;
            }
            $("#box").css("left",l+"px")

        });

        $(".right_btn").click(function(){
            l+=120;

            if(l>0){
                l=1;
            }
            $("#box").css("left",l+"px")
        });

        //


            $('#cloud li').on('mouseover',function () {
                $(this).find('a').stop().animate({width:320},1000)
            })
            $('#cloud li').on('mouseout',function () {
                var _this=this;
                $(this).find('a').stop().animate({width:60},1000);
                if($('#cloud li:last').is(_this)){
                    $(this).find('a').stop().animate({width:320},1000);
                }
            });
    })
})



