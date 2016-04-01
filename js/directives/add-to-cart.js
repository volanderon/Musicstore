angular.module('myApp').directive('addToCart', function(Cart){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/add-to-cart.html',
       controllerAs: 'addToCart',
       scope: {
           album: '='
       },
       controller: function(){
           this.addToCart = function(album) {
               Cart.addToCart(album);
           };

           this.total = function() {
               return Cart.total();
           };
       }
   };
});