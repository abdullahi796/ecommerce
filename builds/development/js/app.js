var myApp = angular.module('myApp',[
  'ngRoute',
  'appControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/store', {
    templateUrl: 'partials/store.html',
    controller: 'StoreController'
  }).
  when('/single', {
    templateUrl: 'partials/single.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/store'
  });
}]);
