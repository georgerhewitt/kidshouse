'use strict';

var hsNavClassToggle = angular.module('hsNavClassToggle',[]);

hsNavClassToggle.controller('NavClassToggleCtrl', ['$scope', function ($scope) {
      $scope.classAnimate = 'red';
      $scope.changeClass = function(value){
        // if ($scope.classAnimate === 'red'){
        // $scope.classAnimate = 'blue';
        // }else {
        // $scope.classAnimate = 'red';
        // }
      $scope.classAnimate = value;
    };
}]);
