'use strict';
angular
  .module('com.module.room')
  .controller('room', function () {

  })
  .controller('slideCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: 'images/slide/1.jpg',
        id: 0
      },
      {
        image: 'images/slide/2.jpg',
        id: 1
      },
      {
        image: 'images/slide/5.jpg',
        id: 2
      }
    ];

})
  .controller('reviewCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: 'images/man/man1.jpg',
        id: 0
      },
      {
        image: 'images/man/man2.jpg',
        id: 1
      },
      {
        image: 'images/man/man3.jpg',
        id: 2
      }
    ];

  })

  .controller('listRoom', function (NgMap,$scope) {
    $scope.styleMap = [{"featureType":"all",
      "elementType":"geometry.fill",
      "stylers":[
        {"weight":"2.00"}
        ]},
      {"featureType":"all",
        "elementType":"geometry.stroke",
        "stylers":[{"color":"#9c9c9c"}]},
      {"featureType":"all","elementType":"labels.text","stylers":[
        {"visibility":"on"}
        ]},
      {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
      {"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
      {"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
      {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
      {"featureType":"road","elementType":"all","stylers":[{"saturation":-100}, {"lightness":45}]},
      {"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},
      {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},
      {"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},
      {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
      {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
      {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},
        {"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},
      {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},
      {"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
    var vm = this;
    vm.dynMarkers = [];
    NgMap.getMap().then(function(map) {
      for (var i=0; i<1000; i++) {
        var latLng = new google.maps.LatLng(markers[i].position[0], markers[i].position[1]);
        vm.dynMarkers.push(new google.maps.Marker({position:latLng}));
      }
      vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
    });
  })

  .controller('ss3slides', function () {

  });

