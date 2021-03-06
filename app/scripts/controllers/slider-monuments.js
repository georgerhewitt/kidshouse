'use strict';

var hsSliderMouments = angular.module('hsSliderMouments', []);

hsSliderMouments.controller('SliderMoumentsCtrl', ['$scope', function($scope){
  $scope.slides =[
    {
      image: 'images/explore/monuments/tejanos1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.QUESTION', align: 'question--right', class: 'active',
      'answers':[
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.ANSWER', type:'correct'},
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEJANOMONUMENT.WRONG1', type:'wrong'}
      ],
      'images':[
        {image: 'images/explore/monuments/tejanos1.jpg', class: 'active'},
        {image: 'images/explore/monuments/tejanos2.jpg', class: ''},
        {image: 'images/explore/monuments/tejanos3.jpg', class: ''}
      ]
    },
    {
      image: 'images/explore/monuments/cowboy1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.QUESTION', align: 'question--left', class: '',
  'answers':[
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.WRONG', type:'wrong'},
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.WRONG1', type:'wrong'},
        { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCOWBOY.ANSWER', type:'correct'}
      ],
      'images':[
        {image: 'images/explore/monuments/cowboy1.jpg', class: 'active'},
        {image: 'images/explore/monuments/cowboy2.jpg', class: ''},
        {image: 'images/explore/monuments/cowboy3.jpg', class: ''}
      ]
    },
    {
      image: 'images/explore/monuments/cornerstone1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.QUESTION', align: 'question--right', class: '',
      'answers':[
            { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.WRONG', type:'wrong'},
            { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.ANSWER', type:'correct'},
            { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.CORNERSTONE.WRONG1', type:'wrong'}
          ],
      'images':[
              {image: 'images/explore/monuments/cornerstone1.jpg', class: 'active'},
              {image: 'images/explore/monuments/cornerstone2.jpg', class: ''}
            ]
          },
    {image: 'images/explore/monuments/goddess1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.QUESTION', align: 'question--left', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.GODDESS.WRONG1', type:'wrong'}
        ],
    'images':[
            {image: 'images/explore/monuments/goddess1.jpg', class: 'active'},
            {image: 'images/explore/monuments/goddess2.jpg', class: ''},
            {image: 'images/explore/monuments/goddess3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/alamo1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.QUESTION', align: 'question--right', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.WRONG1', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.ALAMO.ANSWER', type:'correct'}
        ],
    'images':[
            {image: 'images/explore/monuments/alamo1.jpg', class: 'active'},
            {image: 'images/explore/monuments/alamo2.jpg', class: ''},
            {image: 'images/explore/monuments/alamo3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/hiker1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.QUESTION', align: 'question--left', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.HIKER.WRONG1', type:'wrong'}
        ],
    'images':[
            {image: 'images/explore/monuments/hiker1.jpg', class: 'active'},
            {image: 'images/explore/monuments/hiker2.jpg', class: ''},
            {image: 'images/explore/monuments/hiker3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/woman1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.QUESTION', align: 'question--right', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.PIONEERWOMEN.WRONG1', type:'wrong'}
        ],
    'images':[
            {image: 'images/explore/monuments/woman1.jpg', class: 'active'},
            {image: 'images/explore/monuments/woman2.jpg', class: ''},
            {image: 'images/explore/monuments/woman3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/liberty1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.QUESTION', align: 'question--left', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.LIBERTYREPLICA.WRONG1', type:'wrong'},
        ],
    'images':[
            {image: 'images/explore/monuments/liberty1.jpg', class: 'active'},
            {image: 'images/explore/monuments/liberty2.jpg', class: ''},
            {image: 'images/explore/monuments/liberty3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/rangers1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.QUESTION', align: 'question--right', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.WRONG1', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASRANGERS.ANSWER', type:'correct'}
        ],
    'images':[
            {image: 'images/explore/monuments/rangers1.jpg', class: 'active'},
            {image: 'images/explore/monuments/rangers2.jpg', class: ''},
            {image: 'images/explore/monuments/rangers3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/children1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.QUESTION', align: 'question--left', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.TEXASCHILDREN.WRONG1', type:'wrong'},
        ],
    'images':[
            {image: 'images/explore/monuments/children1.jpg', class: 'active'},
            {image: 'images/explore/monuments/children2.jpg', class: ''},
            {image: 'images/explore/monuments/children3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/fountain1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.QUESTION', align: 'question--right', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.WRONG1', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.FOUNTAIN.ANSWER', type:'correct'}
        ],
    'images':[
            {image: 'images/explore/monuments/fountain1.jpg', class: 'active'},
            {image: 'images/explore/monuments/fountain2.jpg', class: ''},
            {image: 'images/explore/monuments/fountain3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/veterans1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.QUESTION',  align: 'question--left', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.WORLDWARII.WRONG1', type:'wrong'},
        ],
    'images':[
            {image: 'images/explore/monuments/veterans1.jpg', class: 'active'},
            {image: 'images/explore/monuments/veterans2.jpg', class: ''},
            {image: 'images/explore/monuments/veterans3.jpg', class: ''}
          ]
        },
    {image: 'images/explore/monuments/vietnam1.jpg', title: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.TITLE', caption: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.CAPTION', description: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.P', question: 'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.QUESTION', align: 'question--right', class: '',
    'answers':[
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.ANSWER', type:'correct'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.WRONG', type:'wrong'},
          { answer:'EXPLOREPAGE.CAPITOL_MONUMENTS_STATUES.VIETNAM.WRONG1', type:'wrong'},
        ],
    'images':[
            {image: 'images/explore/monuments/vietnam1.jpg', class: 'active'},
            {image: 'images/explore/monuments/vietnam2.jpg', class: ''},
            {image: 'images/explore/monuments/vietnam3.jpg', class: ''}
          ]
        },
  ];
}]);

hsSliderMouments.directive('hsSliderMouments', function(){
  return{
    replace: true,
    restrict: 'A',
    scope: {
      index: '@'
    },

    controller: 'SliderMoumentsCtrl',
     templateUrl: 'views/templates/monumentslider.tpl.html'
    //template: '<h1> YES </h1>'

  };
});
