'use strict';
angular
  .module('com.module.room')
  .config(function($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      	.state('room', {
        	url: '/rooms/search',
	        views:{
	          '':{templateUrl :'modules/room/views/room.html'},
	          'room_header@room':{
	            templateUrl: 'modules/index/views/home_header.html',
	            controller: 'index'
	          },
	          'room_infotour@room': {
	            templateUrl: 'modules/room/views/room_infotour.html',
	            controller: 'slideCtrl'
	          },
	          'room_listRoom@room': {
	            templateUrl: 'modules/room/views/room_listRoom.html',
	            controller: 'listRoom as vm'
	          },
	          'room_weoffer@room': {
	            templateUrl: 'modules/room/views/room_weoffer.html',
	            controller: ''
	          },
            'room_review@room': {
              templateUrl: 'modules/room/views/room_review.html',
              controller: 'reviewCtrl'
            },
            'room_achievement@room': {
              templateUrl: 'modules/room/views/room_achievement.html',
              controller: 'room'
            },
            'room_footer@room': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'index'
            }
        }});
  });
