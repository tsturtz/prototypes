// Create the route module and name it routeApp
var app = angular.module('routeApp',['ngRoute']);
// Config the routes
app.config(function($routeProvider){
    $routeProvider
        // route for the home page
        .when('/home',{
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        // route for the about page
        .when('/about',{
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        })
        // route for the contact page
        .when('/contact',{
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({redirectTo: 'pages/home.html'});
});

// Create the controllers for the different pages below
app
    .controller('routeCtrl', function($scope){
    //$scope.message = 'lorem ipsum 1';
    })

// home page controller

    .controller('mainCtrl', function($scope){
    $scope.message = 'lorem ipsum HOME';
    })

// about page controller

    .controller('aboutCtrl', function($scope){
    $scope.message = 'lorem ipsum ABOUT';
    })

// contact page controller

    .controller('contactCtrl', function($scope){
    $scope.message = 'lorem ipsum CONTACT';
    });