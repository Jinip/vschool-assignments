var app = angular.module("auth", ["ngRoute"]);

app.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){
    $routeProvider
        .when("/signup/", {
            templateUrl: "js/components/auth/components/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login/", {
            templateUrl: "js/components/auth/components/login/login.html",
            controller: "LoginController"
        })
        .when("/logout/", {
            template: "",
            controller: "LogoutController"
        })
    
    $httpProvider.interceptors.push("AuthInterceptor");
        
}])