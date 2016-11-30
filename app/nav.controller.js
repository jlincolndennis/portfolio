(function() {
  'use strict';

  angular.module('app')
  .controller('navController', navController)

  navController.$inject = ['$log', '$scope', '$rootScope']

  function navController($log, $scope, $rootScope) {
    $scope.activeSection = {
      about: false,
      webDev: false,
      writing: false
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options){
      switch (toState.name) {
        case 'about':
          $scope.activeSection.about = true;
          $scope.activeSection.webDev = false;
          $scope.activeSection.writing = false;
        break;
        case 'webdev':
          $scope.activeSection.about = false;
          $scope.activeSection.webDev = true;
          $scope.activeSection.writing = false;
        break;
        case 'writing':
          $scope.activeSection.about = false;
          $scope.activeSection.webDev = false;
          $scope.activeSection.writing = true;;
        break;
        default:
          $scope.activeSection.about = false;
          $scope.activeSection.webDev = false;
          $scope.activeSection.writing = false;
      }
    })
  }

}());
