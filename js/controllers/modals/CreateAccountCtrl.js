angular.module('myApp').controller('CreateAccountCtrl', function(Register) {

    var that = this;

    this.form = {};
    this.account = {};

    this.register = function() {
        Register.register(that.account);
    };

    this.reset = function() {
        that.account = {};
    };
});