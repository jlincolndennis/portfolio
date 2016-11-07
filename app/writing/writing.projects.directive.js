(function() {
  'use strict';

  angular.module('app')
    .directive('writingProjects', writingProjectsDirective);

    function writingProjectsDirective() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/writing/writing.projects.directive.html",
        controller: writingProjectsController,
        controllerAs: 'vm'
      }
    }

    writingProjectsController.$inject = ['$log', 'projectsFactory']

    function writingProjectsController($log, projectsFactory) {
      var vm = this;
      vm.projects = projectsFactory.getWritingProjects()
    }
}());
