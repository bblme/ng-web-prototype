'use strict';

describe('Directive: taggeableFriends', function () {

  // load the directive's module
  beforeEach(module('ngWebPrototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<taggeable-friends></taggeable-friends>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the taggeableFriends directive');
  }));
});
