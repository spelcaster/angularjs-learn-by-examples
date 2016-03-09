var app = angular.module('myApp', []);

app.controller('CapitalizeController', ['$scope', function($scope) {
    var self = this;

    self.greetings = "hello world";
}]);

app.filter('capitalize', capitalizerFilter);

function capitalizerFilter() {
    // the function that Angular will execute when the expression is evaluated
    return function (text) {
        // text is the original output of the Angular expression and we simply
        // return the text in upper case!
        return text.toUpperCase();
    };
}

