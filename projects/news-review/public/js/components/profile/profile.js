var app = angular.module("app");

app.controller("ProfileController", ["$scope", "APIService", "$routeParams", function ($scope, APIService, $routeParams) {
    APIService.getProfile($routeParams.username)
        .then(function(res){
            console.log(res.data);
            $scope.profile = res.data[0];
        })
}])