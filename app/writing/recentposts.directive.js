(function() {
  'use strict';

  angular.module('app')
    .directive('recentPosts', recentPostsDirective)

    function recentPostsDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/writing/recentposts.directive.html',
        controller: recentPostsController,
        controllerAs: 'vm'
      }
    }

    recentPostsController.$inject = ['feedFactory']

    function recentPostsController(feedFactory) {

      var vm = this;
      vm.feed = [];

      feedFactory.getFeed()
        .then(function (feed) {
          if (!feed.err) {
            return vm.feed = feed
          } else {
            return vm.error = feed.err
          }
        })
    }
}());
