'use strict';

angular.module('thelooksappApp')
	.controller('ProUserListCtrl', function ($scope,ProUser,$location) {
			$scope.proUsers = ProUser.query(function(){});

			$scope.addProUser = function addProUser () {
				$location.path('/admin/prouser/new');
			};

		})
	.controller('ProUserEditCtrl', function ($scope,ProUser,$routeParams,$location) {
		$scope.proUserId = $routeParams.prouserid;


		ProUser.get({id:$scope.proUserId},function(user){
			$scope.user = user;
		});

		$scope.save = function (){
			ProUser.update({id:$scope.proUserId},$scope.user).$promise.then(function(){
				$location.path( '/admin/prouser' );
			},function(){
				//todo handle failure
			});
		};

		$scope.remove = function remove () {
			$scope.user.$remove(function () {
				$location.path( '/admin/prouser' );
			},
			function(){
				//todo handle failure
			});
		};

		$scope.goToList = function () {
			$location.path( '/admin/prouser' );
		};

	})
	.controller('ProUserNewCtrl', function ($scope,ProUser,$routeParams,$location) {
		

		$scope.user = new ProUser();

		$scope.save = function (){
			$scope.user.$save(function () {
				$location.path( '/admin/prouser' );
			},
			function(){
				//todo handle failure
			});
		};

		$scope.goToList = function () {
			$location.path( '/admin/prouser' );
		};

	});



