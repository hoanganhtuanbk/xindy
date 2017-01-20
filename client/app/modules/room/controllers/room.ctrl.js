'use strict';
angular
  .module('com.module.room')
  .controller('room', function ($scope,$rootScope) {
    $scope.selectLocation = 'DN';
    $scope.changeLocation = function (zone) {
      $scope.selectLocation = zone;
      $rootScope.configHome(zone);
    };
  })
  .controller('listRoom', function (NgMap,$scope,$rootScope,Home,HomesService) {
    var styleMap = [
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ];
    var initCenter;
    var map;
    var marker;
    $rootScope.configHome = function (zone) {
      Home.find({
        filter: {
          order: 'created DESC',
          where:{
            zone: zone
          }
        }
      },function (result) {
        $scope.homes = result;
        initCenter = {
          lat: result[0].lat,
          lng: result[0].lng
        };
        initMap();
      });
    };
    $rootScope.configHome('DN');
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: initCenter,
        zoom: 14,
        styles: styleMap
      });

        $scope.homes.map(function (markerData, i) {
          var latLng = new google.maps.LatLng(markerData.lat, markerData.lng);
          marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'images/home.png'
          });
            // Add the circle for this city to the map.

          var infowindow = new google.maps.InfoWindow({
            content: '<div id="iw-container" ><div class="iw-title"><p>'+markerData.name+'</p></div>'+
            '<img  class="iw-img" src="' + markerData.imageSrc + '" /></div>',
            position: {
              lat: markerData.lat,
              lng: markerData.lng
            }
          });
          $scope.showMarker = function (lat, lng,url,name) {
           infowindow = new google.maps.InfoWindow({
              content: '<div id="iw-container" ><div class="iw-title"><p>'+name+'</p></div>'+
              '<img  class="iw-img" src="' +url + '" /></div>',
              position: {
                lat: lat,
                lng: lng
              }
            });
            infowindow.open(map);
            map.setCenter({
              lat: lat,
              lng: lng
            });
            google.maps.event.addListener(infowindow, 'domready', function() {

              // Reference to the DIV which receives the contents of the infowindow using jQuery
              var iwOuter = $('.gm-style-iw');

              /* The DIV we want to change is above the .gm-style-iw DIV.
               * So, we use jQuery and create a iwBackground variable,
               * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
               */
              var iwBackground = iwOuter.prev();
              iwOuter.parent().parent().css({top: '-20px'});
              // Remove the background shadow DIV
              iwBackground.children(':nth-child(2)').css({'display' : 'none'});

              // Remove the white background DIV
              iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            });
            $scope.hideMarker = function () {
              infowindow.close();
            };
          }

          google.maps.event.addListener(infowindow, 'domready', function() {

            // Reference to the DIV which receives the contents of the infowindow using jQuery
            var iwOuter = $('.gm-style-iw');

            /* The DIV we want to change is above the .gm-style-iw DIV.
             * So, we use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
             */
            var iwBackground = iwOuter.prev();

            // Remove the background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});

            // Remove the white background DIV
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});
          });
          google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, this);
          });
          google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
          });
          google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

        });

    }


  });


