var app = angular.module('myApp', []);

app.controller('signinController', function($scope, $http) {
  
  $scope.email="";
  $scope.password="";

  $http({
    method: "POST",
    url: "http://localhost:3000/users/sign_in",
    params: {email: $scope.email, password: $scope.password}

  }).then(function mySuccess(response) {
      $scope.myRes = response.data;
      $scope.statuscode = response.status;
      console.log("hey i am here");
    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});