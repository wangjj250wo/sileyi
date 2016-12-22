/**
 * Created by hxsd on 2016/12/2.
 */

angular.module('myapp').controller('detailCtrl',function($scope,$routeParams){

    $scope.message = "这是Contact页面的message";

    // angular框架提供有若干个工具方法，其中.toJson，是用来将js对象转为json
//            console.log(angular.toJson($routeParams));

    // 拿到传过来的参数id
    $scope.id =JSON.parse($routeParams.id);

    $("#smlPic").find("li").on("click",function(){


        $(this).css("borderColor","red").siblings().css("borderColor","#e5e5e5");

        var smlSrc=$(this).find("img").attr("src");

        var bigSrc=smlSrc.replace("small","big");

        $("#bigPic").find("img").attr("src",bigSrc);

    });
$("#shiti_buy").on("click",function(){
    alert("实体店装修中！敬请期待")
})





    // 根据不同的id，设置要显示的联系主题
    /*switch (id){
        case "product":
            $scope.subject = "product";break;
        case "2":
            $scope.subject = "询价";break;
    }*/

    //$scope.subject=id;

})