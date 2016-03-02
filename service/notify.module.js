var app = angular.module('serviceModule', []);

app.controller("ServiceController", function($scope, notify) {
    this.message = "";

    this.callNotify = function(msg) {
        notify(msg);
    };
});

app.factory('notify', ['$window', function(win) {
    var msgs = [];

    return function(msg) {
        msgs.push(msg);

        if (msgs.length == 3) {
            win.alert(msgs.join("\n"));
            msgs = [];
        }
    };
}]);
