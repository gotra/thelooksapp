'use strict';

angular.module('thelooksappApp')
  .controller('NavigationCtrl', function ($scope, $location, menu, $mdSidenav, $timeout) {
    
    $scope.goHome = function() {
      $location.path( '/' );
    };

    $scope.menu = menu;

    $scope.openMenu = function() {
      
      $timeout(function() { $mdSidenav('left').open(); });
    };



  });