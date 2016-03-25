angular.module('myApp', [
    'ui.router',
    'ngAnimate'
])
.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
})
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        //.when('/c?id', '/contacts/:id')
        //.when('/user/:id', '/contacts/:id')
        .otherwise('/');

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: 'js/tpls/home.html',
            controller: 'HomeCtrl as home',
            resolve: {
                albums: function($http){
                    return $http.get('/musicstore/api/albums');
                }
            }
        })
        .state("genre", {
            url: "/genre/:id/:name",
            templateUrl: 'js/tpls/genre.html',
            controller: 'GenreCtrl as genre',
            resolve: {
                albums: function($http, $stateParams){
                    return $http.get('/musicstore/api/albums/' + $stateParams.id);
                }
            }
        })
        .state("album", {
            url: "/album/:id",
            templateUrl: 'js/tpls/album.html',
            controller: 'AlbumCtrl as album',
            resolve: {
                album: function($http, $stateParams){
                    return $http.get('/musicstore/api/album/' + $stateParams.id);
                }
            }
        })
        .state("wishlist", {
            url: "/wishlist",
            templateUrl: 'js/tpls/wishlist.html',
            controller: 'WishlistCtrl as wishlist'
        })
        .state("checkout", {
            url: "/checkout",
            templateUrl: 'js/tpls/checkout.html',
            controller: 'CheckoutCtrl as checkout'
        })
        .state("login", {
            url: "/login",
            templateUrl: 'js/tpls/login.html',
            controller: 'LoginCtrl as login'
        })

});