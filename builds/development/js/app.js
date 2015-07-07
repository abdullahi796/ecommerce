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
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/store'
  });
}]);
