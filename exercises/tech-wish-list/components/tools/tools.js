var app = angular.module("app");

app.controller("ToolsController", ["$scope", function($scope){
    $scope.tools = [
        {
            imageUrl: "http://images10.newegg.com/ProductImage/34-298-988-17.jpg",
            name: "AlienWare AW13R2-8900SLV ",
            price: "$1,429.00"
        },
        {
            imageUrl: "http://www.duchuymobile.com//image/cache/data/google/google-pixel/google-pixel-340x350.jpg",
            name: "Google Pixel",
            price: "$649.00"
        },
        {
            imageUrl: "http://www.bsicomputer.com/prodimg/12982/supermicro-superserver-5028l-tn2-mini-tower-overview-img.jpg",
            name: "Supermicro 5028L-TN2 Mini-Tower Server",
            price: "$435.00"
        }
    ]
}])