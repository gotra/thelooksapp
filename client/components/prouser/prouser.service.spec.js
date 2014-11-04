'use strict';

describe('Service: ProUser', function () {

  // load the service's module
  beforeEach(module('thelooksappApp'));

  // instantiate service
  var ProUser;
  beforeEach(inject(function (_ProUser_) {
    ProUser = _ProUser_;
  }));

  it('should do something', function () {
    expect(!!ProUser).toBe(true);
  });

});
