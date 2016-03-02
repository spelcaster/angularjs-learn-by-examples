var controllerApp = angular.module('myApp', []);

controllerApp.controller('IndexController', ['$scope', function($scope) {
    $scope.message = "Olá mundo!";

    $scope.sum = function(a ,b) {
        return a + b;
    };
}]);


