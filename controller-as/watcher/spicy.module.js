var myApp = angular.module('myApp', []);

myApp.controller('IndexController', function($scope) {
    this.spice = "habanero";

    this.chiliSpicy = function() {
        this.spice = 'chili';
    };

    this.jalapenoSpicy = function() {
        this.spice = 'jalapeño';
    };

    this.customSpicy = function() {
        this.spice = this.customSpice;
    };

    // Does not work
    //$scope.$watch('title', function(new, old) {});

    // Does not work
    //$scope.$watch('this.title', function(new, old) {});

    $scope.$watch(angular.bind(this, function () {
        return this.spice;
    }), function (newVal, oldVal) {
        console.log(oldVal);
        console.log(newVal);
    });
});


