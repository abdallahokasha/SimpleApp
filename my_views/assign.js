var app = angular.module('myApp', []);

app.controller('assignController', function($scope, $http) {
  $scope.com_id="1";
  $scope.emp_id="2";
 
  $http({
    method: "GET",
    url: "http://localhost:3000/companies/"+$scope.com_id+"/assign?employee_id=",
    params: {employee_id: $scope.emp_id}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});