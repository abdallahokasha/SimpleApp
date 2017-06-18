( function() {
  'use strict';

  angular.module('signIn', ['Devise'])
   .config(function(AuthProvider) {
        AuthProvider.loginPath('http://localhost:3000/users/sign_in.json');
        AuthProvider.loginMethod('POST');
        AuthProvider.resourceName('user');
    })
  .controller('signInCtrl', ['Auth', '$scope', '$location',
    function(Auth, $scope, $location) {
      this.credentials = { email: '', password: '' };

      this.signIn = function() {
        // Code to use 'angular-devise' component
        Auth.login(this.credentials).then(function(user) {
          //$location.path("/");
          alert('Successfully signed in user!')
        }, function(error) {
          console.info('Error in authenticating user!');
          alert('Error in signing in user!');
        });
      }
    }
  ]);
})();

// var app = angular.module('myApp', []);

// app.controller('signinController', function($scope, $http) {
  
//   $scope.email="";
//   $scope.password="";

//   $http({
//     method: "POST",
//     url: "http://localhost:3000/users/sign_in",
//     params: {email: $scope.email, password: $scope.password}

//   }).then(function mySuccess(response) {
//       $scope.myRes = response.data;
//       $scope.statuscode = response.status;
//       console.log("hey i am here");
//     }, function myError(response) {
//       $scope.myRes = response.statusText;
//   });
// });
   

// var myApp = angular.module('myApp', ['Devise'])

// myApp.config(function(AuthProvider, AuthInterceptProvider) {
//         AuthProvider.loginPath('/users/sign_in.json');
//         AuthProvider.loginMethod('POST');
//         AuthProvider.resourceName('user');

//         AuthInterceptProvider.interceptAuth(true);
//     });

//     myApp.controller('signinController', function($scope, Auth) {
//         var credentials = {
//             email: 'abc@xyz.com',
//             password: '123456'
//         };
//         // var config = {
//         //     headers: {
//         //         'X-HTTP-Method-Override': 'POST'
//         //     }
//         // };

//         Auth.login(credentials).then(function(user) {
//             console.log(user); // => {id: 1, ect: '...'}
//         }, 

//         function(error) {
//             // Authentication failed...
//         });

//         $scope.$on('devise:login', function(event, currentUser) {
//             // after a login, a hard refresh, a new tab
//         });

//         $scope.$on('devise:new-session', function(event, currentUser) {
//             // user logged in by Auth.login({...})
//         });
//     });

    