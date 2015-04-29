'use strict';

/**
 * @ngdoc function
 * @name yokid2App.controller:GranicusCtrl
 * @description
 * # GranicusCtrl
 * Controller of the yokid2App
 */

angular.module('kidshouse')
  // .controller('GranicusCtrl', ['$scope', '$http', function ($scope, $http) {

  // 	//http service
  // 	$http.get('http://search.granicus.com/api/tlchouse.granicus.com/?q=folder_id:57').success(function(data){

  // 		 $scope.artists = data.hits.hits;
  // 		 $scope.predicate = '-datetime';

  // 	});

  // }]);

  .controller('GranicusCtrl', ['$scope', '$http', function ($scope, $http) {

  	//http service
  	//$http.get('http://search.granicus.com/api/tlchouse.granicus.com/?q=folder_id:57').success(function(data){
  	//$http.get('http://www.house.state.tx.us/video-audio/member-media/index-table.php').success(function(data){
  	$http.get('http://tlchouse.granicus.com/ViewPublisher.php?view_id=31').success(function(data){
  		//$scope.artists = [];

  		// angular.forEach(data.hits.hits, function(scope){
  		// 	$scope.artists.push(scope);
  		 	//console.log($scope.archives);
  		// });

  		 $scope.artists = data;
  		 //$scope.archives = data;
  		 $scope.predicate = '-datetime';
  		//console.log($scope.artists);

  		//console.log($scope.archives);
  	});

  	//$scope.selectedColumn = 'name';

  //$http({method: 'GET', url: 'http://tlchouse.granicus.com/ViewPublisher.php?view_id=31'})

  }]);