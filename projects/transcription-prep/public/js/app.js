var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
        .otherwise({
            redirectTo: "/"
        })
}])