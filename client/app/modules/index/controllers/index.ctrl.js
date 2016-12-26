'use strict';
angular
  .module('com.module.index')
  .controller('index', function ($scope,Category) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    function getImage() {
      Category.findOne({
        filter: {
          order: 'created DESC',
          include: [
            'products'
          ],
          where:{
            name: 'IndexSlide'
          }
        }
      },function (result) {
        console.log(result);
        $scope.slides = result.products
      });
      Category.findOne({
        filter: {
          order: 'created DESC',
          include: [
            'products'
          ],
          where:{
            name: 'Concept'
          }
        }
      },function (result) {
        console.log(result);
        $scope.concept = result.products
      })
    };
    getImage();
  })
  .controller('reviewCtrl', function ($scope) {


  })

  .controller('ss2info', function () {

  })

  .controller('ss3slides', function () {

  });

