'use strict';

describe('Controller: ProUserListCtrl', function () {

  // load the controller's module
  beforeEach(module('thelooksappApp'));

  var ProUserListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProUserListCtrl = $controller('ProUserListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


describe('Controller: ProUserDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('thelooksappApp'));

  var ProUserDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProUserDetailCtrl = $controller('ProUserDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
