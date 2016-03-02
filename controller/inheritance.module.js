var app = angular.module('app', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = "Nikki";
}]);

app.controller('ChildController', ['$scope', function ($scope) {
   $scope.name = "Mattie";
}]);

app.controller('GrandChildController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = "Gingerbread Baby";
}]);
