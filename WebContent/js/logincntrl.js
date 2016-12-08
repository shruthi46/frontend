console.log("login");
var app=angular.module('lapp',[]);
app.controller('Logincontroller', Logincontroller);

    Logincontroller.$inject = ['$location',  'AuthenticationService','$rootScope'];
 
    function Logincontroller($location, AuthenticationService,$rootScope) {
	 console.log("login controller")
        var vm = this;
 
        vm.login = login;
        vm.logout = logout;
 
        function login() {
           
            console.log("login func")
             AuthenticationService.Login(vm.username, vm.password, function (response) {	 
                if (response.success) {
               console.log("setcred")
               $rootScope.username=vm.username;
              $rootScope.islogged=true;
                	AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                  $rootScope.islogged=true;
                	
                } else {
                	console.log("error")
                  //  FlashService.Error(response.message);
                	
                    alert("error")
                }
            });
        };
        function logout(){
        	console.log("logout")
        	AuthenticationService.Logout(function(response){
        		if(response.success){
        			AuthenticationService.ClearCredentials();
        			$location.path('#/');
        			$rootScope.islogged=false;
        			
        		}else{
        			alert("error")
        		}
        	})
        }
    }