angular.module('myApp').controller('GenreCtrl', function(albums) {
    this.albums = albums.data[0];
});