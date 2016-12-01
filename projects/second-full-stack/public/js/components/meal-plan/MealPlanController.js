var app = angular.module("app");

app.controller("MealPlanController", ["$scope", "MealPlanService", "UserService", "ShopListService", function($scope, MealPlanService,  UserService, ShopListService){
    UserService.isAuthenticated();
    console.log(UserService.user.toString());
    var user = UserService.user;
    
    $scope.mealPlan = MealPlanService.mealPlan;
    
    $scope.editing = false;
    
    var newMember = {
        name: "",
        sex: "",
        age: "",
        height: "",
        weight: "",
        physicalActivity: ""
    }
    
    function calculateNutrition(arr){
        //calculate the nutritional needs of each family member and return the totals as an object
    }
    
    $scope.savedMealPlans = [];
    
    $scope.family = [
        {
            name: user.name || "",
            sex: user.sex || "",
            age: user.age || "",
            height: user.height || "",
            weight: user.weight || "",
            physicalActivity: user.physicalActivity || ""
        }
    ];
    
    $scope.exclude = user.allergies || [];
    
    $scope.addMember = function(){
        $scope.family.push(newMember);
    }
    
    $scope.deleteMember = function(index){
        $scope.family.splice(index, 1);
    }
    
    $scope.addExclude = function(exclude){
        $scope.exclude.push(exclude);
    }
    
    $scope.deleteExclude = function(index){
        $scope.exclude.splice(index, 1);
    }
    
    $scope.generateMealPlan = function(){
        var mealPlanQuery = {
            nutrientTotals: {},
            exclude: {},
        }
        //mealPlanQuery.nutrientTotals = calculateNutrition($scope.family);
        mealPlanQuery.exclude = $scope.exclude;
        
        MealPlanService.getMealPlan(mealPlanQuery)
            .then(function(response){
                $scope.mealPlan = MealPlanService.mealPlan;
            })
    }
    
//    $scope.getReplacement
    
    $scope.getSavedMealPlans = function(){
        MealPlanService.getSavedMealPlans()
            .then(function(response){
                $scope.savedMealPlans = response.data;
            })
    }
    
    $scope.saveMealPlan = function(){
        if ($scope.mealPlan.length){
            MealPlanService.saveMealPlan($scope.mealPlan);
        }
    }
    
    $scope.generateShoppingList = function(){
        console.log("shopping list");
        ShopListService.generateShoppingList($scope.mealPlan);
    }
    
    $scope.updateUser = function(user){
        UserService.updateUser(user);
    }
}])