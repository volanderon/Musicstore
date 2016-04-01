angular.module('myApp').directive('cart', function(){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/cart.html',
       controllerAs: 'cart',
       controller: function(){
           var that = this;
           this.items = [];

           this.addToCart = function(album) {
               var index = that.items.indexOf(album);
               if (index > -1) {
                   that.items[index].count++;
               } else {
                   album.count = 1;
                   that.items.push(album);
               }
           };

           this.total = function() {
               var sum = 0;
               angular.forEach(that.items, function(item) {
                   sum += parseFloat(item.album_price) * parseInt(item.count, 10);
               });
               return sum;
           };

           this.clear = function() {
               that.items = [];
           };

           this.clearItem = function(index) {
               that.items.splice(index, 1);
           };
       }
   };
});