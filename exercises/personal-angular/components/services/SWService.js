var app = angular.module("app");

app.service("SWService", ["$http", function($http){
    this.getLuke = function(){
        return $http.get("http://swapi.co/api/people/1")
            .then(function(response){
                console.log(response.data);
                return response;
            })
    }
    
    this.getLeia = function(){
        return $http.get("http://swapi.co/api/people/5")
            .then(function(response){
                console.log(response.data);
                return response;
            })
    }
    
    this.getHan = function(){
        return $http.get("http://swapi.co/api/people/14")
            .then(function(response){
                console.log(response.data);
                return response;
            })
    }
}]);