'use strict';
angular
  .module('com.module.onetrip')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('onetrip', {
        	url: '/onetrip',
	        views:{
	          '':{templateUrl :'modules/onetrip/views/onetrip.html'},
	          'onetrip_header@onetrip':{
	            templateUrl: 'modules/onetrip/views/onetrip_header.html',
	            controller: 'onetrip'
	          },
	          'onetrip_infotour@onetrip': {
	            templateUrl: 'modules/onetrip/views/onetrip_infotour.html',
	            controller: 'TripCtrl'
	          },
	          'onetrip_ss3slide@onetrip': {
	            templateUrl: 'modules/onetrip/views/onetrip_ss3slide.html',
	            controller: 'ss3slides'
	          },
	          'onetrip_ss2info@onetrip': {
	            templateUrl: 'modules/onetrip/views/onetrip_ss2info.html',
	            controller: 'ss2info'
	          },
	          'onetrip_weoffer@onetrip': {
	            templateUrl: 'modules/onetrip/views/onetrip_weoffer.html',
	            controller: ''
	          },
            'onetrip_review@onetrip': {
              templateUrl: 'modules/onetrip/views/onetrip_review.html',
              controller: 'reviewOnetripCtrl'
            },
            'onetrip_footer@onetrip': {
              templateUrl: 'modules/onetrip/views/onetrip_footer.html',
              controller: 'onetrip'
            }
        }});
  });
