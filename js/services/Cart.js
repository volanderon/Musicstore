angular.module('myApp').factory('Cart', function(){
    var service = {},
        items = [];

    service.getItems = function() {
        return items;
    };

    service.addToCart = function(album) {
        var index = items.indexOf(album);
        if (index > -1) {
            items[index].count++;
        } else {
            album.count = 1;
            items.push(album);
        }
    };

    service.total = function() {
        var sum = 0;
        angular.forEach(items, function(item) {
            sum += parseFloat(item.album_price) * parseInt(item.count, 10);
        });
        return sum;
    };

    service.clear = function() {
        items = [];
    };

    service.clearItem = function(index) {
        items.splice(index, 1);
    };

    return service;
});