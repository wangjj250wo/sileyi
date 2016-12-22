/**
 * Created by hxsd on 2016/12/1.
 */
//声明一个分页专用过滤器模块
angular.module('marsFilter',[]);
angular.module('marsService',[]);

//声明主模块
var myapp=angular.module("myapp",["marsService","marsFilter","ngRoute"]);


//主控制器
myapp.controller("myCtrl",function($scope,$http){
    //模拟商品注册
    $scope.data={
        //商品类别
        shipping:{}
    };
    // 向服务器端请求商品类别数据和商品数据
    $http.get("/categories").success(function(data){
        $scope.data.categories = data;
    });
    $http.get("/categories02").success(function(data){
        $scope.data.categories02 = data;
    });

    $http.get("/products").success(function(data){
        $scope.data.products = data;
    });
});

//配置路由
myapp.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"views/home/home.html",controller:"homeCtrl"})
        .when("/aboutUs",{templateUrl:"views/aboutUs/about us.html",controller:"aboutUsCtrl"})
        .when("/product",{templateUrl:"views/product/product.html",controller:"productListCtrl"})
        .when('/detail',{templateUrl:'views/detail/detail.html',controller:'detailCtrl'})
        .when('/detail?:id',{templateUrl:'views/detail/detail.html',controller:'detailCtrl'})
        .when("/news",{templateUrl:"views/news/news.html",controller:"aboutUsCtrl"})
        .when("/new01",{templateUrl:"views/news/new01.html"})
        .when("/tech",{templateUrl:"views/Tech/Tech.html",controller:"TechCtrl"})
        .when("/health",{templateUrl:"views/health/health.html",controller:"healthCtrl"})
        .when("/health_two",{templateUrl:"views/health/health_two.html",controller:"health_twoCtrl"})
        .when("/contactUs",{templateUrl:"views/contactUs/contactUs.html",controller:"contactUsCtrl"})
        .otherwise({templateUrl:"views/home/home.html"})
});