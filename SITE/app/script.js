angular.module('testApp', ['ngRoute']).
config(function($routeProvider, $locationProvider) {
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

}).controller('oneCtrl', function($scope) {

  $scope.Message = "HELLO WORlD";

}).controller('twoCtrl', function($scope) {

  $scope.Message = "This is the Page Num 2";
}).controller('threeCtrl', function($scope) {

  $scope.Message = "Three";
});
