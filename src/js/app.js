"use strict";

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

 var app = angular.module("petshopDapp", ['ionic']);

 


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'MenuController'
  })
  // .state('app.transit', {
  //     url: '/transit',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'views/transit.html',
  //         controller: 'TransitController'
  //       }
  //     }
  //   })
    .state('app.packages', {
      url: '/packages',
      views: {
        'menuContent': {
          templateUrl: 'views/packages.html',
          controller: 'PackagesController'
        }
      }
    })
    // .state('app.packageDetails', {
    //   url: '/packages/:id',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'views/packageDetails.html',
    //       controller: 'PackageDetailsController'
    //     }
    //   }
    // })
    //  .state('app.contract', {
    //   url: '/contract',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'views/contract.html',
    //       controller: 'SmartContractController'
    //     }
    //   }
    // })
  ;
  $urlRouterProvider.otherwise('/app/main');

  //   angular.extend(toastrConfig, {
  //   autoDismiss: false,
  //   containerId: 'toast-container',
  //   maxOpened: 0,    
  //   newestOnTop: true,
  //   positionClass: 'toast-bottom-full-width',
  //   preventDuplicates: false,
  //   preventOpenDuplicates: false,
  //   target: 'body'
  // });
})