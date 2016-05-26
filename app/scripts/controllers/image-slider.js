'use strict';

var hsImageSlider = angular.module('hsImageSlider', []);
//six-flags-of-texas
hsImageSlider.controller('FlagCtrl', ['$scope', function($scope){
  $scope.slides =[
    {image: 'images/discover/flags/texas-under-spain.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE1', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P1', class: 'active'},
    {image: 'images/discover/flags/texas-under-france.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE2', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P2', class: ''},
    {image: 'images/discover/flags/texas-under-mexico.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE3', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P3', class: ''},
    {image: 'images/discover/flags/texas-under-republic.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE4', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P4', class: ''},
    {image: 'images/discover/flags/texas-under-confederacy.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE5', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P5', class: ''},
    {image: 'images/discover/flags/texas-under-usa.jpg', title: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.TITLE6', description: 'DISCOVERPAGE.SIX_FLAGS_OF_TEXAS.P6', class: ''},
  ];
}]);
 // page slider 812x392
hsImageSlider.directive('hsSliderFlags', function(){
  return{
    restrict: 'A',
    scope: {
      index: '@'
    },
    controller: 'FlagCtrl',
     templateUrl: 'views/templates/imagesliderflags.tpl.html'
  };
});
//state-seal
hsImageSlider.controller('StateSealCtrl', ['$scope', function ($scope) {
    $scope.slides = [
        {image: 'images/explore/stateseal/seal1.jpg', title: '', description: 'Members Lounge', class: 'active'},
        {image: 'images/explore/stateseal/seal2.jpg', title: '', description: 'Outdoor Rotunda', class: ''},
        {image: 'images/explore/stateseal/seal3.jpg', title: '', description: 'Capitol Gate', class: ''},
        {image: 'images/explore/stateseal/seal4.jpg', title: '', description: 'House Chamber', class: ''}
    ];
  }]);
   // page slider 812x392
hsImageSlider.directive('hsStateSealSlider', function(){
    return{
      restrict: 'A',
      scope: {
        index: '@'
      },
      controller: 'StateSealCtrl',
       templateUrl: 'views/templates/imagesliderseal.tpl.html'
    };

  });
// house-of-reps
hsImageSlider.controller('SliderHouseCtrl', ['$scope', function($scope){
  $scope.slides =[
    {image: 'images/discover/slides/house-of-reps.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE', class: 'active'},
    {image: 'images/discover/slides/house-of-reps1.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE1', class: ''},
    {image: 'images/discover/slides/house-of-reps2.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE2', class: ''},
    {image: 'images/discover/slides/house-of-reps4.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE4', class: ''},
    {image: 'images/discover/slides/house-of-reps5.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE5', class: ''}
  ];
}]);
 // page slider 576x384
hsImageSlider.directive('hsSliderHouse', function(){
  return{
    replace: true,
    restrict: 'A',
    scope: {
      index: '@'
    },
    controller: 'SliderHouseCtrl',
    templateUrl: 'views/templates/imageslider.tpl.html'

  };
});
// city-of-austin
hsImageSlider.controller('ExploreAustinCtrl', ['$scope', function($scope){
  $scope.slides =[
    { title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE1', description: 'EXPLOREPAGE.CITY_AUSTIN.P1', class: 'active',
    'images':[
      {image: 'images/explore/city-austin/austin360bridge.jpg', class: 'active'},
      {image: 'images/explore/city-austin/photo-needed.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE2', description: 'EXPLOREPAGE.CITY_AUSTIN.P2', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbartonsprings1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinbartonsprings2.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE3', description: 'EXPLOREPAGE.CITY_AUSTIN.P3', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbatbridge.jpg', class: 'active'},
      {image: 'images/explore/city-austin/photo-needed.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE4', description: 'EXPLOREPAGE.CITY_AUSTIN.P4', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbullockmuseum1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinbullockmuseum2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinbullockmuseum3.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE5', description: 'EXPLOREPAGE.CITY_AUSTIN.P5', class: '',
    'images':[
      {image: 'images/explore/city-austin/austindowntown1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austindowntown3.jpg', class: ''},
      {image: 'images/explore/city-austin/austindowntown4.jpg', class: ''},
      {image: 'images/explore/city-austin/austindowntown5.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE6', description: 'EXPLOREPAGE.CITY_AUSTIN.P6', class: '',
    'images':[
      {image: 'images/explore/city-austin/austingovernorsmansion1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austingovernorsmansion2.jpg', class: ''},
      {image: 'images/explore/city-austin/austingovernorsmansion3.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE7', description: 'EXPLOREPAGE.CITY_AUSTIN.P7', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinlbjlibrary1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinlbjlibrary2.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE8', description: 'EXPLOREPAGE.CITY_AUSTIN.P8', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinmtbonnell.jpg', class: 'active'},
      {image: 'images/explore/city-austin/photo-needed.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE9', description: 'EXPLOREPAGE.CITY_AUSTIN.P9', class: '',
    'images':[
      {image: 'images/explore/city-austin/austintownlake1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austintownlake2.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE10', description: 'EXPLOREPAGE.CITY_AUSTIN.P10', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinvisitorscenter.jpg', class: 'active'},
      {image: 'images/explore/city-austin/photo-needed.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE11', description: 'EXPLOREPAGE.CITY_AUSTIN.P11', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinwildflowercenter1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinwildflowercenter2.jpg', class: ''}
    ]
    }
  ];

}]);
 // page slider 500x342
hsImageSlider.directive('hsImageSliderAustin', function(){
  return{
    replace: true,
    restrict: 'A',
    scope: {
      index: '@'
    },
    controller: 'ExploreAustinCtrl',
     templateUrl: 'views/templates/imageslider-explore-austin.tpl.html'
  };
});
