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
            controller: 'HomeCtrl as home'
        })
});