var controllerApp = angular.module('myApp', []);

controllerApp.controller('IndexController', function($scope) {
    this.message = "Olá mundo!";

    this.sum = function(a ,b) {
        return a + b;
    };
});


