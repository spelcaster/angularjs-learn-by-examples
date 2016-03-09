var app = angular.module('myApp', []);

app.controller('PeopleController', ['$scope', function($scope) {
    var self = this;

    self.people = [
        {
            name: "Eric Simons",
            born: "Chicago"
        },
        {
            name: "Albert Pai",
            born: "Taiwan"
        },
        {
            name: "Matthew Greenster",
            born: "Virginia"
        },
        {
            name: "User 1",
            born: "City A"
        },
        {
            name: "User 2",
            born: "City A"
        },
        {
            name: "User 3",
            born: "City B"
        }
    ];
}]);

