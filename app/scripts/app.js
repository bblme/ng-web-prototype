'use strict';

angular
  .module('ngWebPrototypeApp', ['ngRoute', 'ngFacebook']);


angular
  .module('ngWebPrototypeApp').config( function( $facebookProvider, $routeProvider ) {
      $facebookProvider.setAppId('686705174737387');
      $facebookProvider.setCustomInit({
          version    : 'v1.0'
       });
      $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/bubbles', {
                  templateUrl: 'views/bubbles.html',
                  controller: 'BubblesCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
})

angular
  .module('ngWebPrototypeApp').run( function( $rootScope ) {
(function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
  (function(){
   }());
})

;