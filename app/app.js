'use strict';

// Use Environmental Variables for configuration
var env = {};

// Import variables if present (from env.js)
if(window){  
  Object.assign(env, window.__env);
}

angular.module('auctionApp.config', []);

// Declare app level module which depends on views, and components
angular.module('auctionApp', [
  'ui.router',
  'auctionApp.config',
  'auctionApp.catalogModule',
  'auctionApp.donorsModule',
  'auctionApp.donationModule'
])
.constant('__env', env)
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $urlRouterProvider.when('', '/');

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'views/home.html'
  };

  var notFoundState = {
    name: '404',
    url: '{path:.*}',
    templateUrl: 'views/404'
  };
  
  $stateProvider.state(homeState);
});
