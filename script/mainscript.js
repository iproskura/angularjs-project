/*function randomColor() {
 var h = Math.floor(Math.random() * (255 - 1) + 1);
 var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
 var l = '50%';
 var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
 return randomColor;
 }*/


var myApp = angular.module("ketPortfolio", ["duScroll", "ngCookies"]);
myApp.value("duScrollDuration", 1000);
myApp.value("duScrollOffset", 30);

myApp.controller("mainCtrl", ["$scope", "$document", "$window", "$http", "$timeout",
    function ($scope, $document, $window, $http, $timeout) {


        $scope.toTheTop = function () {
            $document.scrollTop(0, 3000);
        };

        // portfolio
        /*     $scope.portfolios = [];
         var categories = ["web", "photography", "design"];
         var portCount = 12;

         $scope.generatePortfolios = function () {
         for (var i = 0; i < portCount; i++) {
         var rand = categories[Math.floor(Math.random() * categories.length)];
         var item = "http://placehold.it/150x80/f4511e?text=" + rand;

         // console.log("generated " + item);
         $scope.portfolios.push(item);
         }
         };

         $window.onload = $scope.generatePortfolios;*/
        // console.log(portfolios);


        //    news
        $scope.news = {};
        $scope.getNews = function () {
            $http({
                method: "GET",
                url: "data.json"
            }).then(function successHandler(response) {
                $scope.news = response.data;

                console.log("GET: 'data.json' status: " + response.statusText);
                console.log(response);
            }, function errorHandler(response) {
                console.error(response.statusText)
            })
        };

        $scope.readNews = function (id) {
            console.log("reading news id: " + id);
        };

        $timeout(function () {
            $scope.getNews()
        }, 500);

    }]); // mainCtrl

// service ctrl ------------------------------------------------
myApp.controller("serviceCtrl", ["$scope", function ($scope) {

    $scope.serviceList = [
        {src: "img/service_00.png", alt: "web"},
        {src: "img/service_01.png", alt: "design"},
        {src: "img/service_02.png", alt: "programming"},
        {src: "img/service_03.png", alt: "photography"}
    ];
    //web design programming photo


    $scope.serviceSwitchValue = 0;
    $scope.switch = function (index) {
        $scope.serviceSwitchValue = index;
    }

}]);


//form ctrl ---------------------------------------------------
myApp.controller("formCtrl", ["$scope", "$cookies", function ($scope, $cookies) {

    $scope.nameRegex = /^[a-z]+$/i;
    $scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;


    $scope.myform = {};
    $scope.myform.userName = $cookies.get("name") || "";
    $scope.myform.eMail = $cookies.get("email") || "";


    $scope.submit = function () {
        console.log("submitting...");

        //cookie
        var now = new Date();
        var exp = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());

        $cookies.put("name", $scope.myform.userName, {expires: exp});
        $cookies.put("email", $scope.myform.eMail, {expires: exp});


    }
}]);  //formCtrl
