angular.module('myApp').factory('Register', function(){
    var service = {};

    service.register = function(account) {
        dd(account);
    };

    return service;
});