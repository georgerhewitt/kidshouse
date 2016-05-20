'use strict';
/* App Controllers */


var translateApp = angular.module('translateApp', ['pascalprecht.translate']);

translateApp.config(['$translateProvider', function($translateProvider){
  $translateProvider.useStaticFilesLoader({
    files: [{
        prefix: '/i8n/locale-',
        suffix: '.json'
    }, {
        prefix: '/i8n/locale-',
        suffix: '.json'
    }]
});

  // Tell the module to store the language in the cookies
  $translateProvider.useSanitizeValueStrategy('escape');
  //$translateProvider.useCookieStorage();
  //$translateProvider.useUrlLoader('/i8n/locale-en.json');


  // Tell the module what language to use by default

  // $translateProvider.translations('en', {
  //   HEADLINE: 'Hello there, This is my awesome app!',
  //   INTRO_TEXT: 'And it has i18n support!'
  // })
  // .translations('de', {
  //   HEADLINE: 'Hey, das ist meine großartige App!',
  //   INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
  // });
  // $translateProvider.useStaticFilesLoader({
  //   prefix: '/i8n/',
  //   suffix: '.json'
  // });
$translateProvider.preferredLanguage('en');
}]);

translateApp.controller('TranslateCtrl', ['$translate','$scope', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);
