var app = angular.module("app");

app.service("HomeService", ["$http", "TokenService", function($http, TokenService){
    var url = "api/endpoint/";
    
    this.getItems = function(){
        return $http.get(url);
    }
    
    this.postItem = function(item){
        return $http.post(url, item);
    }
    
    this.getItem = function(item){
        return $http.get(url + item._id);
    }
    
    this.putItem = function(item){
        return $http.put(url + item._id, item);
    }
    
    this.deleteItem = function(item){
        return $http.delete(url + item._id);
    }
}])