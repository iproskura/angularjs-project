angular.module("ketPortfolio", ["duScroll", "ngCookies"])
  .value("duScrollDuration", 1000)
  .value("duScrollOffset", 30)

  .controller("mainCtrl", ["$scope", "$document", function ($scope, $document) {


    $scope.toTheTop = function () {
      $document.scrollTop(0, 3000);
    };


  }]) // mainCtrl

  .controller("serviceCtrl", ["$scope", function ($scope) {
    /*$scope.serviceList = [
      "img/service_00.png",
      "img/service_01.png",
      "img/service_02.png",
      "img/service_03.png"];*/

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

  }])

  .controller("formCtrl", ["$scope", "$cookies", function ($scope, $cookies) {

    $scope.nameRegex = /^[a-z]+$/i;
    $scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;

    $scope.myform = {};


    $scope.submit = function () {
      console.log("submitting...")



    }
  }])  //formCtrl
