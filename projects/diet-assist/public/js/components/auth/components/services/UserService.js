var app = angular.module("auth");

app.service("UserService", ["$http", "TokenService", "$location", function($http, TokenService, $location){
    var self = this;
    
    this.user = {};
    
    var url = "/auth";
    
    this.signUp = function(newUser){
        return $http.post(url + "/signup/", newUser);
    }
    
    this.login = function(user){
        return $http.post(url + "/login/", user)
            .then(function(response){
                if (response.data.success === true){
                    console.log(response.data.user)
                    self.user = response.data.user;
                    console.log(self.user)
                    return response;
                }
            })
    }
    
    this.logout = function(){
        TokenService.removeToken();
        $location.path("/home/");
    }
    
    this.updateUser = function(user){
        return $http.put(url + "/users/", user)
            .then(function(response){
                return self.user = response.data.user;
            })
    }
    
    this.isAuthenticated = function(){
        token = TokenService.getToken();

        if (token){
            return true;
        } else {
            return false;
        }
    }
}])