'use strict';

/**
 * @ngdoc function
 * @name kidshouseApp.controller:SwiperCtrl
 * @description
 * # SwiperCtrl
 * Controller of the kidshouseApp
 */
    angular.module('kidshouse')

    .animation('.swiper', function($rootScope) {
      
      var toRoot = false;
      var fromRoot = false;
      
      $rootScope.$on('$routeChangeSuccess', function(event, current, old) {
        toRoot = (current.$$route.originalPath === '/');
        fromRoot = (old.$$route.originalPath === '/');
      });
      
      return {
        enter: function(element, done) {
          if (!toRoot) {
            element.addClass('enable-animation');
          }
          done();
        },
        
        leave: function(element, done) {
          if (!fromRoot) {
            element.addClass('enable-animation');
            done();
          } else {
            // set 1000ms timeout to sync with CSS animation
            // otherwise leaving ng-view element will be removed before entering ng-view is in position
            setTimeout(done, 1000);
          }
        }
      };
    });
