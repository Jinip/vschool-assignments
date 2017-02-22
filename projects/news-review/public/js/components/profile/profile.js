var app = angular.module("app");

app.controller("ProfileController", ["$scope", "APIService", "$routeParams", function ($scope, APIService, $routeParams) {
    APIService.getProfile($routeParams.userId)
        .then(function(res){
            $scope.profile = res.data;
        })
}])