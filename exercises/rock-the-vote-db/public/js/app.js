var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/components/main/main.html",
            controller: "MainController"
        })
        .otherwise("/", {
            templateUrl: "js/components/main/main.html",
            controller: "MainController"
        })
})