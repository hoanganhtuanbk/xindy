'use strict';
angular
  .module('com.module.discover')
  .controller('discover', function ($scope,Category) {
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

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();
    $scope.open1 = function() {
      $scope.popup1 = !$scope.popup1;
    };
    $scope.popup1 = false;
    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    $scope.altInputFormats = ['M!/d!/yyyy'];

  })
  .controller('reviewDiscoverCtrl', function ($scope) {

    $scope.number = [{label: 1,url: '/images/onetrip/1.jpg'},
      {label: 2,url: '/images/onetrip/2.jpg'},
      {label: 3,url: '/images/onetrip/3.jpg'},
      {label: 4,url: '/images/onetrip/4.jpg'},
      {label: 5,url: '/images/onetrip/5.jpg'},
      {label: 6,url: '/images/onetrip/6.jpg'}];
    $scope.reviewActive = 3;
    $scope.slickConfig = {
      enabled: true,
      autoplay: true,
      draggable: true,
      autoplaySpeed: 3000,
      method: {},
      event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {

        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          if(currentSlide < 4){
            $scope.reviewActive = currentSlide + 3
          } else if (currentSlide == 4) {
            $scope.reviewActive = 1;
          }else if (currentSlide == 5) {
            $scope.reviewActive = 2;
          }
        }
      }
    };
  })


  .controller('detail', function ($scope,$stateParams,Tour){
    $scope.data = {};
    console.log($stateParams.location);
    Tour.findOne({
      filter:{
        where:{
          title: $stateParams.location
        }
      }

    },function (result) {
      $scope.data = result;
      console.log(result)
    })
  });

