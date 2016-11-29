(function() {
  'use strict';

  angular.module('app')
    .controller('navController', navController)

    navController.$inject = ['$log', '$scope']


    function navController($log, $scope) {

      $scope.activeSection = {
        about: true,
        webDev: false,
        writing: false
      }

      $scope.activeSelector = activeSelector;

      function activeSelector(section) {
        switch (section) {
          case 'about':
            $scope.activeSection.about = true;
            $scope.activeSection.webDev = false;
            $scope.activeSection.writing = false;
            break;
          case 'webDev':
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
            $scope.activeSection.about = true;
            $scope.activeSection.webDev = false;
            $scope.activeSection.writing = false;
        }
      }
    }

}());
