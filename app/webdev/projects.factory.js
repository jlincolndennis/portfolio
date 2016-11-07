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
        },
        {
          id: "002",
          name: "tuneUp",
          visitLink: "https://tuneupjs.herokuapp.com/",
          codebaseLink: "https://github.com/jlincolndennis/tuneup",
          screenshotLink: "http://i.imgur.com/xfbOoET.png",
          thumbnailLink: "http://i.imgur.com/xfbOoET.png",
          technologies: "AngularJS, SQL, JSON Web Tokens",
          description: [
            "A single-page application that allows logged in users to recommend tracks from their favorite albums, and vote and leave comments on other users’ recommendations.",
            "tuneUp began its life as an exercise in learning AngularJS’s component-based architecture. The scope of the project was expanded to include utilizing the Revealing Module Pattern, and to follow John Papa’s style guide. After exhausting myself with all of those buzzwords, I decided to make the app a music recommendation service because I think music, in general, is pretty rad."
          ]
        },
        {
          id: "003",
          name: "The Illiterati of Denver",
          visitLink: "http://www.denverilliterati.com/",
          codebaseLink: "https://github.com/jlincolndennis/denverilliterati",
          screenshotLink: "http://i.imgur.com/I64sLw7.png",
          thumbnailLink: "http://i.imgur.com/I64sLw7.png",
          technologies: "AngularJS, Javascript, CSS",
          description: [
            "The homepage of Denver’s “Most-Awesome and Best-Named Book Club” - a group organized by yours truly - serving as an informational and promotional hub for current and prospective members.",
            "This project has the distinction of being the first site I have developed and deployed to a real, live user-base with the expectation that the site actually work consistently and intuitively. In addition to being the furthest I had pushed myself in terms of design at that point, it was also a wonderful learning experience in receiving actual feedback from real users."
          ]
        },
        {
          id: "004",
          name: "WhereAbouts",
          visitLink: "http://where-a-bouts.herokuapp.com/",
          codebaseLink: "https://github.com/blakeface/whereabouts",
          screenshotLink: "http://i.imgur.com/GsglKxQ.png",
          thumbnailLink: "http://i.imgur.com/GsglKxQ.png",
          technologies: "jQuery, Google Maps API, OAuth, SQL, Knex.js",
          description: [
            "A full stack app built by a team of four, Whereabouts is a community-powered map for overlooked points-of-interest. Developed using Agile methodologies, I worked mostly on server-side routing, user authorization, and CRUD implementation.",
            "In addition to being the only app I know of where one can learn about a waterfall that steals souls, this project was as much as learning to develop in a team - particularly while utilizing the Agile workflow - as it was about building a full stack CRUD app. Over the course of development, I worked on my own and in pairs, learned how to integrate my code into a larger code base, and how to work with and debug code I didn’t write."
          ]
        },
        {
          id: "005",
          name: "This Week In Marvel History",
          visitLink: "http://jlincolndennis.github.io/marvel-history.github.io/index.html",
          codebaseLink: "https://github.com/jlincolndennis/marvel-history",
          screenshotLink: "http://i.imgur.com/nIIhkt4.png",
          thumbnailLink: "http://i.imgur.com/nIIhkt4.png",
          technologies: "jQuery, Marvel Comics API, HTML, CSS",
          description: [
            "Browse the vast and interesting publication history of Marvel Comics with this front-end web app that utilizes the Official Marvel Comics API.",
            "The one that started it all (my 'origin story', if you will), this app was a front end only project, mainly because front end was all I knew when I did it. It was also my first experience interacting with APIs and my introduction to JSON objects. What I was able to accomplish with this somewhat limited toolset has also retroactively given me an even greater respect for Angular and other frontend frameworks. Using jQuery to append all those divs? Oh, you sweet summer child."
          ]
        },
      ]

      return {getProjects}

      function getProjects() {
        return _projects
      }
    }

}());
