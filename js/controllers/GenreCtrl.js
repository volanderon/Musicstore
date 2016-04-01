angular.module('myApp').controller('GenreCtrl', function($state, albums) {
    this.albums = albums.data;
    this.stateParams = $state.params;
});