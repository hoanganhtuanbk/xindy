'use strict';
angular
  .module('com.module.onetrip')
  .controller('onetrip', function () {

  })
  .controller('TripCtrl', function ($scope,Category) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    Category.findOne({
      filter: {
        order: 'created DESC',
        include: [
          'products'
        ],
        where:{
          name: 'exploreSlide'
        }
      }
    },function (result) {
      console.log(result);
      $scope.slides = result.products
    });

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


  .controller('detail', function ($scope,$stateParams,Tour){
    $scope.data = {};
    Tour.findOne({
      filter:{
        where:{
          title: $stateParams.text
        }
      }

    },function (result) {
      $scope.data = result;
      console.log(result)
    })
  });

