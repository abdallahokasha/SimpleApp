var app = angular.module('myApp', []);

app.controller('applyController', function($scope, $http) {

  $scope.emp_id="1";
  $scope.com_id="3";
  
  $http({
    method: "GET",
    url: "http://localhost:3000/employees/"+$scope.emp_id+"/apply?company_id=",
    params: {company_id: $scope.com_id}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});