angular.module('myApp').controller('LoginCtrl', function($uibModal) {
    
    var that = this;
    this.loginInfo = {};
    
    this.doLogin = function() {
        dd(that.loginInfo);
    };
    this.createAccount = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'js/tpls/modals/create-account.html',
            controller: 'CreateAccountCtrl as createAccount'
        });
    };
});