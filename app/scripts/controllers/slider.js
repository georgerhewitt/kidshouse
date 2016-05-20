'use strict';

var slider = angular.module('slider',[]);

slider.controller('GoddessLibertyCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/goddessliberty/goddesslibertyx392.jpg', description: 'EXPLOREPAGE.GODDESS.P', class: 'active'},
        {image: 'images/explore/goddessliberty/goddessliberty1x392.jpg', description: 'EXPLOREPAGE.GODDESS.P1', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty2x392.jpg', description: 'EXPLOREPAGE.GODDESS.P2', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty3x392.jpg', description: 'EXPLOREPAGE.GODDESS.P3', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty4x392.jpg', description: 'EXPLOREPAGE.GODDESS.P4', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty5x392.jpg', description: 'EXPLOREPAGE.GODDESS.P5', class: ''}
    ];
}]);
 // page slider 812x392
slider.directive('hsSlider', function(){
        return{
          restrict: 'A',
          scope: {
            index: '@'
          },
          controller: 'GoddessLibertyCtrl',
           templateUrl: 'views/templates/imageslider-explore-capitol.tpl.html'
        };
});
slider.controller('RotundaCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/rotunda/rotunda.jpg', description: 'EXPLOREPAGE.ROTUNDA.P', class: 'active'},
        {image: 'images/explore/rotunda/rotunda1.jpg', description: 'EXPLOREPAGE.ROTUNDA.P1', class: ''},
        {image: 'images/explore/rotunda/rotunda2.jpg', description: 'EXPLOREPAGE.ROTUNDA.P2', class: ''},
        {image: 'images/explore/rotunda/rotunda3.jpg', description: 'EXPLOREPAGE.ROTUNDA.P3', class: ''},
        {image: 'images/explore/rotunda/rotunda4.jpg', description: 'EXPLOREPAGE.ROTUNDA.P4', class: ''},
        {image: 'images/explore/rotunda/rotunda5.jpg', description: 'EXPLOREPAGE.ROTUNDA.P5', class: ''}
    ];
}]);
 // page slider 812x392
slider.directive('hsRotundaSlider', function(){
        return{
          restrict: 'A',
          scope: {
            index: '@'
          },
          controller: 'RotundaCtrl',
           templateUrl: 'views/templates/imageslider-explore-capitol.tpl.html'
        };
});
slider.controller('ExploreCapitolCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/capitol/capitol.jpg', description: 'EXPLOREPAGE.CAPITOL.P', class: 'active'},
        {image: 'images/explore/capitol/capitol1.jpg', description: 'EXPLOREPAGE.CAPITOL.P1', class: ''},
        // {image: 'images/explore/capitol/capitol2.jpg', description: 'EXPLOREPAGE.CAPITOL.P2', class: ''},
        // {image: 'images/explore/capitol/capitol3.jpg', description: 'EXPLOREPAGE.CAPITOL.P3', class: ''},
        // {image: 'images/explore/capitol/capitol4.jpg', description: 'EXPLOREPAGE.CAPITOL.P4', class: ''},
        // {image: 'images/explore/capitol/capitol5.jpg', description: 'EXPLOREPAGE.CAPITOL.P5', class: ''},
        // {image: 'images/explore/capitol/capitol6.jpg', description: 'EXPLOREPAGE.CAPITOL.P6', class: ''},
        {image: 'images/explore/capitol/capitol7.jpg', description: 'EXPLOREPAGE.CAPITOL.P1', class: ''},
        {image: 'images/explore/capitol/capitol8.jpg', description: 'EXPLOREPAGE.CAPITOL.P1', class: ''},
        // {image: 'images/explore/capitol/capitol9.jpg', description: 'EXPLOREPAGE.CAPITOL.P9', class: ''},
        {image: 'images/explore/capitol/capitol10.jpg', description: 'EXPLOREPAGE.CAPITOL.P12', class: ''},
        // {image: 'images/explore/capitol/capitol11.jpg', description: 'EXPLOREPAGE.CAPITOL.P12', class: ''}
    ];
  }]);
  // page slider 812x392
 slider.directive('hsExploreCapitolSlider', function(){
         return{
           restrict: 'A',
           scope: {
             index: '@'
           },
           controller: 'ExploreCapitolCtrl',
            templateUrl: 'views/templates/imageslider-explore-capitol.tpl.html'
         };
       });

slider.controller('HouseCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/house/house.jpg', description: 'EXPLOREPAGE.HOUSE.P', class: 'active'},
        {image: 'images/explore/house/house1.jpg', description: 'EXPLOREPAGE.HOUSE.P1', class: ''},
        {image: 'images/explore/house/house2.jpg', description: 'EXPLOREPAGE.HOUSE.P2', class: ''},
        {image: 'images/explore/house/house3.jpg', description: 'EXPLOREPAGE.HOUSE.P3', class: ''}
    ];
  }]);
// page slider 812x392
slider.directive('hsHouseSlider', function(){
       return{
         restrict: 'A',
         scope: {
           index: '@'
         },
         controller: 'HouseCtrl',
          templateUrl: 'views/templates/imageslider-explore-capitol.tpl.html'
       };
});
slider.controller('SenateCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/senate/senate.jpg', description: 'EXPLOREPAGE.SENATE.P', class: 'active'},
        {image: 'images/explore/senate/senate1.jpg', description: 'EXPLOREPAGE.SENATE.P1', class: ''},
        {image: 'images/explore/senate/senate2.jpg', description: 'EXPLOREPAGE.SENATE.P2', class: ''},
        {image: 'images/explore/senate/senate3.jpg', description: 'EXPLOREPAGE.SENATE.P3', class: ''},
        {image: 'images/explore/senate/senate4.jpg', description: 'EXPLOREPAGE.SENATE.P4', class: ''},
    ];
  }]);
// page slider 812x392
slider.directive('hsSenateSlider', function(){
       return{
         restrict: 'A',
         scope: {
           index: '@'
         },
         controller: 'SenateCtrl',
          templateUrl: 'views/templates/imageslider-explore-capitol.tpl.html'
       };
});
