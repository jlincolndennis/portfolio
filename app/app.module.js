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
          templateUrl: '/app/about/about.html',
          url: '/'
        })
        .state('webdev', {
          templateUrl: '/app/webdev/webdev.html',
          url: '/webdev'
        })
        .state('writing', {
          templateUrl: '/app/writing/writing.html',
          url: '/writing'
        })
    }
}());
