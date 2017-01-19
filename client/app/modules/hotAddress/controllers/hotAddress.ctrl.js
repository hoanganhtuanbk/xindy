'use strict';
angular
  .module('com.module.hotAddress')

  .controller('hotAddress', function (NgMap,$scope,$rootScope,Home,HomesService) {
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
    var map;
    var marker;
    $scope.address = [{
      name: 'Madame Lan Restaurant',
      location: '4 Bạch Đằng, Thạch Thang, Đà Nẵng, Thạch Thang Q. Hải Châu Đà Nẵng',
      type: 'Restaurant',
      imageSrc: 'images/common-space/1.jpg',
      lat: 16.081449,
      lng: 108.223255
    },{
      name: 'Runam Bistro',
      lcation: '22 - 24 Bạch Đằng, Quận Hải Châu, Đà Nẵng',
      type: 'Restaurant',
      imageSrc: 'images/common-space/2.jpg',
      lat: 16.079497,
      lng: 108.223715
    },{
      name: 'Banh Canh Nga (Local Noodles) ',
      lcation: '78 Nguyen Chi Thanh, Hải Châu 1, Hải Châu, Da Nang',
      type: 'Restaurant',
      imageSrc: 'images/common-space/3.jpg',
      lat: 16.074409,
      lng: 108.220840
    },{
      name: 'Boulevard Gelato and Coffee',
      lcation: '77 Trần Quốc Toản, Hải Châu District, Da Nang',
      type: 'Café and Desserts',
      imageSrc: 'images/common-space/4.jpg',
      lat: 16.066222,
      lng: 108.221008
    },{
      name: 'Cong Café ',
      lcation: '96-98 Bạch Đằng, Hải Châu, Đà Nẵng',
      type: 'Café and Desserts',
      imageSrc: 'images/common-space/5.jpg',
      lat: 16.069165,
      lng: 108.224856
    },{
      name: 'Memory Lounge',
      lcation: '07 Bạch Đằng, Hải Châu 1, Hải Châu, Đà Nẵng ',
      type: 'Café and Desserts',
      imageSrc: 'images/common-space/6.jpg',
      lat: 16.071640,
      lng: 108.225124
    },{
      name: 'Dừa Bến Tre (Desserts)',
      lcation: '196 Bạch Đằng, Phước Ninh, Q. Hải Châu, Đà Nẵng',
      type: 'Café and Desserts',
      imageSrc: 'images/common-space/7.jpg',
      lat: 16.065548,
      lng: 108.224298
    },{
      name: 'On The Radio Bar (Live Music)',
      lcation: '35 Thái Phiên, Phước Ninh, Q. Hải Châu, Đà Nẵng',
      type: 'Bars, Pubs, and Night Clubs',
      imageSrc: 'images/common-space/8.jpg',
      lat: 16.064932,
      lng: 108.222505
    },{
      name: 'Luna Pub (Italian and Western)',
      lcation: '9 Trần Phú, Thạch Thang, Hải Châu, Đà Nẵng',
      type: 'Bars, Pubs, and Night Clubs',
      imageSrc: 'images/common-space/9.jpg',
      lat: 16.079795,
      lng: 108.223106
    },{
      name: 'Bamboo 2 Bar',
      lcation: '216 Bạch Đằng, Phước Ninh, Hải Châu, Đà Nẵng',
      type: 'Bars, Pubs, and Night Clubs',
      imageSrc: 'images/common-space/10.jpg',
      lat: 16.064929,
      lng:  108.224094
    },{
      name: 'Golden Pine Pub ',
      lcation: '52 Bạch Đằng, Hải Châu 1, Thanh Khê, Đà Nẵng',
      type: 'Bars, Pubs, and Night Clubs',
      imageSrc: 'images/common-space/11.jpg',
      lat: 16.072600,
      lng:  108.224754
    },{
      name: 'New Phuong Dong Club (Da Nang’s Hottest Night Club)',
      lcation: '20 Đống Đa, Thuận Phước, Hải Châu, Đà Nẵng',
      type: 'Bars, Pubs, and Night Clubs',
      imageSrc: 'images/common-space/12.jpg',
      lat: 16.082578,
      lng: 108.221135
    },{
      name: 'Ala Carte Hotel (Rooftop) ',
      lcation: 'Corner of Vo Nguyen Giap Street & Duong Dinh Nghe Street, Sơn Trà, Đà Nẵng ',
      type: 'Lounge & Views ',
      imageSrc: 'images/common-space/13.jpg',
      lat: 16.068779,
      lng: 108.244900
    },{
      name: 'Novotel Hotel (Rooftop ~ Sky36 Bar)',
      lcation: '36, Đường Bạch Đằng, Phường Thạch Thang, Quận Hải Châu, Đà Nẵng',
      type: 'Lounge & Views ',
      imageSrc: 'images/common-space/14.jpg',
      lat: 16.077902,
      lng: 108.224613
    }];
    function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center:  new google.maps.LatLng($scope.address[0].lat, $scope.address[0].lng),
        zoom: 15,
        styles: styleMap,

      });

        $scope.address.map(function (markerData, i) {
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
    initMap();

  });


