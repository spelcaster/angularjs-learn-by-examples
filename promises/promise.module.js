var app = angular.module('myApp', []);

function getData($timeout, $q) {
    return function() {
        // defer is an object that exposes a promise
        var defer = $q.defer();

        // simulate async function
        $timeout(function() {
            // this if procduces 0-1 randomly
            if (Math.round(Math.random())) {
                // using deferred object to sing a success message
                defer.resolve('1: ok! data received');
                return;
            }

            defer.reject('1: oh no an error! try again');
        }, 2000);

        return defer.promise;
    };
}

app.factory('getData', ['$timeout', '$q', getData]).run(function(getData) {
    var promise = getData()
        .then(function(string) { // callback to the returned promise obj
            console.log(string);
        }, function(error) {
            console.log(error);
        }).
        finally(function() {
            console.log('1: Finished at: ', new Date());
        });
});

function getDataQ($timeout, $q) {
    return function() {
        return $q(function(resolve, reject) {
            $timeout(function() {
                if (Math.round(Math.random())) {
                    resolve('2: ok! data received');
                    return;
                }

                reject('2: oh no an error! try again');
            }, 2000);
        });
    };
}

// Same as above, but using $q's constructor
app.factory('getDataQ', ['$timeout', '$q', getDataQ]).run(function(getDataQ) {
    var promise = getDataQ()
        .then(function(string) { // callbacki to the returned promise obj
            console.log(string);
        }, function(error) {
            console.log(error);
        })
        .finally(function() {
            console.log('2: Finished at: ', new Date());
        });
});

function getRandomNumber($timeout, $q) {
    return function() {
        return $q(function(resolve, reject) {
            $timeout(function() {
                resolve(Math.floor(Math.random() * 10));
            }, 2000);
        });
    };
}

// Chaining promises ò.ó
app.factory('getRandomNumber', ['$timeout', '$q', getRandomNumber])
    .run(function(getRandomNumber) {
        var promise = getRandomNumber()
            .then(function(num) {
                console.log(num);

                // this value will be used in next 'then' chained call
                return num * 2;
            }).then(function(num) {
                console.log(num);
            });
    });
