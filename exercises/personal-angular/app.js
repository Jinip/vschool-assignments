var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/luke", {
            controller: "LukeController",
            templateUrl: "components/luke/luke.html"
        })
        .when("/leia", {
            controller: "LeiaController",
            templateUrl: "components/leia/leia.html"
        })
        .when("/han", {
            controller: "HanController",
            templateUrl: "components/han/han.html"
        })
        .otherwise("/luke", {
            controller: "LukeController",
            templateUrl: "components/luke/luke.html"
        })
})