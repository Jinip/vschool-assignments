var app = angular.module("app");

app.controller("LukeController", ["$scope", "SWService", function($scope, SWService){
    SWService.getLuke()
        .then(function(response){
            $scope.data = response.data;
        })
}]);