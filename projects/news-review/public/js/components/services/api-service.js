var app = angular.module("app");

app.service("APIService", ["$http", function($http){
    var url = "/api/"
    
    /// SITES ///
    this.getRecentUpdates = function(){
        return $http.get(url + "sites/recent");
    }
    
    this.getAllSites = function(){
        return $http.get(url + "sites");
    }
    
    this.getSiteByUrl = function(siteUrl){
        return $http.get(url + "sites/?url=" + siteUrl);
    }
    
    /// ARTICLES ///
    this.getAllArticles = function(){
        return $http.get(url + "articles");
    }
    
    this.getArticleByUrl = function(articleUrl){
        return $http.get(url + "articles/?url=" + articleUrl);
    }
    
    /// REVIEWS ///
    this.getAllReviews = function(){
        return $http.get(url + "reviews");
    }
    
    this.getReview = function(id){
        return $http.get(url + "reviews/" + id);
    }
    
    /// PROFILES ///
    this.getProfile = function(username){
        return $http.get(url + "users/" + username);
    }
}])