/**
 * Created by hxsd on 2016/11/29.
 */
//引入核心模块
var http = require("http");

var express = require("express");
var app = express();

// 定义web服务器运行的端口号
app.set('port', process.env.PORT || 5355);

// 引入第三方模块
var bodyParser = require("body-parser");

// 处理对静态资源的请求
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));


//产品页面用的数据
// 处理客户端对商品信息的请求(浏览商品)
app.get("/categories",function(request,response){
    // 准备给客户端的商品类别的数据
    var categories = [
        {id:'10001',category:'搅拌机系列 BLENDER'},
        {id:'10002',category:'榨汁机系列 JUICE EXTRACTOR'},
        {id:'10003',category:'调理机系列 FOOD PROCESSOR'},
        {id:'10004',category:'磨豆机系列 GRINDER'}
    ];
    // 发送回客户端
    response.json(categories);
});
app.get("/categories02",function(request,response){
    // 准备给客户端的商品类别的数据
    var categories02 = [
        {id:'20001',category:'随行杯系列 GO CUP'},
        {id:'20002',category:'果汁机系列 BLENDER'},
        {id:'20003',category:'榨汁机系列 JUICE EXTRACTOR'},
        {id:'20004',category:'料理机系列 FOOD PROCESSOR'},
        {id:'20005',category:'磨豆机系列 GRINDER'},
        {id:'20006',category:'打蛋器系列 MIXER'},
    ];
    // 发送回客户端
    response.json(categories02);
});

app.get("/products",function(request,response){
    // 准备给客户端的商品类别的数据
    var products = [
        {name:'思乐宜HU25原汁机新款低速榨汁机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_13_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_07_small.png',content:"541.00"},
        {name:'思乐宜F1全自动多功能搅拌机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_09_small.png',content:"799.00"},
        {name:'思乐宜ZX18破壁机多功能搅拌机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_10_small.png',content:"899.00"},
        {name:'思乐宜TMV20真空保鲜搅拌料理机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_11_small.png',content:"999.00"},
        {name:'思乐宜J-13加热家用养生搅拌机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_12_small.png',content:"1499.00"},

        {name:'思乐宜PRO750家用多功能搅拌机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_01_small.png',content:"499.00"},
        {name:'思乐宜J51大口径高纤蔬果榨汁调理机',category:'榨汁机系列 JUICE EXTRACTOR',imgsrc:'images/product_04_small.png',content:"846"},

        {name:'思乐宜J21蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_01_small.png',content:"499.00"},
        {name:'思乐宜J31高纤蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_02_small.png',content:"599.00"},
        {name:'思乐宜J32高纤蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_03_small.png',content:"799.00"},
        {name:'思乐宜J51大口径高纤蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_04_small.png',content:"846"},
        {name:'思乐宜J61高纤蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_05_small.png',content:"1269"},
        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'调理机系列 FOOD PROCESSOR',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'搅拌机系列 BLENDER',imgsrc:'images/product_07_small.png',content:"541.00"},

        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_07_small.png',content:"541.00"},
        {name:'思乐宜F1全自动多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_09_small.png',content:"799.00"},
        {name:'思乐宜ZX18破壁机多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_10_small.png',content:"899.00"},
        {name:'思乐宜HU25原汁机新款低速榨汁机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_13_small.png',content:"1299.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_08_small.png',content:"699.00"},

        {name:'思乐宜J32高纤蔬果榨汁调理机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_03_small.png',content:"799.00"},
        {name:'思乐宜J51大口径高纤蔬果榨汁调理机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_04_small.png',content:"846"},
        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'磨豆机系列 GRINDER',imgsrc:'images/product_08_small.png',content:"699.00"},

        {name:'思乐宜PRO750家用多功能搅拌机',category:'打蛋器系列 MIXER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'打蛋器系列 MIXER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'打蛋器系列 MIXER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'打蛋器系列 MIXER',imgsrc:'images/product_01_small.png',content:"499.00"},
        {name:'思乐宜HU25原汁机新款低速榨汁机',category:'打蛋器系列 MIXER',imgsrc:'images/product_13_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'打蛋器系列 MIXER',imgsrc:'images/product_07_small.png',content:"541.00"},

        {name:'思乐宜ZX18破壁机多功能搅拌机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_10_small.png',content:"899.00"},
        {name:'思乐宜HU25原汁机新款低速榨汁机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_13_small.png',content:"1299.00"},
        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_07_small.png',content:"541.00"},
        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'料理机系列 FOOD PROCESSOR',imgsrc:'images/product_07_small.png',content:"541.00"},

        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'果汁机系列 BLENDER',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'果汁机系列 BLENDER',imgsrc:'images/product_08_small.png',content:"699.00"},
        {name:'思乐宜TMV20真空保鲜搅拌料理机',category:'果汁机系列 BLENDER',imgsrc:'images/product_11_small.png',content:"999.00"},
        {name:'思乐宜J-13加热家用养生搅拌机',category:'果汁机系列 BLENDER',imgsrc:'images/product_12_small.png',content:"1499.00"},
        {name:'思乐宜F1全自动多功能搅拌机',category:'果汁机系列 BLENDER',imgsrc:'images/product_09_small.png',content:"799.00"},
        {name:'思乐宜ZX18破壁机多功能搅拌机',category:'果汁机系列 BLENDER',imgsrc:'images/product_10_small.png',content:"899.00"},

        {name:'思乐宜J62高纤蔬果榨汁调理机',category:'随行杯系列 GO CUP',imgsrc:'images/product_06_small.png',content:"1299.00"},
        {name:'思乐宜J21蔬果榨汁调理机',category:'随行杯系列 GO CUP',imgsrc:'images/product_07_small.png',content:"541.00"},
        {name:'思乐宜F1全自动多功能搅拌机',category:'随行杯系列 GO CUP',imgsrc:'images/product_09_small.png',content:"799.00"},
        {name:'思乐宜ZX18破壁机多功能搅拌机',category:'随行杯系列 GO CUP',imgsrc:'images/product_10_small.png',content:"899.00"},
        {name:'思乐宜HU25原汁机新款低速榨汁机',category:'随行杯系列 GO CUP',imgsrc:'images/product_13_small.png',content:"1299.00"},
        {name:'思乐宜PRO750家用多功能搅拌机',category:'随行杯系列 GO CUP',imgsrc:'images/product_08_small.png',content:"699.00"}

    ];
    // 发送回客户端
    response.json(products);
});
app.post("/orders",function(request,response){
    // 构造一个订单id
    var orderId = {orderId:Date.now()};
    // 发送回客户端
    response.json(orderId);
});
// 如果请求没有被任何路由所处理，就会走到这里
app.use(function(request, response){
    response.send("您的请求有误.")
});

http.createServer(app).listen(app.get("port"), function () {
    console.log("服务器正运行在5355端口...");
});