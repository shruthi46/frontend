var fapp = angular.module('forumApp',[]);
fapp.controller('Forumcontroller', [ '$scope', '$http', function($scope, $http) {
 var BASE_URL = 'http://localhost:8082/BackEnd';
 $scope.getAllForum= function() {
  console.log("get all forum")
  $http({
   method : 'GET',
   url : BASE_URL+'/forum'
  }).success(function(data, status, headers, config) {
   $scope.forums=data;
   //alert(data); 
  }).error(function(data, status, headers, config) {
   alert("Error");
  });
 };
 $scope.submit = function() {
  $scope.forum = { 
	id : $scope.id,	  
   name : $scope.name,
   topic:$scope.topic,
   userid:$scope.userid,
   doc: $scope.doc,
   description:$scope.description
  }
  $http({
   method : 'POST',
   url : BASE_URL + '/createforum',
   data : $scope.forum
  }).success(function(data, status, headers, config) {
   $scope.id='';	  
   $scope.name='';
   $scope.topic='';
   $scope.userid='';
   $scope.doc='';
   $scope.description='';
  }).error(function(data,status,headers,config){
   alert("error");
  });
 };
 $scope.deleteforum=function(id){
  $http({
   method:'DELETE',
  url:BASE_URL+'/deleteforum/'+id
  }).success(function(data,status,headers,config){
   $scope.getAllForum();
  })
 };
 $scope.editforum=function(id,name,topic,description){
	 $scope.id=id;
	 $scope.name=name;
	 $scope.topic=topic;
	 $scope.description=description;
	 }

	 $scope.getforum=function(id){
	 	
	 	console.log("iforum")
	 	$http({
	 		method: "GET",
	 		url:BASE_URL+'/individualforum/'+id,
	 	}).success(function(data,status,headers,config){
	 		console.log("inside the forum")
	 		$location.path('/individualforum');
	 		console.log("after inside the forum")
	 		$rootScope.individualforums=data;
	 		console.log(data)
	 	}).error(function(data, status, headers, config) {
	 		alert("Error");
	 	});
	 }
}]);