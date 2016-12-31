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
            name: 'indexSlide'
          }
        }
      },function (result) {
        console.log(result);
        $scope.slides = result.products
      });
    }
    getImage();


  })
  .controller('footerCtrl', function ($scope,$rootScope,$timeout) {
    $scope.showChat = false;
    $scope.close = false;
    $timeout(function () {
      $scope.showChat = true;
    },5000);
    $scope.hideChat = function () {
      $scope.showChat = !$scope.showChat;
    };
    $scope.closeChat = function () {
      $scope.close = true;
    };
    if( $rootScope.contentChat && $rootScope.contentChat.length > 0){

    } else {
      $rootScope.contentChat = [];
    }
    $scope.submitChat = function (content) {
      $scope.value = '';
      $rootScope.contentChat.push(content);
    };
  });


