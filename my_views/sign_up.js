( function() {
  'use strict';

  angular.module('signUp', ['Devise'])
   .config(function(AuthProvider) {
        AuthProvider.loginPath('http://localhost:3000/users.json');
        AuthProvider.loginMethod('POST');
        AuthProvider.resourceName('user');
    })
  .controller('signUpCtrl', ['Auth', '$scope', '$location',
    function(Auth, $scope, $location) {
      this.credentials = { email: '', password: '', cpassword: ''};

      this.signUp = function() {
        // Code to use 'angular-devise' component
        Auth.login(this.credentials).then(function(user) {
          //$location.path("/");
          alert('Successfully registered user!')
        }, function(error) {
          console.info('Error in authenticating user!');
          alert('Error in registering user!');
        });
      }
    }
  ]);
})();