'use strict';

var hsSliderSymbols = angular.module('hsSliderSymbols', []);

hsSliderSymbols.controller('SliderSymbolsCtrl', ['$scope', function($scope){
  $scope.slides =[
    {image: 'images/explore/state-symbols/mockingbird.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.P', question: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.WRONG1', class: 'active'},
    {image: 'images/explore/state-symbols/bluebonnet.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/tree.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.TREE.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.TREE.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.TREE.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/chili.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.DISH.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.DISH.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.DISH.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/grapefruit.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/monarch.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/armadillo.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/longhorn.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/peppers.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/pie.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.PIE.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.PIE.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.PIE.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/pear.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.WRONG1', class: ''},
    {image: 'images/explore/state-symbols/lizard.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.QUESTION', answer:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.ANSWER', wrong:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.WRONG', wrong1:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.WRONG1', class: ''}

  ];
}]);

hsSliderSymbols.directive('hsSliderSymbols', function(){
  return{
    replace: true,
    restrict: 'A',
    scope: {
      index: '@'
    },
    controller: 'SliderSymbolsCtrl',
     templateUrl: 'views/templates/symbolslider.tpl.html'

  };
});