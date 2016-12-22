/**
 * Created by hxsd on 2016/11/16.
 */
angular.module('myapp').controller('productListCtrl',function($scope,cartShop){



    //声明一个变量，保存当前选中的商品类别
    $scope.selectedCategory=null;
    //响应用户选择商品类别的click事件，参数就是被选中的商品类别名称
    $scope.selectCategory=function(category){
        $scope.selectedCategory=category;
        $scope.pageNum=1
    };
    //定义一个过滤函数，根据当前被选中的商品类别来过滤
    //参数是由框架传过来的被过滤元素--这里是被过滤商品数组中的每一个商品对象
    $scope.filterByCategory=function(product){
        //如果全选的话（$scope.selectedCategory==null）,则所有商品都显示--return true
        return $scope.selectedCategory == null || product.category == $scope.selectedCategory
    };
    //声明两个用于分页的变量
    $scope.pageNum=1;  //默认是第一页
    $scope.pageSize=6; //页面大小（每一页显示多少条）
    //分页导航按钮的分页选择事件
    $scope.selectPage=function(page){
        $scope.pageNum = page
    };
    $scope.add=function(product){
        cartShop.add(product)
    }
});

