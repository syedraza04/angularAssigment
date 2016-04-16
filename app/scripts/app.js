'use strict';
angular.module('copyExample', [])
   .controller('ExampleController', ['$scope', function($scope) {
     $scope.master= {};
	 $scope.update = function(user) {
     $scope.master= angular.copy(user);
	 };
}]);
   
   
   
