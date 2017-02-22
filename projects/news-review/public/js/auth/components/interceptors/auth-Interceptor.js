var app = angular.module("auth");

app.factory("AuthInterceptor", ["$q", "$location", "TokenService", function($q, $location, TokenService){
    return {
        request: function (config){
            var token = TokenService.getToken();
            if (token){
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response){
            if (response.status === 401){
                TokenService.removeToken();
                $location.path("/login/");
            }
            return $q.reject(response);
        }
    }
}])