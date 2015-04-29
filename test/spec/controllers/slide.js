'use strict';

describe('Controller: SlidectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('kidshouseApp'));

  var SlidectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidectrlCtrl = $controller('SlidectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
