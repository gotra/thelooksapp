'use strict';

angular.module('thelooksappApp')
  .controller('NavigationCtrl', function ($scope, $location, menu) {
    
    $scope.goHome = function() {
      $location.path( '/' );
    };

    $scope.menu = menu;



  });