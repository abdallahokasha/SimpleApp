var app = angular.module('myApp', []);

app.controller('my_companiesController', function($scope, $http) {
  $scope.emp_id="3";

  //$scope.submitForm = function() {
       
  $http({
    method: "GET",
    url: "http://localhost:3000/employees/"+$scope.emp_id+"/list_companies",
    params: {}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });

//};

});