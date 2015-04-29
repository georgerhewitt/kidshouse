'use strict';

angular.module('kidshouse')
  .controller('SlideCtrl', function ($scope) {
    $scope.slides = [
        {image: 'images/history800x600.jpg', description: 'image'},
        {image: 'images/get-involved800x600.jpg', description: 'image'},
        {image: 'images/fun-facts800x600.jpg', description: 'image'},
        {image: 'images/state-government800x600.jpg', description: 'image'},
        {image: 'images/teaching-tools800x600.jpg', description: 'image'}
    ];

   $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
  .run(function($rootScope, $location) {
    $rootScope.location = $location;
})
.controller('Slide600Ctrl', function ($scope) {
    $scope.slides = [
        {image: 'images/star600x300.jpg', description: 'image'},
        {image: 'images/floor600x300.jpg', description: 'image'},
        {image: 'images/frount-lawn600x300.jpg', description: 'image'},
    ];

   $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
  .run(function($rootScope, $location) {
    $rootScope.location = $location;
});
