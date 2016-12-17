'use strict';
angular
  .module('com.module.onetrip')
  .controller('onetrip', function () {

  })
  .controller('TripCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: 'images/onetrip/1.jpg',
        id: 0
      },
      {
        image: 'images/onetrip/2.jpg',
        id: 1
      },
      {
        image: 'images/onetrip/3.jpg',
        id: 2
      },
      {
        image: 'images/onetrip/4.jpg',
        id: 3
      }
    ];

})
  .controller('reviewOnetripCtrl', function ($scope) {
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

  .controller('ss2info', function () {

  })

  .controller('ss3slides', function () {

  });

