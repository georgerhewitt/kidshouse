'use strict';

/**
 * @ngdoc function
 * @name yokid2App.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * Controller of the kidshouse/explore
 */
angular.module('kidshouse')
   //  .controller('ExploreCtrl', ['$scope', '$state', function ($scope, $state) {
  	// $scope.state = $state;
  	.controller('ExploreCtrl', function ($scope){
  		$scope.todos = ['Item1', 'Item2', 'Item3'];
  		console.log($scope);
  		//$scope.page = 'users';
  	}

 );
