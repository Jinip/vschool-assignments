var app = angular.module("auth");

app.service("UserService", ["$http", "TokenService", "$location", function($http, TokenService, $location){
    var url = "/auth/";
    var self = this;
    this.user = {};
    
    this.signup = function(newUser){
        return $http.post(url + "signup", newUser)
            .then(function(res){
                if (res.data.success){
                    self.user = res.data.user;
                    TokenService.setToken(res.data.token);
                }
                return res.data;
        })
    }
    
    this.login = function(user){
        return $http.post(url + "login", user)
            .then(function(res){
                if (res.data.success){
                    TokenService.setToken(res.data.token);
                }
                return res.data;
            })
    }
    
    this.logout = function(){
        TokenService.removeToken();
        $location.path("/home/");
    }
}])