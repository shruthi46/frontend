var app = angular.module('myApp', ['ngRoute','regmyApp','blogapp','forumApp','myforumApp','ngCookies','lapp','friendApp','frndmyApp'])
.run(run);
app.config(function( $routeProvider,$locationProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
 
 .when('/UserProfile', {
	      templateUrl: 'html/UserProfile.html', 
	      controller: 'Registercontroller'
	   })
 
 .when('/home', {
    templateUrl : 'home.html',
    controller  : 'Logincontroller',
    controllerAs:'vm'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'Logincontroller',
    controllerAs:'vm'
 })
 .when('/individualforum', {
	 templateUrl: 'html/IndividualForum.html', 
	controller: 'commentcontroller'
			   })
 
 .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'Blogcontroller'
 })
 
 .when('/forum', {
    templateUrl : 'html/forum.html',
    controller  : 'Forumcontroller'
 })
 .when('/friend', {
    templateUrl : 'html/friend.html',
    controller  : 'alluserctrl'
 })
 .when('/job', {
    templateUrl : 'html/job.html',
    controller  : 'Jobcontroller'
 })
 
 .when('/chat', {
    templateUrl : 'html/chat.html',
    controller  : 'chatController'
 })
 .when('/myprofile', {
    templateUrl : 'html/UserProfile.html',
    controller  : 'userctrl'
 })
 
 .when("/myfriends",{
    	templateUrl: "html/MyFriends.html",
    	controller: "myfriendctrl"
    })
    .when("/newrequests",{
    	templateUrl: "html/newrequests.html",
    	controller: "myfriendctrl"
    })

  .otherwise({redirectTo: '/'});
});
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
// keep user logged in after page refresh
$rootScope.globals = $cookieStore.get('globals') || {};
if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
}
$rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in and trying to access a restricted page
    var restrictedPage = $.inArray($location.path(), ['/login', '/register','/home']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restrictedPage && !loggedIn) {
        $location.path('/login');
    }
});
}


