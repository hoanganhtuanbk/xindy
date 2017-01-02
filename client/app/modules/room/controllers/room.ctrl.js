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
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#e9ebed"
          },
          {
            "saturation": -78
          },
          {
            "lightness": 67
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ffffff"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 100
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#bbc0c4"
          },
          {
            "saturation": -93
          },
          {
            "lightness": 31
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "hue": "#ffffff"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 100
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#e9ebed"
          },
          {
            "saturation": -90
          },
          {
            "lightness": -8
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#e9ebed"
          },
          {
            "saturation": 10
          },
          {
            "lightness": 69
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#2c2e33"
          },
          {
            "saturation": 7
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#bbc0c4"
          },
          {
            "saturation": -93
          },
          {
            "lightness": 31
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#bbc0c4"
          },
          {
            "saturation": -93
          },
          {
            "lightness": -2
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
        zoom: 15,
        styles: [{
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#e0efef"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [{
            "visibility": "on"
          }, {
            "hue": "#1900ff"
          }, {
            "color": "#c0e8e8"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "lightness": 100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }, {
            "lightness": 700
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#7dcdcd"
          }]
        }]
      });

        $scope.homes.map(function (markerData, i) {
          var latLng = new google.maps.LatLng(markerData.lat, markerData.lng);
          marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'images/home.png'
          });

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


