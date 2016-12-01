var app = angular.module("app", []);

app.controller("main", ["$scope", "TodoService", function($scope, TodoService){    
    $scope.editing = false;
    
    TodoService.getTodos()
        .then(function(response){
            $scope.data = response;
        })
    
    $scope.createTodo = function(item){
        TodoService.postTodo(item)
            .then(function(response){
                $scope.data.push(response);
                $scope.newItem = {};
            })
    }
    
    $scope.saveTodo = function(item){
        TodoService.updateTodo(item)
            .then(function(reseponse){
                console.log(reseponse);
            })
    }
    
    $scope.deleteTodo = function(item, index){
        TodoService.deleteTodo(item, index)
            .then(function(response){
                console.log(response);
                $scope.data.splice(index, 1);
            })
    }
    
}])