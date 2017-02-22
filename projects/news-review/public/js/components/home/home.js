var app = angular.module("app");

app.controller("HomeController", ["$scope", "APIService", function($scope, ReviewService){
    ReviewService.getRecentUpdates()
        .then(function(res){
            $scope.recent = res.data;
        })
}])