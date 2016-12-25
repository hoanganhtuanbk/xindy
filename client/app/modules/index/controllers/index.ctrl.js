'use strict';
angular
  .module('com.module.index')
  .controller('index', function () {
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

  .controller('ss2info', function () {

  })

  .controller('ss3slides', function () {

  });

