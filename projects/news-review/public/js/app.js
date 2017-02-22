var app = angular.module("app", ["ngRoute", "auth"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
        .when("/about/", {
            templateUrl: "js/components/about/about.html",
            controller: "AboutController"
        })
        .when("/sources/", {
            templateUrl: "js/components/sources/sources.html",
            controller: "SourcesController"
        })
        .when("/:siteUrl/", {
            templateUrl: "js/components/site/site.html",
            controller: "SiteController"
        })
        .when("/:siteUrl/:articleUrl/", {
            templateUrl: "js/components/article/article.html",
            controller: "ArticleController"
        })
        .when("/:siteUrl/:articleUrl/:reviewId", {
            templateUrl: "js/components/review/review.html",
            controller: "ReviewController"
        })
        .otherwise({
            redirectTo: "/"
        })
}])