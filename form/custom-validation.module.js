var app = angular.module('myApp', []);

var INTEGER_REGEXP = /^\-?\d+$/;

app.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty model to be valid
                    return true;
                }

                // return true if it is a valid integer, false otherwise
                return INTEGER_REGEXP.test(viewValue);
            };
        }
    };
});

app.directive('username', ['$q', '$timeout', function($q, $timeout) {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

            ctrl.$asyncValidators.username = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty model to be valid
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function() {
                    // Mock a delayed response
                    if (usernames.indexOf(modelValue) === -1) {
                        // the username is available
                        def.resolve();

                        return;
                    }

                    def.reject();
                }, 2000);

                return def.promise;
            };
        }
    };
}]);

app.directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?*+/=?^_`{|}~.-]+@example\.com$/i;

    return {
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // only apply the validator if ngModel is present and Angular has
            // added the email validator
            if (ctrl && ctrl.$validators.email) {
                // this will overwrite the default Angular email validator
                ctrl.$validators.email = function(modelValue) {
                    return ctrl.$isEmpty(modelValue) ||
                        EMAIL_REGEXP.test(modelValue);
                };
            }
        }
    };
});

app.controller('FormPostController', ['$scope', function($scope) {
}]);
