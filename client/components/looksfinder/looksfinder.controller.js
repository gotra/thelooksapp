'use strict';

angular.module('thelooksappApp')
  .controller('FinderCtrl', function ($scope) {
    
	$scope.data = {
		sex : 'female',
		color : 'blond',
		length: 'short',
		style: ['classic'],
		facetype: 'oval'
	};

	$scope.styles = {'classic':false,'vintage':false,'creative':false,'trendy':false,
	'prestige':false,'curly':false,'bob':false};

	$scope.showFinder = false;

	$scope.toggleShowFinder = function toggleShowFinder () {
		$scope.showFinder =  ! $scope.showFinder;
	};

});