'use strict';

angular.module('auctionApp.donorsModule', ['ui.router'])

.config(function($stateProvider){
  var donorsState = {
    name: 'donors',
    url: '/donors',
    templateUrl: 'donorsModule/donors.html'
  };
  
  $stateProvider.state(donorsState);
})

.controller('donorsCtrl', [function() {

}]);