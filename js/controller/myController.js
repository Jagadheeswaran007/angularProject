angular.module("myApp").controller("myController", myController);
myController.$inject = ["$scope"];
function myController($scope) {
  $scope.myName = "Jagadheeswaran Mohan";
  $scope.calculate = function(){
    $scope.value = 0;
    for(var i=0; i<$scope.myName.length; i++) {
      $scope.value += $scope.myName.charCodeAt(i);
    }
  }
}
