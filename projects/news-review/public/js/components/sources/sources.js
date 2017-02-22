var app = angular.module("app");

app.controller("SourcesController", ["$scope", "APIService", function($scope, APIService){
    APIService.getAllSites()
        .then(function(res){
            $scope.sites = res.data;
        })
}])