'use strict';

angular.module('ngWebPrototypeApp')
  .controller('MainCtrl', function ($scope, $facebook) {
    function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
    });
  }
    refresh();
  });
