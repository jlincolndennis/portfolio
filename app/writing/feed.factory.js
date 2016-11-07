(function() {
  'use strict';

  angular.module('app')
    .factory('feedFactory', feedFactory);

    feedFactory.$inject = ['$http', '$log']

    function feedFactory($http, $log) {
      var _feed = []
      var _error = {}

      return {getFeed}

      function getFeed() {
        var url = "https://rss2json.com/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jlincolndennis"

        return $http.get(url)
          .then(function (res) {
            if (res.data.status === 'ok') {
              var fullFeed = res.data.items;
              for (var i = 0; i < 3; i++) {
                _feed.push({
                  title: fullFeed[i].title,
                  date: Date.parse(fullFeed[i].pubDate),
                  link: fullFeed[i].link
                })
              }
              // _feed = [fullFeed[0], fullFeed[1], fullFeed[2]]
              // _feed.forEach(function (item) {
              //   item.date = Date.parse(item.pubDate)
              // })
              console.log(_feed);
              return _feed
            } else {
              _error = {
                err: 'There was an error retrieving these posts, please try again later.'
              }
              return _error

            }

          })

      }
    }
}());
