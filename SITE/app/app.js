var App = angular.module('App', []);

App.controller('ProjectCtrl', function($scope, $http) {
  $http.get('app/projects.json')
       .then(function(res){
          $scope.projects = res.data;
        });
});