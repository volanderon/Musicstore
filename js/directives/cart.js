angular.module('myApp').directive('cart', function(Cart){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/cart.html',
       controllerAs: 'cart',
       controller: function(){
           this.getItems = function(){
               return Cart.getItems();
           };

           this.addToCart = function(album) {
               Cart.addToCart(album);
           };

           this.total = function() {
               return Cart.total();
           };

           this.clear = function() {
               Cart.clear();
           };

           this.clearItem = function(index) {
               Cart.clearItem(index);
           };
       }
   };
});