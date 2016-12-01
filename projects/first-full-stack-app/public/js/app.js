var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
        .when("/shop/", {
            templateUrl: "js/components/shop/shop.html",
            controller: "ShopController"
        })
        .when("/shop/:category/", {
            templateUrl: "js/components/shop/shop.html",
            controller: "ShopController"
        })
        .when("/shop/:category/:subCategory", {
            templateUrl: "js/components/shop/shop.html",
            controller: "ShopController"
        })
        .when("/guides", {
            templateUrl: "js/components/guides/guides.html",
            controller: "GuidesController"
        })
        .when("/guides/:guideUrl", {
            templateUrl: "js/components/guides/guides.html",
            controller: "GuidesController"
        })
        .otherwise("/home", {
            templateUrl: "js/components/home/home.html",
            controller: "HomeController"
        })
}])