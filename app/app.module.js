(function() {
  'use strict';

  var dependencies = ['ui.router']

  angular.module('app', dependencies)
    .config(setupStates)

    function setupStates($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('about', {
          templateUrl: '/app/partials/about.html',
          url: '/'
        })
        .state('webdev', {
          templateUrl: '/app/partials/webdev.html',
          url: '/webdev'
        })
        .state('writing', {
          templateUrl: '/app/partials/writing.html',
          url: '/writing'
        })
    }
}());
