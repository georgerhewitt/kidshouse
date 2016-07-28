'use strict';

var hsScrollNav = angular.module('hsScrollNav', []);
//six-flags-of-texas
hsScrollNav.controller('ScrollNavCtrl', ['$scope', function($scope){
  $scope.templates =[
    {name: 'scrollnav.tpl.html', url: 'views/templates/scrollnav.tpl.html'},
    {name: 'scrollnav.tpl.html', url: 'views/templates/scrollnav.tpl.html'},
  ];
  $scope.template = $scope.templates[0];
}]);
 // page slider 812x392
// hsScrollNav.directive('hsScrollNav', function(){
//   return{
//     restrict: 'A',
//     scope: {
//       index: '@'
//     },
//     controller: 'FlagCtrl',
//      templateUrl: 'views/templates/imagesliderflags.tpl.html'
//   };
// });
