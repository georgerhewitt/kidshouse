'use strict';

/**
 *
 * Main module of the application.
 */
angular
  .module('kidshouse', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'cgBusy',
    'slider',
    'hsImageSlider', // images-slider.js
    'memoryGameApp',  //flip-cards.js
    'wordSearchPuzzle',
    'translateApp',   // word-search-puzzle.js
    'hsSliderMouments',
    'hsSliderSymbols'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
        })
        .state('glossary', {
        url: '/glossary',
        name: 'glossary',
        templateUrl: 'views/glossary.html'
        })
        .state('get-involved', {
        url: '/get-involved',
        name: 'get-involved',
        templateUrl: 'views/get-involved.html'
        })
        .state('resources', {
        url: '/resources',
        name: 'resources',
        templateUrl: 'views/resources.html'
        })
        .state('site-map', {
        url: '/site-map',
        name: 'site-map',
        templateUrl: 'views/site-map.html'
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
        .state('senate', {
        url: '/discover/senate',
        name: 'senate',
        templateUrl : 'views/discover/senate.html'
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
        .state('texas-capitol.rotunda', {
            url: '/rotunda',
            name: 'texas-capitolrotunda',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/rotunda.html'
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
        .state('texas-capitol.capitol', {
            url: '/capitol',
            name: 'texas-capitolcapitol',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/capitol.html'
                  }
              }
        })
        .state('texas-capitol.goddess', {
            url: '/goddess',
            name: 'texas-capitolgoddess',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/goddess.html'
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
        .state('capitol-monuments-statues.tejano', {
            url: '/tejano',
            name: 'capitol-monuments-statuestejano',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/tejano.html'
                  }
              }
        })
        .state('capitol-monuments-statues.texascowboy', {
            url: '/texascowboy',
            name: 'capitol-monuments-statuestexascowboy',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/texascowboy.html'
                  }
              }
        })
        .state('capitol-monuments-statues.volunteerfiremen', {
            url: '/volunteerfiremen',
            name: 'capitol-monuments-statuesvolunteerfiremen',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/volunteerfiremen.html'
                  }
              }
        })
        .state('capitol-monuments-statues.confederatesoldiers', {
            url: '/confederatesoldiers',
            name: 'capitol-monuments-statuesconfederatesoldiers',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/confederatesoldiers.html'
                  }
              }
        })
        .state('capitol-monuments-statues.texasrangers', {
            url: '/texasrangers',
            name: 'capitol-monuments-statuestexasrangers',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/texasrangers.html'
                  }
              }
        })
        .state('capitol-monuments-statues.liberty', {
            url: '/liberty',
            name: 'capitol-monuments-statuesliberty',
              views :{
                  'sub' : {
                    templateUrl: 'views/explore/partials/monuments/liberty.html'
                  }
              }
        })
        .state('rotunda', {
          url: '/explore/rotunda',
          name: 'rotunda',
          templateUrl : 'views/explore/rotunda.html'
        })
        .state('state-seal', {
          url: '/explore/state-seal',
          name: 'state-seal',
          templateUrl : 'views/explore/state-seal.html'
        })
        .state('state-flag', {
          url: '/explore/state-flag',
          name: 'state-flag',
          templateUrl : 'views/explore/state-flag.html'
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
