var app = angular.module("app");

app.controller("SiteController", ["$scope", "APIService", "$routeParams", function($scope, APIService, $routeParams){
    console.log($routeParams);
    APIService.getSiteByUrl($routeParams.siteUrl)
        .then(function(res){
            $scope.site = res.data[0];
        })
}])