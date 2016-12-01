var app = angular.module("app");

app.controller("HanController", ["$scope", "SWService", function($scope, SWService){
    SWService.getHan()
        .then(function(response){
            $scope.data = response.data;
        })
}]);