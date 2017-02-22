var app = angular.module("app");

app.controller("ArticleController", ["$scope", "APIService", "$routeParams", function($scope, APIService, $routeParams){
    $scope.site = {};
    $scope.site.url = $routeParams.siteUrl;
    APIService.getArticleByUrl($routeParams.articleUrl)
        .then(function(res){
            console.log(res.data);
            $scope.article = res.data[0];
        })
}])