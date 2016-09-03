var myApp = angular.module("ketPortfolio", []);

myApp.controller("mainCtrl", ["$scope", function ($scope) {

}]); // mainCtrl
myApp.controller("formCtrl", ["$scope", function ($scope) {

  $scope.nameRegex = /^[a-z]+$/i;
  $scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;

  $scope.myform = {};

  $scope.submit = function () {
    console.log("submitting...")

  }
}]);  //formCtrl
