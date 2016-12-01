var app = angular.module("app");

app.controller("LeiaController", ["$scope", "SWService", function($scope, SWService){
    SWService.getLeia()
        .then(function(response){
            $scope.data = response.data;
        })
}]);