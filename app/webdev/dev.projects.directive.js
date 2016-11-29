(function() {
  'use strict';

  angular.module('app')
    .directive('devProjects', devProjectsDirective);

      function devProjectsDirective() {
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/webdev/dev.projects.directive.html",
          controller: devProjectsController,
          controllerAs: 'vm'
        }
      }

      devProjectsController.$inject = ['$log', 'projectsFactory']

      function devProjectsController($log, projectsFactory) {
        var vm = this;
        vm.projects = projectsFactory.getDevProjects()
        vm.selectedProject = {}
        vm.learnMoreModal = learnMoreModal;

        function learnMoreModal(project) {
          vm.selectedProject = project;
          $('#projectInfoModal').modal('show')
        }
      }
}());
