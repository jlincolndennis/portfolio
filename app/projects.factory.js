(function() {
  'use strict';

  angular.module('app')
    .factory('projectsFactory', projectsFactory);

    projectsFactory.$inject = ['$log']

    function projectsFactory($log) {

      var _devProjects = [
        {
          id: "001",
          name: "StorySmasher",
          visitLink: "https://storysmasher.com/",
          codebaseLink: "https://github.com/jlincolndennis/storysmasher-client",
          screenshotLink: "/assets/images/storysmasher_screenshot.png",
          thumbnailLink: "/assets/images/storysmasher_mock.png",
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
          screenshotLink: "/assets/images/tuneup_screenshot.png",
          thumbnailLink: "/assets/images/tuneup_mock.png",
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
          screenshotLink: "/assets/images/illiterati_screenshot.png",
          thumbnailLink: "/assets/images/illiterati_mock.png",
          technologies: "AngularJS, Javascript, CSS",
          description: [
            "The homepage of Denver’s “Most-Awesome and Best-Named Book Club” - a group organized by yours truly - serving as an informational and promotional hub for current and prospective members.",
            "This project has the distinction of being the first site I have developed and deployed to a real, live user-base with the expectation that the site actually work consistently and intuitively. In addition to being the furthest I had pushed myself in terms of design at that point, it was also a wonderful learning experience in receiving actual feedback from real users.",
            "(Does that really say, 'Featuring: CSS'? Sigh. Who writes these things?)"
          ]
        },
        {
          id: "004",
          name: "WhereAbouts",
          visitLink: "http://where-a-bouts.herokuapp.com/",
          codebaseLink: "https://github.com/blakeface/whereabouts",
          screenshotLink: "/assets/images/whereabouts_screenshot.png",
          thumbnailLink: "/assets/images/whereabouts_mock.png",
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
          screenshotLink: "/assets/images/marvelhistory_screenshot.png",
          thumbnailLink: "/assets/images/marvelhistory_mock.png",
          technologies: "jQuery, Marvel Comics API, HTML, CSS",
          description: [
            "Browse the vast and interesting publication history of Marvel Comics with this front-end web app that utilizes the Official Marvel Comics API.",
            "The one that started it all (my 'origin story', if you will), this app was a front end only project, mainly because front end was all I knew when I did it. It was also my first experience interacting with APIs and my introduction to JSON objects. What I was able to accomplish with this somewhat limited toolset has also retroactively given me an even greater respect for Angular and other frontend frameworks. Using jQuery to append all those divs? Oh, you sweet summer child."
          ]
        },
      ]
      var _writingProjects = [
        {
          id: "001",
          title: "We've Got This, Me and You",
          excerpt: "That was when I knew, right at the end of an amazing weekend, that JLF@Boulder, and literature and art wasn’t just For Me. It was for all of us. We are at a crossroads and I do not know what is going to happen, I don’t know what road my country will take. But the Jaipur Literature Festival at Boulder reminded me of something bigger than elections, and bigger than America. It reminded me, that across all peoples, and cultures, and tastes ,and beliefs, the reason we read, the reason we create, and engage with art in the first place: We read to know we are not alone.",
          readMoreLink: "https://medium.com/@jlincolndennis/we-got-this-me-and-you-65c73d32d71c#.psicd1q4f",
        },
        {
          id: "002",
          title: "The Year In Media",
          excerpt: "Media, art, pop culture — whatever you want to call it — is a profoundly important part of my life. When I close my eyes and try to remember what 2015 felt like, among images of my friends and family and experiences are Steven and Amethyst, Kate and Clint, Rey and Fin, Jupiter and Caine and more. And what’s most exciting of all, back on January 1st, 2015, I had no idea these some of these characters or the pieces of art they are from existed, or if I did, I didn’t know how they’d exist for me. And now its January 1st, 2016. What wonderful things exist outside of my current perception that I will get to experience in the coming year?",
          readMoreLink: "https://medium.com/@jlincolndennis/2015-the-year-in-media-c64922847e27#.93w41kqu4",
        },
        {
          id: "003",
          title: "So You've Decided To Give Your Life To Comics...",
          excerpt: "Have you ever said to yourself, “Self, comics appear to be a pretty cool and unique story telling medium! I sure wish I knew more about them, so I could explore this new and exciting world!” What a coincidence! I just happen to be here to tell you more than you’d ever want to know about the wonderful world of comics and graphic novels! These are some of the best graphic novels available now. Some are stand-alone, others are collections of ongoing comic series. None of them require any background knowledge, just the love of good stories and amazing artwork.",
          readMoreLink: "https://medium.com/@jlincolndennis/so-you-ve-decided-to-give-your-life-to-comics-c0498f44517d#.70udt0638",
        },
      ]

      return {getDevProjects, getWritingProjects}

      function getDevProjects() {
        return _devProjects
      }
      function getWritingProjects() {
        return _writingProjects
      }
    }

}());
