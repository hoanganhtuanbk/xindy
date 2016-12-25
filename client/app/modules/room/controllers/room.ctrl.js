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

  .controller('listRoom', function (NgMap,$scope,Home,HomesService) {
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

    getHomes();

    function getHomes() {
      return Home.find({
        filter: {
          order: 'created DESC'
        }
      },function (result) {
        $scope.homes = result;
        initCenter = {
          lat: result[0].lat,
          lng: result[0].lng
        };
        initMap();
        console.log(result)
      }).$promise;
    }
    var catchInfo = '';
    function initMap() {
      $scope.changeMap = function (lat,lng,imageSrc,name) {
        console.log(lng,lat,imageSrc);

        map.setCenter({
          lat: lat,
          lng:lng
        });
        var infowindow = new google.maps.InfoWindow({
          content: '<div id="content"><p><strong>'+name +'</strong></p><img  class="img-infoMap" src="'+imageSrc+'" /> <br/></div>',
          position : {
            lat: lat,
            lng:lng
          }
        });
        $scope.closeInfo = function () {
          infowindow.close(map);
          catchInfo = ''
        };
        // Hàm Open dùng để mở window
        if(catchInfo !== name){
          catchInfo = name;
          infowindow.open(map);
        }
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        center: initCenter,
        zoom: 15,
        styles: styleMap

      });

    }
  })

  .controller('ss3slides', function () {

  });

