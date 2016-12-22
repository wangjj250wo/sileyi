/**
 * Created by hxsd on 2016/11/16.
 */
//在marsFilter模块中，定义一个分页过滤器
angular.module('marsFilter')
    .filter('pageFilter',function(){
    //返回一个过滤函数，其中三个参数，分别是：
    //参数1：被过滤的商品数组，由框架负责传入
    //参数2：请求的页码数
    //参数3：页面大小
    return function(products,pageNum,pageSize){
        //要让代码更健壮，最好是先判断传入的参数类型是否正确
        //用到angular提供的一些工具方法
        if(angular.isArray(products) && angular.isNumber(pageNum) && angular.isNumber(pageSize)){
            //计算当前这一页的起始索引值
            var startIndex=(pageNum-1)*pageSize;
            //判断计算出的起始索引是否超出了数组的最大索引值
            if(startIndex >= products.length){
                //智联的处理方式：设为最后一页的起始索引
                return[]
            }

            //从被过滤的商品数组中，切出这一页的数据，并返回
            return products.slice(startIndex,startIndex+pageSize)

        }
    }
})
    .filter('navButtonFilter',function(){
        //参数1：被过滤的商品数值
        //参数2.页面大小
        return function(products,pageSize){
            //计算出需要多少个导航按钮
            var count=Math.ceil(products.length / pageSize);
            //构造一个要返回的整数数组，数组元素为自然数1,2,3。。。
            var arr=[]
            for(var i=1;i<=count;i++){
                arr.push(i)
            }
            return arr;
        }
    })