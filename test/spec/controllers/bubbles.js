'use strict';

describe('Controller: BubblesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngWebPrototypeApp'));

  var BubblesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BubblesCtrl = $controller('BubblesCtrl', {
      $scope: scope
    });
  }));
});
