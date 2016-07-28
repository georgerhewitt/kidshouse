'use strict';

var slider = angular.module('slider',[]);

slider.controller('GoddessLibertyCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/goddessliberty/goddessliberty5x392.jpg', description: 'EXPLOREPAGE.GODDESS.P', class: 'active'},
        {image: 'images/explore/goddessliberty/goddessliberty2x392.jpg', description: 'EXPLOREPAGE.GODDESS.P1', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty3x392.jpg', description: 'EXPLOREPAGE.GODDESS.P2', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty4x392.jpg', description: 'EXPLOREPAGE.GODDESS.P3', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty1x392.jpg', description: 'EXPLOREPAGE.GODDESS.P4', class: ''}
    ];
    $scope.name = 'Goddess';
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
    $scope.name = 'Rotunda';
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
        {image: 'images/explore/capitol/capitolentrance.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE1', description: 'EXPLOREPAGE.CAPITOL.P1', class: 'active'},
        {image: 'images/explore/capitol/treasury1.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE2', description: 'EXPLOREPAGE.CAPITOL.P2', class: ''},
        {image: 'images/explore/capitol/treasury2.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE3', description: 'EXPLOREPAGE.CAPITOL.P3', class: ''},
        {image: 'images/explore/capitol/capitol.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE4', description: 'EXPLOREPAGE.CAPITOL.P4', class: ''},
        {image: 'images/explore/capitol/capitol10.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE5', description: 'EXPLOREPAGE.CAPITOL.P5', class: ''},
        {image: 'images/explore/capitol/capitol7.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE6', description: 'EXPLOREPAGE.CAPITOL.P6', class: ''},
        {image: 'images/explore/capitol/capitol8.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE7', description: 'EXPLOREPAGE.CAPITOL.P7', class: ''}
    ];
    $scope.name = 'Capitol';
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
        {image: 'images/explore/house/house1.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P1', class: 'active'},
        {image: 'images/explore/house/house2.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P2', class: ''},
        {image: 'images/explore/house/house3.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P3', class: ''},
        {image: 'images/explore/house/house4.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P4', class: ''},
        {image: 'images/explore/house/house5.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P5', class: ''},
        {image: 'images/explore/house/agmuseum.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE3', description: 'EXPLOREPAGE.HOUSE.P7', class: ''},
        {image: 'images/explore/house/agmuseum1.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE3', description: 'EXPLOREPAGE.HOUSE.P7', class: ''}
    ];
    $scope.name = 'House_';
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
        {image: 'images/explore/senate/senate.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P', class: 'active'},
        {image: 'images/explore/senate/senate1.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P1', class: ''},
        {image: 'images/explore/senate/senate2.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P2', class: ''},
        {image: 'images/explore/senate/senate3.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P3', class: ''},
        {image: 'images/explore/senate/senate4.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P4', class: ''},
        {image: 'images/explore/senate/senate5.jpg', title: 'EXPLOREPAGE.SENATE.TITLE', description: 'EXPLOREPAGE.SENATE.P5', class: ''},
        {image: 'images/explore/senate/secofstate1.jpg', title: 'Secretary of State Texas', description: 'EXPLOREPAGE.SENATE.P6', class: ''},
        {image: 'images/explore/senate/secofstate2.jpg', title: 'Secretary of State Texas', description: 'EXPLOREPAGE.SENATE.P6', class: ''},
    ];
    $scope.name = 'Senate';
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
