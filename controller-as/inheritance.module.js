var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    this.timeOfDay = 'morning';
    this.name = "Nikki";
});

app.controller('ChildController', function ($scope, $controller) {
    var main = $controller(
        'MainController as base',
        {$scope: $scope}
    );

    angular.extend(this, main);

    this.name = "Mattie";
});

app.controller('GrandChildController', function ($scope, $controller) {
    var child = $controller(
        "ChildController as base",
        {$scope: $scope}
    );

    angular.extend(this, child);

    this.timeOfDay = 'evening';
    this.name = "Gingerbread Baby";
});
