'use strict';

/**
 * @ngdoc function
 * @name yokid2App.controller:HouseapiCtrl
 * @description
 * # HouseapiCtrl
 * Controller of the yokid2App
 */
angular.module('kidshouse')
    .controller('HouseapiCtrl', ['$scope', '$http', function ($scope, $http) {

  	//$scope.myPromise = $http.get('http://search.granicus.com/api/tlchouse.granicus.com/?q=folder_id:57').success(function(data){
  	$scope.myPromise = $http.get('http://www.test.house.state.tx.us/video-audio/member-media/index-table.php').success(function(data){
		 $scope.members = data;
 		 $scope.predicate = '-date';

  	});

  }]);
