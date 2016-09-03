angular.module("ketPortfolio", ["duScroll"])
  .value("duScrollDuration", 1000)
  .value("duScrollOffset", 30)

.controller("mainCtrl", ["$scope", "$document", function ($scope, $document) {

  $scope.toTheTop = function () {
    $document.scrollTop(0, 3000);
  };







}]) // mainCtrl
.controller("formCtrl", ["$scope", function ($scope) {

  $scope.nameRegex = /^[a-z]+$/i;
  $scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;

  $scope.myform = {};

  $scope.submit = function () {
    console.log("submitting...")

  }
}])  //formCtrl
