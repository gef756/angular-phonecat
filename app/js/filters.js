'use strict';

/* Filters */
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    // convert True / False to check mark or X
    return input ? '\u2713': '\u2718';
  };
});
