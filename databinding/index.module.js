var bindingApp = angular.module('bindingApp', []);

bindingApp.controller('IndexController', ['$scope',
    function($scope) {
        $scope.message = "";
    }
]);


