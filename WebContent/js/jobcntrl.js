var app = angular.module('', []);
app.controller('Jobcontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8060/BackEnd';

	$scope.getAllJobs = function() {
		console.log("get all jobs")
		$http({
			method : 'GET',
			url : BASE_URL + '/job'
		}).success(function(data, status, headers, config) {
			$scope.blogs = data;
			// alert(data);
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	$scope.submit = function() {
		console.log("create job")

		$scope.job = {
			id : $scope.id,
			title : $scope.title,
			userid : $scope.userid,
			company : $scope.company,
			jobdetails : $scope.jobdetails,
			lastdate : $scope.lastdate,
			doc : $scope.doc,
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createjob',
			data : $scope.blog
		}).success(function(data, status, headers, config) {
			$scope.id = '';
			$scope.title = '';
			$scope.userid = '';
			$scope.doc = '';
			$scope.company = '';
			$scope.getAllJobs();
		}).error(function(data, status, headers, config) {
			alert("error");
		});
	};
	$scope.deletejob = function(id) {
		$http({
			method : 'DELETE',
			url : BASE_URL + '/deletejob/' + id
		}).success(function(data, status, headers, config) {
			$scope.getAllJobs();
		})
	};
	$scope.editblog = function(id, title, company) {
		$scope.id = id;
		$scope.title = title;
		$scope.company = company;
	}
} ]);