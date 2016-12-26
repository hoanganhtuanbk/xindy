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
	          'home_slide@home': {
	            templateUrl: 'modules/index/views/home_slide.html',
	            controller: 'index'
	          },
	          'home_focus@home': {
	            templateUrl: 'modules/index/views/home_focus.html',
	            controller: 'ss3slides'
	          },
	          'home_concept@home': {
	            templateUrl: 'modules/index/views/home_concept.html',
	            controller: 'ss2info'
	          },
	          'home_feature@home': {
	            templateUrl: 'modules/index/views/home_feature.html',
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
