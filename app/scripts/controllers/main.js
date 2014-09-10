'use strict';

angular.module('ngWebPrototypeApp').controller('MainCtrl', function ($scope, $facebook) {

    $scope.user = {};
    $scope.accessToken;
    $scope.expiresIn;
    $scope.signedRequest;

    $scope.login = function(){
        $facebook.login().then(function(result) {
            if(result.authResponse){
                $scope.accessToken = result.authResponse.accessToken;
                $scope.expiresIn = result.authResponse.expiresIn;
                $scope.signedRequest = result.authResponse.signedRequest;
                $facebook.api('/me').then(function(response) {
                    cloneUser(response);
                    retrieveFriends();
                });
            }else{
                console.log('User cancelled login or did not fully authorize.');
            }
        }, function(reason) {
           console.log('reason=['+reason+']');
            //TODO ???
        }, function(update) {
            console.log('Got notification: ' + update);
            //TODO ???
        });
    };

    function retrieveFriends(){
        $facebook.api('/me/taggable_friends').then(function(response) {
            $scope.user.friends = [];
            angular.forEach(response.data, function(friend) {
                $scope.user.friends.push(friend);
            });
        }, function(reason) {
            console.log('reason=['+reason+']');
            //TODO ???
        }, function(update) {
            console.log('Got notification: ' + update);
            //TODO ???
        });
    }

    function cloneUser (response) {
        $scope.user.email =  response.email;
        $scope.user.firstName = response.first_name;
        $scope.user.gender = response.gender;
        $scope.user.id = response.id;
        $scope.user.lastName = response.last_name;
        $scope.user.pictureLink = response.link;
        $scope.user.locale = response.locale;
        $scope.user.name = response.name;
        $scope.user.timezone = response.timezone;
        $scope.user.updatedTime = response.updated_time;
        $scope.user.verified = response.verified;
    }


    $scope.login();
});
