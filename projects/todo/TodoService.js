var app = angular.module("app");

app.service("TodoService", ["$http", function($http){
    var self = this;
    
    var url = "http://localhost:8080/todo/"
    
    this.getTodos = function(){
        return $http.get(url)
            .then(function(response){
                return response.data;
            })
    };
    
    this.postTodo = function(item){
        return $http.post(url, item)
            .then(function(response){
                return response.data;
            })
    };
    
    this.updateTodo = function(item){
        return $http.put(url + item.id, item)
            .then(function(response){
                return response;
            })
    };
    
    this.deleteTodo = function(item, index){
        return $http.delete(url + item.id)
            .then(function(response){
                return response;
            })
    };
}])