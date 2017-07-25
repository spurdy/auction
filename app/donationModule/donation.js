'use strict';

angular.module('auctionApp.donationModule', ['ui.router'])

.config(function($stateProvider){
  var donationState = {
    name: 'donation',
    url: '/donation',
    templateUrl: 'donationModule/donation.html'
  };
  
  $stateProvider.state(donationState);
})

.controller('donationCtrl', [function() {

}]);