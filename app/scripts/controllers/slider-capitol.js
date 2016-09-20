'use strict';

var slider = angular.module('slider',[]);

slider.controller('GoddessLibertyCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/goddessliberty/goddessliberty1.jpg', description: 'EXPLOREPAGE.GODDESS.P', class: 'active'},
        {image: 'images/explore/goddessliberty/goddessliberty2.jpg', description: 'EXPLOREPAGE.GODDESS.P1', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty3.jpg', description: 'EXPLOREPAGE.GODDESS.P2', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty4.jpg', description: 'EXPLOREPAGE.GODDESS.P3', class: ''},
        {image: 'images/explore/goddessliberty/goddessliberty5.jpg', description: 'EXPLOREPAGE.GODDESS.P4', class: ''}
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
        {image: 'images/explore/capitol/capitolentrance1.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE9', description: 'EXPLOREPAGE.CAPITOL.P9', class: 'active'},
        {image: 'images/explore/capitol/capitolentrance.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE1', description: 'EXPLOREPAGE.CAPITOL.P1', class: ''},
        {image: 'images/explore/capitol/treasury1.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE2', description: 'EXPLOREPAGE.CAPITOL.P2', class: ''},
        {image: 'images/explore/capitol/capitol.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE4', description: 'EXPLOREPAGE.CAPITOL.P4', class: ''},
        {image: 'images/explore/capitol/capitol7.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE6', description: 'EXPLOREPAGE.CAPITOL.P6', class: ''},
        {image: 'images/explore/capitol/capitol8.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE7', description: 'EXPLOREPAGE.CAPITOL.P7', class: ''},
        {image: 'images/explore/capitol/supreme-court3.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE8', description: 'The Latin phrase in the Original Supreme Court courtroom means "as to our fathers May God be to us."', class: ''},
        {image: 'images/explore/capitol/supreme-court.jpg', title: 'EXPLOREPAGE.CAPITOL.TITLE8', description: 'EXPLOREPAGE.CAPITOL.P8', class: ''}
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
        {image: 'images/explore/house/house7.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P6', class: ''},
        {image: 'images/explore/house/house8.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P8', class: ''},
        {image: 'images/explore/house/house9.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P7', class: ''},
        {image: 'images/explore/house/house10.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.TITLE', class: ''},
        {image: 'images/explore/house/house11.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE', description: 'EXPLOREPAGE.HOUSE.P11', class: ''},
        {image: 'images/explore/house/house12.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE4', description: 'EXPLOREPAGE.HOUSE.P12', class: ''},
        {image: 'images/explore/house/agmuseum.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE3', description: 'EXPLOREPAGE.HOUSE.P9', class: ''},
        {image: 'images/explore/house/agmuseum1.jpg', title: 'EXPLOREPAGE.HOUSE.TITLE3', description: 'EXPLOREPAGE.HOUSE.P9', class: ''}
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
        {image: 'images/explore/senate/secofstate.jpg', title: 'EXPLOREPAGE.SENATE.TITLE3', description: 'EXPLOREPAGE.SENATE.P6', class: ''},
        {image: 'images/explore/senate/secofstate1.jpg', title: 'EXPLOREPAGE.SENATE.TITLE3', description: 'EXPLOREPAGE.SENATE.P7', class: ''},
        {image: 'images/explore/senate/secofstate2.jpg', title: 'EXPLOREPAGE.SENATE.TITLE3', description: 'EXPLOREPAGE.SENATE.P8', class: ''},
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
