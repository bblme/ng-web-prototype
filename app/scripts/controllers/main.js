'use strict';

angular.module('ngWebPrototypeApp')
  .controller('MainCtrl', function ($scope, $facebook) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
    });
  }
  });
