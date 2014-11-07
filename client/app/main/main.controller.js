'use strict';

angular.module('thelooksappApp')
  .controller('MainCtrl', function ($scope, Images, menu) {


    $scope.$watch(menu.aggregateFinderData,function(){
			
			$scope.images = Images.query(menu.finderData,function(){});
    },true);
    
  });
