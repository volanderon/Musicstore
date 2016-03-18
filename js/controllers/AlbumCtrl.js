angular.module('myApp').controller('AlbumCtrl', function(album) {
    this.album = album.data[0];
});