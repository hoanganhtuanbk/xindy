'use strict';
angular
  .module('com.module.hotAddress')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('hotAddress', {
        	url: '/address/search',
	        views:{
	          '':{templateUrl :'modules/hotAddress/views/hotAddress.html'},
	          'hotAddress_header@hotAddress':{
	            templateUrl: 'modules/index/views/home_header.html'
	          },
	          'hotAddress_infotour@hotAddress': {
	            templateUrl: 'modules/hotAddress/views/hotAddress_infotour.html',
              controller: 'hotAddress'
            },
	          'hotAddress_listAddress@hotAddress': {
	            templateUrl: 'modules/hotAddress/views/hotAddress_listAddress.html',
	            controller: 'hotAddress'
	          },
            'hotAddress_footer@hotAddress': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'footerCtrl'
            }
        }});
  });
