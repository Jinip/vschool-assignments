var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .otherwise("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
})