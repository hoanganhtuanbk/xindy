'use strict';
angular
  .module('com.module.index')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('home', {
        	url: '/',
	        views:{
	          '':{templateUrl :'modules/index/views/home.html',
              controller: 'index'
            },
	          'home_header@home':{
	            templateUrl: 'modules/index/views/home_header.html'
	          },
            'home_intro@home': {
              templateUrl: 'modules/index/views/home_intro.html',
              controller: 'index'
            },
	          'home_slide@home': {
	            templateUrl: 'modules/index/views/home_slide.html',
	            controller: 'index'
	          },
	          'home_focus@home': {
	            templateUrl: 'modules/index/views/home_focus.html'
	          },
	          'home_concept@home': {
	            templateUrl: 'modules/index/views/home_concept.html'
	          },
	          'home_feature@home': {
	            templateUrl: 'modules/index/views/home_feature.html'
	          },
            'home_review@home': {
              templateUrl: 'modules/index/views/home_review.html',
              controller: 'slideCtrl'
            },
            'home_achievement@home': {
              templateUrl: 'modules/index/views/home_achievement.html'
            },
            'home_footer@home': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'footerCtrl'
            }
        }})
      .state('about', {
        url: '/about',
        views:{
          '':{templateUrl :'modules/index/views/about/about.html'},
          'about_header@about':{
            templateUrl: 'modules/index/views/home_header.html'
          },
          'about_banner@about': {
            templateUrl: 'modules/index/views/about/about_banner.html',
            controller: ''
          },
          'about_main@about': {
            templateUrl: 'modules/index/views/about/about_main.html',
            controller: ''
          },
          'about_footer@about': {
            templateUrl: 'modules/index/views/home_footer.html',
            controller: ''
          }
        }});
  });
