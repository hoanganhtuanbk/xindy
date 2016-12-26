(function () {
  'use strict';
  angular
    .module('com.module.homes')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.homes', {
          abstract: true,
          url: '/homes',
          templateUrl: 'modules/homes/views/main.html'
        })
        .state('app.homes.list', {
          url: '',
          templateUrl: 'modules/homes/views/list.html',
          controllerAs: 'ctrl',
          controller: function (homes) {
            this.homes = homes;
          },
          resolve: {
            homes: [
              'HomesService',
              function (HomesService) {
                return HomesService.getHomes();
              }
            ]
          }
        })
        .state('app.homes.add', {
          url: '/add',
          templateUrl: 'modules/homes/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, HomesService, home,FileUploader, CoreService) {
            this.home = home;
            this.formFields = HomesService.getFormFields();
            this.formOptions = {};
            this.data = {};
            this.getNameFileUpload = function (result) {
              this.home.imageSrc = CoreService.env.apiUrl+'containers/files/download/'+result
            }
            this.uploader = new FileUploader({
              url: CoreService.env.apiUrl + '/containers/files/upload',
              formData: [
                {
                  key: 'value'
                }
              ]
            });
            console.log(this.uploader)
            this.submit = function () {
              HomesService.upsertHome(this.home).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            home: function () {
              return {};
            }
          }
        })
        .state('app.homes.edit', {
          url: '/:id/edit',
          templateUrl: 'modules/homes/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, HomesService, home,FileUploader, CoreService) {
            this.home = home;
            this.formFields = HomesService.getFormFields();
            this.formOptions = {};
            this.uploader = new FileUploader({
              url: CoreService.env.apiUrl + '/containers/files/upload',
              formData: [
                {
                  key: 'value'
                }
              ]
            });
            this.submit = function () {
              HomesService.upsertHome(this.home).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            home: function ($stateParams, HomesService) {
              return HomesService.getHome($stateParams.id);
            }
          }
        })
        .state('app.homes.view', {
          url: '/:id',
          templateUrl: 'modules/homes/views/view.html',
          controllerAs: 'ctrl',
          controller: function (home) {
            this.home = home;
          },
          resolve: {
            home: function ($stateParams, HomesService) {
              return HomesService.getHome($stateParams.id);
            }
          }
        })
        .state('app.homes.delete', {
          url: '/:id/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($state, HomesService, home) {
            HomesService.deleteHome(home.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          },
          resolve: {
            home: function ($stateParams, HomesService) {
              return HomesService.getHome($stateParams.id);
            }
          }
        });
    }
  );

})();
