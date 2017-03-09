var app = angular.module("app");

app.service("MealPlanService", ["$http", "$q", function($http, $q){
    var url = "/api"
    
    var self = this;
    
    this.getMealPlan = function(query){
        //construct the query string)
        var exclude = query.exclude.toString();
        console.log(exclude);
        exclude = exclude.replace(" ", "_");
        console.log(exclude);
        return $http.get("/recipes/?exclude=" + exclude)
            .then(function(response){
                return self.mealPlan = response.data;
            })
    }
    
    this.getSavedMealPlans = function(){
        return $http.get(url + "/meal-plans/");
    }
}])