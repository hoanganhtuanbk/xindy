'use strict';
angular
  .module('com.module.onetrip')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('explore', {
        	url: '/explore',
	        views:{
	          '':{templateUrl :'modules/onetrip/views/onetrip.html'},
	          'onetrip_header@explore':{
	            templateUrl: 'modules/index/views/home_header.html',
	            controller: 'onetrip'
	          },
	          'onetrip_infotour@explore': {
	            templateUrl: 'modules/onetrip/views/onetrip_infotour.html',
	            controller: 'TripCtrl'
	          },
	          'onetrip_ss3slide@explore': {
	            templateUrl: 'modules/onetrip/views/onetrip_ss3slide.html',
	            controller: 'ss3slides'
	          },
	          'onetrip_ss2info@explore': {
	            templateUrl: 'modules/onetrip/views/onetrip_ss2info.html',
	            controller: 'ss2info'
	          },
	          'onetrip_weoffer@explore': {
	            templateUrl: 'modules/onetrip/views/onetrip_weoffer.html',
	            controller: ''
	          },
            'onetrip_review@explore': {
              templateUrl: 'modules/onetrip/views/onetrip_review.html',
              controller: 'reviewOnetripCtrl'
            },
            'onetrip_footer@explore': {
              templateUrl: 'modules/index/views/home_footer.html'
            }
        }})
      .state('detail', {
        url: '/explore/hoian',
        views: {
          '': {templateUrl: 'modules/onetrip/views/detail/detail.html'},
          'detail_header@detail': {
            templateUrl: 'modules/index/views/home_header.html'
          },
          'detail_banner@detail': {
            templateUrl: 'modules/onetrip/views/detail/detail_banner.html'
          },
          'detail_main@detail': {
            templateUrl: 'modules/onetrip/views/detail/detail_main.html'
          },
          'detail_info@detail': {
            templateUrl: 'modules/onetrip/views/detail/detail_info.html'
          },
          'detail_footer@detail': {
            templateUrl: 'modules/index/views/home_footer.html'
          }
        }
      });
  });
