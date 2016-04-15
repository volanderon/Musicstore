angular.module('myApp').controller('LoginCtrl', function($uibModal) {
    this.createAccount = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'js/tpls/modals/create-account.html',
            // controller: 'ModalInstanceCtrl',
        });
    };
});