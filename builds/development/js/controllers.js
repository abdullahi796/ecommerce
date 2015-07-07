var appControllers = angular.module('appControllers',['ngAnimate']);

appControllers.controller('StoreController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.products = data;
  });
}]);



appControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.products = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);
