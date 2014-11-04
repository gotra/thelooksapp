'use strict';

angular.module('thelooksappApp')
	.controller('ProUserListCtrl', function ($scope,ProUser) {
			$scope.proUsers = ProUser.query(function(){});

		})
	.controller('ProUserDetailCtrl', function ($scope,ProUser,$routeParams) {
		$scope.proUserId = $routeParams.prouserid;

		ProUser.get({id:$scope.proUserId},function(user){
			$scope.user = user;
		});

	});



