'use strict';

angular.module('thelooksappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/user', {
        templateUrl: 'app/admin/user/user.html',
        controller: 'AdminUserCtrl'
      })
      .when('/admin/prouser', {
        templateUrl: 'app/admin/prouser/prouserlist.html',
        controller: 'ProUserListCtrl'
      })
      .when('/admin/prouser/:prouserid', {
        templateUrl: 'app/admin/prouser/prouserdetail.html',
        controller: 'ProUserDetailCtrl'
      });
  });