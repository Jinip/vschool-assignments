var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "/templates/home/home.html",
        controller: "HomeController"
    }).when("/about", {
        templateUrl: "/templates/about/about.html",
        controller: "AboutController"
    }).when("/why-i-love", {
        templateUrl: "/templates/why-i-love/why-i-love.html",
        controller: "LoveController"
    }).otherwise("/home", {
        templateUrl: "/templates/home/home.html",
        controller: "HomeController"
    })
})