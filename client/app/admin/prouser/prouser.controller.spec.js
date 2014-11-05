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


describe('Controller: ProUserEditCtrl', function () {

  // load the controller's module
  beforeEach(module('thelooksappApp'));

  var ProUserEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProUserEditCtrl = $controller('ProUserEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

describe('Controller: ProUserNewCtrl', function () {

  // load the controller's module
  beforeEach(module('thelooksappApp'));

  var ProUserNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProUserNewCtrl = $controller('ProUserNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
