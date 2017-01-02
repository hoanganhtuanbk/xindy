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
	            templateUrl: 'modules/index/views/home_header.html'
	          },
	          'room_infotour@room': {
	            templateUrl: 'modules/room/views/room_infotour.html',
              controller: 'room'
            },
	          'room_listRoom@room': {
	            templateUrl: 'modules/room/views/room_listRoom.html',
	            controller: 'listRoom'
	          },
            'room_footer@room': {
              templateUrl: 'modules/index/views/home_footer.html',
              controller: 'footerCtrl'
            }
        }});
  });
