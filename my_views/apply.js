var app = angular.module('myApp', []);

app.controller('applyController', function($scope, $http) {
  // email = $scope.email;
  // psw = $scope.psw;
  $http({
    method: "GET",
    url: "http://localhost:3000/employees/emp_id/apply?company_id=com_id",
    params: {company_id: com_id}

  }).then(function mySuccess(response) {
      // a string, or an object, carrying the response from the server.
      $scope.myRes = response.data;
      $scope.statuscode = response.status;

    }, function myError(response) {
      $scope.myRes = response.statusText;
  });
});