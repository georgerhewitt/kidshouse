'use strict';

/**
 *
 * Main module of the application.
 */
var kidshouse = angular
  .module('kidshouse', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'cgBusy',
    'memoryGameApp',  //flip-cards.js
    'wordSearchPuzzle'   // word-search-puzzle.js
  ])
  .config(function($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
        })

        // discover section 
        .state('discover', {
        url: '/discover/',
        name: 'discover',
        templateUrl: 'views/discover/discover.html'
        })
  
        .state('discover.sub', {
            url: '/sub',
            name: 'discoversub',
              views :{
                  'sub' : {
                    templateUrl: 'views/discover/partials/sub.html'
                  }
              }
        })
        .state('discover.sub2', {
            url: '/sub2',
            name: 'discoversub2',
              views :{
                  'sub' : {
                    templateUrl: 'views/discover/partials/sub2.html'
                  }
              }
        })
        .state('houseofrepresentatives', {
        url: '/discover/house-of-representatives',
        name: 'houseofrepresentatives',
        templateUrl : 'views/discover/house-of-representatives.html'
        })
        .state('texas-state-government', {
        url: '/discover/texas-state-government',
        name: 'texas-state-government',
        templateUrl : 'views/discover/texas-state-government.html'
        })
        .state('how-a-bill-becomes-law', {
        url: '/discover/how-a-bill-becomes-law',
        name: 'how-a-bill-becomes-law',
        templateUrl : 'views/discover/how-a-bill-becomes-law.html'
        })
        .state('founding-fathers', {
        url: '/discover/founding-fathers',
        name: 'founding-fathers',
        templateUrl : 'views/discover/founding-fathers.html'
        })
        .state('founding-fathers.sub', {
            url: '/sub',
            name: 'founding-fatherssub',
              views :{
                  'sub' : {
                    templateUrl: 'views/discover/partials/sub.html'
                  }
              }
        })
        .state('founding-fathers.sub2', {
            url: '/sub2',
            name: 'founding-fatherssub2',
              views :{
                  'sub' : {
                    templateUrl: 'views/discover/partials/sub2.html'
                  }
              }
        })
        .state('six-flags-of-texas', {
        url: '/discover/six-flags-of-texas',
        name: 'six-flags-of-texas',
        templateUrl : 'views/discover/six-flags-of-texas.html'
        })
        //explore

        .state('explore', {
          url: '/explore',
          name: 'expolre',
          templateUrl: 'views/explore/explore.html'
        })
        .state('texas-capitol', {
          url: '/explore/texas-capitol',
          name: 'texas-capitol',
          templateUrl : 'views/explore/texas-capitol.html'
        })
        .state('texas-capitol.dome', {
            url: '/dome',
            name: 'texas-capitoldome',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/dome.html'
                  }
              }
        })
        .state('texas-capitol.house', {
            url: '/house',
            name: 'texas-capitolhouse',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/house.html'
                  }
              }
        })
        .state('texas-capitol.senate', {
            url: '/senate',
            name: 'texas-capitolsenate',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/senate.html'
                  }
              }
        })
        .state('texas-capitol.main', {
            url: '/main',
            name: 'texas-capitolmain',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/main.html'
                  }
              }
        })
        .state('texas-capitol.top', {
            url: '/top',
            name: 'texas-capitoltop',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/top.html'
                  }
              }
        })
        .state('capitol-grounds', {
          url: '/explore/capitol-grounds',
          name: 'capitol-grounds',
          templateUrl : 'views/explore/capitol-grounds.html'
        })
        .state('capitol-monuments-statues', {
          url: '/explore/capitol-monuments-statues',
          name: 'capitol-monuments-statues',
          templateUrl : 'views/explore/capitol-monuments-statues.html'
        })
        .state('capitol-monuments-statues.sub', {
            url: '/sub',
            name: 'capitol-monuments-statuessub',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/sub.html'
                  }
              }
        })
        .state('state-seal', {
          url: '/explore/state-seal',
          name: 'state-seal',
          templateUrl : 'views/explore/state-seal.html'
        })
        .state('state-symbols', {
          url: '/explore/state-symbols',
          name: 'state-symbols',
          templateUrl : 'views/explore/state-symbols.html'
        })
        .state('city-of-austin', {
          url: '/explore/city-of-austin',
          name: 'city-of-austin',
          templateUrl : 'views/explore/city-of-austin.html'
        })
// Challenge
        .state('challenge', {
          url: '/challenge',
          name: 'challenge',
          templateUrl: 'views/challenge/challenge.html'
        })
        .state('flip-cards', {
          url: '/challenge/flip-cards',
          name: 'flip-cards',
          templateUrl : 'views/challenge/flip-cards.html'
        })
        .state('word-search-puzzle', {
          url: '/challenge/word-search-puzzle',
          name: 'word-search-puzzle',
          templateUrl : 'views/challenge/word-search-puzzle.html'
        })
        .state('texas-government-test', {
          url: '/challenge/texas-government-test',
          name: 'texas-government-test',
          templateUrl : 'views/challenge/texas-government-test.html'
        })
// Granicus
        .state('granicus', {
          url: '/granicus',
          templateUrl: 'views/granicus.html'
        })

        .state('granicusapi', {
          url: '/granicusapi',
          templateUrl: 'views/granicusapi.html'
        })

        .state('slider', {
          url: '/slider',
          templateUrl: 'views/slider.html'
        })

        .state('houseapi', {
          url: '/houseapi',
          templateUrl: 'views/houseapi.html'
        });
        
    });
