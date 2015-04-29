'use strict';

/**
 * @ngdoc function
 * @name yokid2App.controller:GranicusapiCtrl
 * @description
 * # GranicusapiCtrl
 * Controller of the yokid2App
 */
angular.module('kidshouse')
    .controller('GranicusapiCtrl', ['$scope', '$http', function ($scope, $http) {

  	//$scope.myPromise = $http.get('http://search.granicus.com/api/tlchouse.granicus.com/?q=folder_id:57').success(function(data){
  	$scope.myPromise = $http.get('http://search.granicus.com/api/tlchouse.granicus.com').success(function(data){
		 $scope.artists = data.hits.hits;
 		 $scope.predicate = '-datetime';

  	});

  }]);
