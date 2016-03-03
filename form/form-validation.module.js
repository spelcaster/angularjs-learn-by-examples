var app = angular.module('myApp', []);

app.controller('FormPostController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }

        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
}]);
