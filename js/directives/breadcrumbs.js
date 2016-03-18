angular.module('myApp').directive('breadcrumbs', function(){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/breadcrumbs.html',
       controllerAs: 'breadcrumbs',
       controller: function(){
           this.state = 'home';
       }
   };
});