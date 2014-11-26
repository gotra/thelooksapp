'use strict';

angular.module('thelooksappApp')
  .controller('NavigationCtrl', function ($scope, $location, menu, $mdSidenav, $timeout) {

    $scope.goHome = function(section) {
      if (!section || section.includeUrl) {
		$location.path( '/' );
      }

    };

    $scope.menu = menu;

    $scope.styles = menu.finderStyles;

    $scope.data = menu.finderData;




    $scope.openMenu = function() {

      $timeout(function() { $mdSidenav('left').open(); });
    };

  });
