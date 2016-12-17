'use strict';
angular
  .module('com.module.index')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('home', {
        	url: '/',
	        views:{
	          '':{templateUrl :'modules/index/views/home.html'},
	          'home_header@home':{
	            templateUrl: 'modules/index/views/home_header.html',
	            controller: 'index'
	          },
	          'home_infotour@home': {
	            templateUrl: 'modules/index/views/home_infotour.html',
	            controller: 'slideCtrl'
	          },
	          'home_ss3slide@home': {
	            templateUrl: 'modules/index/views/home_ss3slide.html',
	            controller: 'ss3slides'
	          },
	          'home_ss2info@home': {
	            templateUrl: 'modules/index/views/home_ss2info.html',
	            controller: 'ss2info'
	          },
	          'home_weoffer@home': {
	            templateUrl: 'modules/index/views/home_weoffer.html',
	            controller: ''
	          },
            'home_review@home': {
              templateUrl: 'modules/index/views/home_review.html',
              controller: 'reviewCtrl'
            },
            'home_achievement@home': {
              templateUrl: 'modules/index/views/home_achievement.html',
              controller: 'index'
            },
            'home_footer@home': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'index'
            }
        }});
  });
