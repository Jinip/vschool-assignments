var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "components/tools/tools.html",
            controller: "ToolsController"
        })
        .when("/toys", {
            templateUrl: "components/toys/toys.html",
            controller: "ToysController"
        })
        .when("/tools", {
            templateUrl: "components/tools/tools.html",
            controller: "ToolsController"
        })
})