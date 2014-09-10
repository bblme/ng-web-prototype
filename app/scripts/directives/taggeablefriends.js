'use strict';

angular.module('ngWebPrototypeApp')
  .directive('taggeableFriends', function () {
    return {
      templateUrl: 'templates/taggeable-friends.html',
      restrict: 'E'
    };
  });
