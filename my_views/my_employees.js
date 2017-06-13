var app = angular.module('myApp', []);

app.controller('my_employeesController', function($scope, $http) {
  $scope.com_id="";
  
  $http({
    method: "GET",
    url: "http://localhost:3000/companies/1/list_employees",
    //params: {id: $scope.com_id}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      console.log(myRes);
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});