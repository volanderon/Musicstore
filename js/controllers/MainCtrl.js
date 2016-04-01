angular.module('myApp').controller('MainCtrl', function(Cart) {
    this.getCartCount = function() {
        return Cart.getItems().length;
    };

    this.addToCart = function(album) {
        Cart.addToCart(album);
    };
});