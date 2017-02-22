var app = angular.module("auth");

app.service("UserService", ["$http", "TokenService", "$location", function ($http, TokenService, $location) {
    var url = "/auth/";
    var username = "newsReviewUser";

    this.signup = function (newUser) {
        return $http.post(url + "signup", newUser)
            .then(function (res) {
                if (res.data.success) {
                    localStorage[username] = res.data.user;
                    $location.path("/login/")
                }
                return res.data;
            })
    }

    this.login = function (user) {
        return $http.post(url + "login", user)
            .then(function (res) {
                if (res.data.success) {
                    localStorage[username] = res.data.user;
                    TokenService.setToken(res.data.token);
                }
                return res.data;
            })
    }

    this.logout = function () {
        TokenService.removeToken();
        localStorage.removeItem(username)
        $location.path("/home/");
    }

    this.isAuthenticated = function () {
        console.log("authenticating")
        var token = TokenService.getToken();

        return token ? true : false;
    }

    this.getUser = function () {
        return localStorage.getItem(username);
    }
}])