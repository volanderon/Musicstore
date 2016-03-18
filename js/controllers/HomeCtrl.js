angular.module('myApp').controller('HomeCtrl', function(albums) {
    this.albums = {
        big: albums.data.splice(0, 1),
        header: albums.data.splice(0, 8),
        sidebar: albums.data.splice(0, 2),
        content: albums.data
    };
});