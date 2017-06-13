var app = angular.module('myApp', []);

app.controller('signinController', function($scope, $http) {
  $http({
    method: "GET",
    url: "http://localhost:3000/users/sign_in"
    params: {email: email, password: psw}
  }).then(function mySuccess(response) {
      $scope.myRes = response.data;
      $scope.statuscode = response.status;
    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});