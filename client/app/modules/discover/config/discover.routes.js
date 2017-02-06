'use strict';
angular
  .module('com.module.discover')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('discover', {
        	url: '/discover',
	        views:{
	          '':{templateUrl :'modules/discover/views/discover.html'},
	          'discover_header@discover':{
	            templateUrl: 'modules/index/views/home_header.html'
	          },
	          'discover_intro@discover': {
	            templateUrl: 'modules/discover/views/discover_intro.html',
              controller: 'discover'
	          },
            'discover_popular@discover': {
              templateUrl: 'modules/discover/views/discover_popular.html'
            },
	          'discover_service@discover': {
	            templateUrl: 'modules/discover/views/discover_service.html'
	          },
	          'discover_weoffer@discover': {
	            templateUrl: 'modules/discover/views/discover_weoffer.html'
	          },
            'discover_review@discover': {
              templateUrl: 'modules/discover/views/discover_review.html',
              controller: 'reviewDiscoverCtrl'
            },
            'discover_footer@discover': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'footerCtrl'
            }
        }})
      .state('detail', {
        url: '/discover/:location',
        views: {
          '': {templateUrl: 'modules/discover/views/detail/detail.html'},
          'detail_header@detail': {
            templateUrl: 'modules/index/views/home_header.html',
            controller: 'index'
          },
          'detail_banner@detail': {
            templateUrl: 'modules/discover/views/detail/detail_banner.html',
            controller: 'detail'
          },
          'detail_main@detail': {
            templateUrl: 'modules/discover/views/detail/detail_main.html',
            controller: 'detail'
          },
          'detail_info@detail': {
            templateUrl: 'modules/discover/views/detail/detail_info.html',
            controller: 'detail'
          },
          'detail_footer@detail': {
            templateUrl: 'modules/index/views/home_footer.html',
            controller: 'footerCtrl'

          }
        },
      });
  });
