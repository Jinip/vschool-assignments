var app = angular.module("app");

app.controller("ReviewController", ["$scope", "APIService", "$routeParams", function($scope, APIService, $routeParams){
    APIService.getReview($routeParams.reviewId)
        .then(function(res){
            console.log(res.data);
            $scope.review = res.data;
        })
}])