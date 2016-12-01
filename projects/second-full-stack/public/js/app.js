var app = angular.module("app", ["ngRoute", "auth"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/home/", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
        .when("/meal-plan/", {
            templateUrl: "js/components/meal-plan/meal-plan.html",
            controller: "MealPlanController"
        })
        .when("/shopping-list/", {
            templateUrl: "js/components/shopping-list/shopping-list.html",
            controller: "ShopListController"
        })
        .otherwise("/home/", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
}])