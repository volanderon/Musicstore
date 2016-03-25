angular.module('myApp').directive('cart', function(){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/cart.html',
       controllerAs: 'cart',
       controller: function(){

       }
   };
});