var app = angular.module("app");

app.controller("NewReviewController", ["$scope", "APIService", "$routeParams", "$location", function($scope, APIService, $routeParams, $location){
    if (Object.keys($routeParams).length !== 0){
        $scope.selectedArticle = $routeParams.selectedArticle;
    }
    
    $scope.selectedSite = {};
    
    $scope.selectedArticle = {};
    
    $scope.addingNewArticle = false;
    
//    $scope.getSites = function(){
        APIService.getAllSites()
            .then(function(res){
                $scope.siteList = res.data;
            })
//    }
    
//    $scope.getArticlesByUrl = function(selcectedSiteUrl){
//        APIService.getArticlesByUrl(selcectedSiteUrl)
//            .then(function(res){
//                $scope.articleList = res.data;
//            })
//    }
    
    $scope.addArticle = function(newArticle){
        APIService.postArticle(newArticle)
            .then(function(res){
                $scope.articleAlert = res.data.message;
            })
    }
    
    $scope.addReview = function(newReview){
        APIService.postReview(newReview)
            .then(function(res){
                if (!res.data.success){
                    $scope.reviewAlert = res.data.message;
                } else {
                    $location.path(selectedSite.url + "/" + selectedArticle.url + "/" + res.data._id);
                }
            })
    }
}])