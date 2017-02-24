var app = angular.module("app");

app.controller("NewReviewController", ["$scope", "APIService", "$routeParams", "$location", function ($scope, APIService, $routeParams, $location) {
    if (Object.keys($routeParams).length !== 0) {
        $scope.selectedArticle = $routeParams.selectedArticle;
    }

    $scope.selectedSite;

    $scope.selectedArticle;

    $scope.addingNewArticle = false;

    $scope.getSites = function () {
        APIService.getAllSites()
            .then(function (res) {
                $scope.siteList = res.data;
                console.log($scope.siteList);
            })
    }

    $scope.getSites();

    //    $scope.getArticlesByUrl = function(selcectedSiteUrl){
    //        APIService.getArticlesByUrl(selcectedSiteUrl)
    //            .then(function(res){
    //                $scope.articleList = res.data;
    //            })
    //    }

    $scope.submitArticle = function (newArticle) {
        newArticle.source = {
            name: $scope.selectedSite.name,
            url: $scope.selectedSite.url
        };
        APIService.postArticle(newArticle)
            .then(function (res) {
                $scope.selectedSite.articles.push(res.data);
                $scope.selectedArticle = $scope.selectedSite.articles[$scope.selectedSite.articles.length - 1];
            })
    }

    $scope.addReview = function (newReview) {
        APIService.postReview(newReview)
            .then(function (res) {
                if (!res.data.success) {
                    $scope.reviewAlert = res.data.message;
                } else {
                    $location.path(selectedSite.url + "/" + selectedArticle.url + "/" + res.data._id);
                }
            })
    }
}])