'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

// annotate function with dependency names
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
    $scope.name = "World";
}]);
