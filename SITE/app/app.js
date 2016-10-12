var App = angular.module('App', ['ngRoute']);

App.controller('ProjectCtrl', function($scope, $http) {
  $http.get('app/projects.json')
       .then(function(res){
          $scope.projects = res.data;
        });
});

App.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

App.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/page1', {
    templateUrl: 'page1.html',
    controller: 'oneCtrl'
  }).
  when('/page2', {
    templateUrl: 'page2.html',
    controller: 'twoCtrl'

  }).
  when('/page3', {
    templateUrl: 'page3.html',
    controller: 'threeCtrl'

  }).
  otherwise({
    redirectTo: '/page1'
  });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

}).controller('oneCtrl', function($scope) {

  $scope.Message = "HELLO WORlD";

}).controller('twoCtrl', function($scope) {

  $scope.Message = "This is the Page Num 2";
}).controller('threeCtrl', function($scope) {

  $scope.Message = "Three";
});
