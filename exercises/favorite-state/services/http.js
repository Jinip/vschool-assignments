var app = angular.module("app");

app.service("httpService", ["$http", "parseWiki", function($http, parseWiki){
    this.get = function(url){
        return $http.get(url)
            .then(function(response){
                return response.data;
            })
    }
    this.getWiki = function(url){
        return $http.get(url)
            .then(function(response){
                var about = parseWiki.getAbout(response.data);
                return about;
            })
    }
}])

//*[@id="mw-content-text"]/p[1]