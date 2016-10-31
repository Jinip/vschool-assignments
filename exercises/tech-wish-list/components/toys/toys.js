var app = angular.module("app");

app.controller("ToysController", ["$scope", function($scope){
    $scope.toys = [
        {
            imageUrl: "http://img2.banggood.com/thumb/large/oaupload/banggood/images/44/85/84ad7d4e-2c12-4077-b116-9f00857c7271.jpg",
            name: "XK X251 RC Quadcopter",
            price: "$109.99"
        },
        {
            imageUrl: "http://target.scene7.com/is/image/Target/16961193?wid=3000&hei=3000&qlt=70&fmt=pjpeg",
            name: "WowWee Roboraptor",
            price: "$72.99"
        },
        {
            imageUrl: "http://www.dynamism.com/images/gallery/form-2_02.jpg",
            name: "Formlabs Form 2",
            price: "$3499.00"
        }
    ]
}])