var app = angular.module('myApp', ['ngRoute','regmyApp','loginapp']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'Logincontroller'
 })

  .otherwise({redirectTo: '/'});
});



