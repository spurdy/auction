'use strict';

angular.module('auctionApp.catalogModule', ['ui.router'])

.config(function($stateProvider){
  var catalogState = {
    name: 'catalog',
    url: '/catalog',
    templateUrl: 'catalogModule/catalog.html',
    controller: 'catalogCtrl',
    controllerAs: 'cc',
    resolve: {
      items: function(catalogService) {
        return catalogService.getItems();
      }
    }
  };

  $stateProvider.state(catalogState);
})

.controller('catalogCtrl', ['items', function(items) {
  this.items = items;
}])

.factory('catalogService', ['$http', 'ENV_VARS', function($http, ENV_VARS) {
  let getItems = () => {
    return $http.get(ENV_VARS.apiUrl)
    .then((res) => {
      return res.data.feed.entry;
    })
  };
  return {
    getItems: getItems
  }
}])