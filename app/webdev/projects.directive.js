(function() {
  'use strict';

  angular.module('app')
    .directive('jldProjects', projectsDirective);

      function projectsDirective() {
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/webdev/projects.directive.html",
          controller: projectsController,
          controllerAs: 'vm'
        }
      }

      projectsController.$inject = ['$log', 'projectsFactory']

      function projectsController($log, projectsFactory) {
        var vm = this;
        vm.projects = projectsFactory.getProjects()
        vm.selectedProject = {}
        vm.learnMoreModal = learnMoreModal;

        function learnMoreModal(project) {
          vm.selectedProject = project;
          $('#projectInfoModal').modal('show')

        }
      }
}());
