'use strict';

var hsSliderSymbols = angular.module('hsSliderSymbols', []);

hsSliderSymbols.controller('SliderSymbolsCtrl', ['$scope', function($scope){
  $scope.slides =[
    {image: 'images/explore/state-symbols/mockingbird.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.P', question: 'EXPLOREPAGE.STATE_SYMBOLS.BIRD.QUESTION', align: 'question--right', class: 'active',
    'answers':[
      { answer:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.WRONG', type:'wrong'},
      { answer:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.ANSWER', type:'correct'},
      { answer:'EXPLOREPAGE.STATE_SYMBOLS.BIRD.WRONG1', type:'wrong'}
    ],
   },
    {image: 'images/explore/state-symbols/bluebonnet.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.QUESTION', align: 'question--left', class: '',
    'answers':[
      { answer:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.WRONG1', type:'wrong'},
      { answer:'EXPLOREPAGE.STATE_SYMBOLS.FLOWER.ANSWER', type:'correct'}
    ],
   },
    {image: 'images/explore/state-symbols/tree.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.TREE.QUESTION', align: 'question--right', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.TREE.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.TREE.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.TREE.WRONG1', type:'wrong'}
    ],
   },
    {image: 'images/explore/state-symbols/chili.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.DISH.QUESTION', align: 'question--left', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.DISH.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.DISH.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.DISH.WRONG1', type:'wrong'},
    ],
   },
    {image: 'images/explore/state-symbols/grapefruit.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.QUESTION', align: 'question--right', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.WRONG1', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.FRUIT.ANSWER', type:'correct'}
    ],
   },
    {image: 'images/explore/state-symbols/monarch.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.INSECT.QUESTION', align: 'question--left', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.INSECT.WRONG1', type:'wrong'},

    ],
   },
    {image: 'images/explore/state-symbols/armadillo.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.QUESTION', align: 'question--right', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.SMAMMAL.WRONG1', type:'wrong'}
    ],
   },
    {image: 'images/explore/state-symbols/longhorn.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.QUESTION', align: 'question--left', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.LMANNAL.WRONG1', type:'wrong'}
    ],
   },
    {image: 'images/explore/state-symbols/peppers.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.QUESTION', align: 'question--right', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.WRONG1', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PEPPER.ANSWER', type:'correct'},
    ],
   },
    {image: 'images/explore/state-symbols/pie.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PIE.QUESTION', align: 'question--left', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PIE.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PIE.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PIE.WRONG1', type:'wrong'}
    ],
   },
    {image: 'images/explore/state-symbols/pear.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.PLANT.QUESTION', align: 'question--right', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.WRONG1', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.PLANT.ANSWER', type:'correct'},
    ],
   },
    {image: 'images/explore/state-symbols/lizard.jpg', title: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.TITLE', subtitle: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.SUBTITLE', description: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.P',  question: 'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.QUESTION', align: 'question--left', class: '',
    'answers':[
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.WRONG1', type:'wrong'},
        { answer:'EXPLOREPAGE.STATE_SYMBOLS.REPTILE.ANSWER', type:'correct'},
    ],
   },
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
