/**
 * Created by hxsd on 2016/11/17.
 */
//注册一个购物车模块
/*
在angular.module（'marsService'）模块中注册一个单例购物车对象（service）
这种单例对象在整个程序中只有一个，所以可以用它在各个控制器之间共享数据
哪个控制器需要用它，就使用“依赖注入”将该对象注入到控制器中使用
在angular中创建service有多种方法，最常用的一个是.facory方法
*/
angular.module('marsService').factory('cartShop',function(){
    //声明一个数组，保存购买的商品项-充当购物车的购物筐
    var cart=[]
    return{
        //添加商品到购物车的方法
        // 添加商品到购物车的方法
        add:function(product){
            // 构造一个购买项item，加入到购物筐中
            cart.push({product:product});
        },
        // 获得购物车中所有商品的方法
        findAll:function(){
            return cart;
        },
        // 清空购物车
        clear:function(){
            cart.length = 0;
        }
    }
})
