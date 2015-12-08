'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

// annotate function with dependency names
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
    $scope.phones = Phone.query();
    // $scope.phones = data.splice(0, 5); // limit to top 5 results

    $scope.orderProp = 'age';
    $scope.name = "World";
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    $scope.hello = function(name) {
      alert('Hello ' + (name || 'world') + '!');
    };
  }]);
