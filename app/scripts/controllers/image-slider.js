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
        {image: 'images/explore/stateseal/seal4.jpg', title: '', description: 'House Chamber', class: ''},
        {image: 'images/explore/stateseal/seal5.jpg', title: '', description: 'Floor of the Rotunda', class: ''},
        {image: 'images/explore/stateseal/seal6.jpg', title: '', description: 'Floor of the Extension', class: ''},
        {image: 'images/explore/stateseal/seal8.jpg', title: '', description: 'Seals on the north side of the Capitol', class: ''},
        {image: 'images/explore/stateseal/seal9.jpg', title: '', description: 'House Chamber Chairs', class: ''}
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
    {image: 'images/discover/slides/house-of-reps3.jpg', title: '', description: 'The House Chamber Walls are adorned with portraits of Stephen F. Austin and Governor James S. Hogg.', class: ''},
    {image: 'images/discover/slides/house-of-reps4.jpg', title: '', description: 'DISCOVERPAGE.THE_TEXAS_HOUSE_OF_REPRESENTATIVES.IMAGES.IMAGE2', class: ''},
    {image: 'images/discover/slides/house-of-reps5.jpg', title: '', description: 'The painted flag of the Battle of San Jacinto.', class: ''},
    {image: 'images/discover/slides/house-of-reps6.jpg', title: '', description: '"Sine Die" is defined as "Without assigning a day for a further meeting or hearing." The latin term refers to legislatures whose sessions come to an end.', class: ''},
    {image: 'images/discover/slides/house-of-reps7.jpg', title: '', description: 'The public gallery surrounds the entire House Chamber.', class: ''},
    {image: 'images/discover/slides/house-of-reps8.jpg', title: '', description: 'The House Christmas Tree is adorned each year by ornaments created in the individual legislative districts.', class: ''}

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
    { title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE1', description: 'EXPLOREPAGE.CITY_AUSTIN.P1', address: 'Pennybacker Bridge, N Capital of Texas Hwy, Austin, TX 78746', class: 'active',
    'images':[
      {image: 'images/explore/city-austin/austin360bridge3.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austin360bridge1.jpg', class: ''},
      {image: 'images/explore/city-austin/austin360bridge2.jpg', class: ''},
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE2', description: 'EXPLOREPAGE.CITY_AUSTIN.P2', address: '2201 Barton Springs Rd, Austin, TX 78746', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbartonsprings1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinbartonsprings2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinbartonsprings3.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE3', description: 'EXPLOREPAGE.CITY_AUSTIN.P3', address: '100 S Congress Ave Austin, TX 78701', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbatbridge1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinbatbridge2.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE4', description: 'EXPLOREPAGE.CITY_AUSTIN.P4', address: '1800 Congress Ave, Austin, TX 78701', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinbullockmuseum1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinbullockmuseum2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinbullockmuseum3.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE5', description: 'EXPLOREPAGE.CITY_AUSTIN.P5', address: 'Congress Ave Austin, TX 78701', class: '',
    'images':[
      {image: 'images/explore/city-austin/austindowntown1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austindowntown2.jpg', class: ''},
      {image: 'images/explore/city-austin/austindowntown3.jpg', class: ''},
      {image: 'images/explore/city-austin/austindowntown4.jpg', class: ''},
      {image: 'images/explore/city-austin/austindowntown5.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE6', description: 'EXPLOREPAGE.CITY_AUSTIN.P6', address: '1010 Colorado St, Austin, TX 78701', class: '',
    'images':[
      {image: 'images/explore/city-austin/austingovernorsmansion1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austingovernorsmansion2.jpg', class: ''},
      {image: 'images/explore/city-austin/austingovernorsmansion3.jpg', class: ''},
      {image: 'images/explore/city-austin/austingovernorsmansion4.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE7', description: 'EXPLOREPAGE.CITY_AUSTIN.P7', address: '2313 Red River St, Austin, TX 78705', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinlbjlibrary1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinlbjlibrary2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinlbjlibrary3.jpg', class: ''},
      {image: 'images/explore/city-austin/austinlbjlibrary4.jpg', class: ''},
      {image: 'images/explore/city-austin/austinlbjlibrary5.jpg', class: ''},
      {image: 'images/explore/city-austin/austinlbjlibrary6.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE8', description: 'EXPLOREPAGE.CITY_AUSTIN.P8', address: '3800 Mt. Bonnell Rd Austin, TX 78731', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinmtbonnell1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinmtbonnell2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinmtbonnell5.jpg', class: ''},
      {image: 'images/explore/city-austin/austinmtbonnell4.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE9', description: 'EXPLOREPAGE.CITY_AUSTIN.P9', address: 'Lady Bird Lake in Downtown Austin, Texas', class: '',
    'images':[
      {image: 'images/explore/city-austin/austintownlake1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austintownlake2.jpg', class: ''},
      {image: 'images/explore/city-austin/austintownlake3.jpg', class: ''},
      {image: 'images/explore/city-austin/austintownlake4.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE10', description: 'EXPLOREPAGE.CITY_AUSTIN.P10', address: '112 E 11th St, Austin, TX 78701', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinvisitorscenter1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinvisitorscenter2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinvisitorscenter3.jpg', class: ''}
    ]
    },
    {title: 'EXPLOREPAGE.CITY_AUSTIN.TITLE11', description: 'EXPLOREPAGE.CITY_AUSTIN.P11', address: '4801 La Crosse Ave, Austin, TX 78739', class: '',
    'images':[
      {image: 'images/explore/city-austin/austinwildflowercenter1.jpg', class: 'active'},
      {image: 'images/explore/city-austin/austinwildflowercenter2.jpg', class: ''},
      {image: 'images/explore/city-austin/austinwildflowercenter3.jpg', class: ''}
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
