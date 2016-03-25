angular.module('myApp').directive('genreSidebar', function($http){
   return {
       restrict: 'E',
       templateUrl: '/musicstore/js/directives/tpls/genre-sidebar.html',
       controllerAs: 'genreSidebar',
       controller: function($scope){
           this.state = 'genres';

           $http.get('/musicstore/api/genres').then(function(data){
               $scope.genres = data.data;
           });
       }
   };
});