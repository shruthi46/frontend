

var mainapp = angular.module('regmyApp',[]);
mainapp.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8060/BackEnd/';

	console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			email: $scope.email,
			password:$scope.password,
			mobile:$scope.mobile,
			address:$scope.address,
			dob:$scope.dob,
			gender:$scope.gender,
			role:$scope.role,
			status:$scope.status,
		
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.email='';
			$scope.password='';
			$scope.mobile='';
			$scope.address='';
			$scope.dob='';
			$scope.gender='';
			$scope.role='';
			$scope.status='';
	
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	
	
	
$scope.currentuser=function(id){
		
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.oneuser=data;
		})
	}
}]);