// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: "searchCtrl"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.home', { 
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.person', {
      url: "/person",
      views: {
        'menuContent': {
          templateUrl: "templates/person.html",
          controller: 'PopularPerson'
        }
      }
    })

  .state('app.tech', {
      url: "/technology",
      views: {
        'menuContent': {
          templateUrl: "templates/tech.html",
          controller: 'NewTech'
        }
      }
    })    

   .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent': {
          templateUrl: "templates/contact.html"
        }
      }
    })

  .state('app.list', {
      url: "/appsList",
      views: {
        'menuContent': {
          templateUrl: "templates/appList.html"
        }
      }
    })

  .state('app.chart', {
      url: "/chart",
      views: {
        'menuContent': {
          templateUrl: "templates/highchart.html",
          controller: 'chartCtrl'
        }
      }
    })

  .state('app.piechart', {
      url: "/piechart",
      views: {
        'menuContent': {
          templateUrl: "templates/piechart.html",
          controller: 'piechartCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  // Tab Page Section


  // End of Tabs Page Section

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
