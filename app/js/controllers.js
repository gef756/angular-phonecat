'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

// annotate function with dependency names
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      // $scope.phones = data.splice(0, 5); // limit to top 5 results
    });

    $scope.orderProp = 'age';
    $scope.name = "World";
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  '$http', function($scope, $routeParams, $http) {
    $http
      .get('phones/' + $routeParams.phoneId + '.json')
      .success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
      });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    $scope.hello = function(name) {
      alert('Hello ' + (name || 'world') + '!');
    };
  }]);
