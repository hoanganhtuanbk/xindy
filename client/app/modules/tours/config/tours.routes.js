(function () {
  'use strict';
  angular
    .module('com.module.tours')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.tours', {
          abstract: true,
          url: '/tours',
          templateUrl: 'modules/tours/views/main.html'
        })
        .state('app.tours.list', {
          url: '',
          templateUrl: 'modules/tours/views/list.html',
          controllerAs: 'ctrl',
          controller: function (tours) {
            this.tours = tours;
          },
          resolve: {
            tours: [
              'ToursService',
              function (ToursService) {
                return ToursService.getTours();
              }
            ]
          }
        })
        .state('app.tours.add', {
          url: '/add',
          templateUrl: 'modules/tours/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, ToursService, tour) {
            this.tour = tour;
            this.formFields = ToursService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              ToursService.upsertTour(this.tour).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            tour: function () {
              return {};
            }
          }
        })
        .state('app.tours.edit', {
          url: '/:id/edit',
          templateUrl: 'modules/tours/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, ToursService, tour) {
            console.log(tour);
            this.tour = tour;
            this.formFields = ToursService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              ToursService.upsertTour(this.tour).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            tour: function ($stateParams, ToursService) {
              return ToursService.getTour($stateParams.id);
            }
          }
        })
        .state('app.tours.view', {
          url: '/:id',
          templateUrl: 'modules/tours/views/view.html',
          controllerAs: 'ctrl',
          controller: function (tour) {
            this.tour = tour;
          },
          resolve: {
            tour: function ($stateParams, ToursService) {
              return ToursService.getTour($stateParams.id);
            }
          }
        })
        .state('app.tours.delete', {
          url: '/:id/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($state, ToursService, tour) {
            ToursService.deleteTour(tour.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          },
          resolve: {
            tour: function ($stateParams, ToursService) {
              return ToursService.getTour($stateParams.id);
            }
          }
        });
    }
  );

})();
