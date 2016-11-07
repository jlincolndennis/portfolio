(function() {
  'use strict';

  angular.module('app')
    .factory('projectsFactory', projectsFactory);

    projectsFactory.$inject = ['$log']

    function projectsFactory($log) {

      var _projects = [
        {
          id: "001",
          name: "StorySmasher",
          visitLink: "https://storysmasher.com/",
          codebaseLink: "https://github.com/jlincolndennis/storysmasher-client",
          screenshotLink: "http://i.imgur.com/dRnPuDL.png",
          thumbnailLink: "http://i.imgur.com/dRnPuDL.png",
          technologies: "AngularJS, Ruby on Rails, Tracery, JSON Web Tokens",
          description: [
            "Created a single page application that allows users to smash out randomly generated stories. Built a Rails API to manage the database.",
            "StorySmasher was my Capstone Project at Galvanize. Built in just under two weeks, and featuring a Rails API (with no prior knowledge of Rails) it was an ambitious undertaking to say the least. I've always been interested in the intersection of art and technology, and thanks to the Tracery library, I was able to make an app that pumps out random and awesome stories about Space Janitors battling Cthulhu."
          ]


        }
      ]

      return {getProjects}

      function getProjects() {
        return _projects
      }
    }

}());
