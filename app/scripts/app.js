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
    'hsSliderSymbols',
    'hsNavClassToggle' //
  ])
  // .run(function($rootScope){
  //   $rootScope.site = '';
  //   $rootScope.logo = '';
  // })
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          name: 'home',

          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state1.html'
            },
            content: {
                templateUrl: 'views/home.html',
                controller: ['$rootScope', function($rootScope) {
                  $rootScope.location = 'home-animate';
                }],
            }
          }
        })
        .state('glossary', {
        url: '/glossary',
        name: 'glossary',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state2.html'
          },
          content: {
            templateUrl: 'views/glossary.html'
          }
        }

        })
        .state('get-involved', {
        url: '/get-involved',
        name: 'get-involved',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state2.html'
          },
          content: {
            templateUrl: 'views/get-involved.html'
          }
        }
        })
        .state('resources', {
        url: '/resources',
        name: 'resources',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state2.html'
          },
          content: {
            templateUrl: 'views/resources.html'
          }
        }
        })
        .state('site-map', {
        url: '/site-map',
        name: 'site-map',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state2.html'
          },
          content: {
            templateUrl: 'views/site-map.html'
          }
        }
        })
        // discover section
        // .state('discover', {
        // url: '/discover/',
        // name: 'discover',
        // views:{
        //   navtop:{
        //     templateUrl: 'views/partials/nav-state3-sub.html'
        //   },
        //   content: {
        //     templateUrl: 'views/discover/discover.html'
        //   }
        // }
        // })
        .state('house-of-representatives', {
        url: '/discover/house-of-representatives',
        name: 'house-of-representatives',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/house-of-representatives.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        .state('senate', {
        url: '/discover/senate',
        name: 'senate',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/senate.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        .state('texas-state-government', {
        url: '/discover/texas-state-government',
        name: 'texas-state-government',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/texas-state-government.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        .state('how-a-bill-becomes-law', {
        url: '/discover/how-a-bill-becomes-law',
        name: 'how-a-bill-becomes-law',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/how-a-bill-becomes-law.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        .state('founding-fathers', {
        url: '/discover/founding-fathers',
        name: 'founding-fathers',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/founding-fathers.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        .state('six-flags-of-texas', {
        url: '/discover/six-flags-of-texas',
        name: 'six-flags-of-texas',
        views:{
          navtop:{
            templateUrl: 'views/partials/nav-state3.html',
            controller: ['$scope', function($scope) {
              $scope.logo = 'nav-main__home--discover wobble';
            }],
          },
          content: {
            templateUrl : 'views/discover/six-flags-of-texas.html',
            controller: ['$rootScope', function($rootScope) {
              $rootScope.location = 'discover-animate';
            }],
          }
        }
        })
        //explore

        .state('explore', {
          url: '/explore',
          name: 'expolre',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl: 'views/explore/explore.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('texas-capitol', {
          url: '/explore/texas-capitol',
          name: 'texas-capitol',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/texas-capitol.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('texas-capitol.rotunda', {
            url: '/rotunda',
            name: 'texas-capitolrotunda',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore jello';
                }],
              },
              sub : {
                templateUrl: 'views/explore/partials/rotunda.html'
              }
            }

        })
        .state('texas-capitol.house', {
            url: '/house',
            name: 'texas-capitolhouse',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore jello';
                }],
              },
              'sub' : {
                templateUrl: 'views/explore/partials/house.html'
              }
            }
        })
        .state('texas-capitol.senate', {
            url: '/senate',
            name: 'texas-capitolsenate',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore jello';
                }],
              },
              'sub' : {
                templateUrl: 'views/explore/partials/senate.html'
              }
            }
        })
        .state('texas-capitol.capitol', {
            url: '/capitol',
            name: 'texas-capitolcapitol',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore jello';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/capitol.html'
              }
            }
        })
        .state('texas-capitol.goddess', {
            url: '/goddess',
            name: 'texas-capitolgoddess',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore jello';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/goddess.html'
              }
            }
        })
        .state('capitol-grounds', {
          url: '/explore/capitol-grounds',
          name: 'capitol-grounds',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/capitol-grounds.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('capitol-monuments-statues', {
          url: '/explore/capitol-monuments-statues',
          name: 'capitol-monuments-statues',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/capitol-monuments-statues.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('capitol-monuments-statues.tejano', {
            url: '/tejano',
            name: 'capitol-monuments-statuestejano',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/tejano.html'
              }
            }
        })
        .state('capitol-monuments-statues.texascowboy', {
            url: '/texascowboy',
            name: 'capitol-monuments-statuestexascowboy',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/texascowboy.html'
              }
            }
        })
        .state('capitol-monuments-statues.volunteerfiremen', {
            url: '/volunteerfiremen',
            name: 'capitol-monuments-statuesvolunteerfiremen',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/volunteerfiremen.html'
              }
            }
        })
        .state('capitol-monuments-statues.confederatesoldiers', {
            url: '/confederatesoldiers',
            name: 'capitol-monuments-statuesconfederatesoldiers',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/confederatesoldiers.html'
              }
            }
        })
        .state('capitol-monuments-statues.texasrangers', {
            url: '/texasrangers',
            name: 'capitol-monuments-statuestexasrangers',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/texasrangers.html'
              }
            }
        })
        .state('capitol-monuments-statues.liberty', {
            url: '/liberty',
            name: 'capitol-monuments-statuesliberty',
            views:{
              navtop:{
                templateUrl: 'views/partials/nav-state3.html',
                controller: ['$scope', function($scope) {
                  $scope.logo = 'nav-main__home--explore';
                }],
              },
              sub: {
                templateUrl: 'views/explore/partials/monuments/liberty.html'
              }
            }
        })
        .state('rotunda', {
          url: '/explore/rotunda',
          name: 'rotunda',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/rotunda.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('state-seal', {
          url: '/explore/state-seal',
          name: 'state-seal',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/state-seal.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('state-flag', {
          url: '/explore/state-flag',
          name: 'state-flag',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/state-flag.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('state-symbols', {
          url: '/explore/state-symbols',
          name: 'state-symbols',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/state-symbols.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('city-of-austin', {
          url: '/explore/city-of-austin',
          name: 'city-of-austin',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--explore jello';
              }],
            },
            content: {
              templateUrl : 'views/explore/city-of-austin.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
// Challenge
        .state('challenge', {
          url: '/challenge',
          name: 'challenge',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--challenge shake';
              }],
            },
            content: {
              templateUrl: 'views/challenge/challenge.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'explore-animate';
              }],
            }
          }
        })
        .state('flip-cards', {
          url: '/challenge/flip-cards',
          name: 'flip-cards',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--challenge shake';
              }],
            },
            content: {
              templateUrl : 'views/challenge/flip-cards.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'challenge-animate';
              }],
            }
          }
        })
        .state('word-search-puzzle', {
          url: '/challenge/word-search-puzzle',
          name: 'word-search-puzzle',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--challenge shake';
              }],
            },
            content: {
              templateUrl : 'views/challenge/word-search-puzzle.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'challenge-animate';
              }],
            }
          }
        })
        .state('texas-government-test', {
          url: '/challenge/texas-government-test',
          name: 'texas-government-test',
          views:{
            navtop:{
              templateUrl: 'views/partials/nav-state3-1.html',
              controller: ['$scope', function($scope) {
                $scope.logo = 'nav-main__home--challenge shake';
              }],
            },
            content: {
              templateUrl : 'views/challenge/texas-government-test.html',
              controller: ['$rootScope', function($rootScope) {
                $rootScope.location = 'challenge-animate';
              }],
            }
          }
        });
      });
// Granicus
        // .state('granicus', {
        //   url: '/granicus',
        //   templateUrl: 'views/granicus.html'
        // })
        //
        // .state('granicusapi', {
        //   url: '/granicusapi',
        //   templateUrl: 'views/granicusapi.html'
        // })
        //
        // .state('slider', {
        //   url: '/slider',
        //   templateUrl: 'views/slider.html'
        // })

        // .state('houseapi', {
        //   url: '/houseapi',
        //   templateUrl: 'views/houseapi.html'
        // });
