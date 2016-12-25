(function () {
  'use strict';
  angular
    .module('com.module.homes')
    .service('HomesService', function (CoreService, Home, gettextCatalog) {
      this.getHomes = function () {
        return Home.find({
          filter: {
            order: 'created DESC'
          }
        },function (result) {
          return result;
          console.log(result)
        }).$promise;
      };

      this.getHome = function (id) {
        return Home.findById({
          id: id
        }).$promise;
      };

      this.upsertHome = function (home) {
        return Home.upsert(home).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Home saved'),
              gettextCatalog.getString('Your home is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastSuccess(
              gettextCatalog.getString('Error saving home '),
              gettextCatalog.getString('This home could no be saved: ') + err
            );
          }
        );
      };

      this.deleteHome = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Home.deleteById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Home deleted'),
                gettextCatalog.getString('Your home is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting home'),
                gettextCatalog.getString('Your home is not deleted! ') + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };

      this.getFormFields = function () {
        return [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Name'),
              required: true
            }
          },
          {
            key: 'zone',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Zone'),
              required: true
            }
          },
          {
            key: 'price',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: gettextCatalog.getString('Price')
            }
          },
          {
            key: 'url',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Url')
            }
          },
          {
            key: 'numberReview',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: gettextCatalog.getString('Review')
            }
          },
          {
            key: 'lng',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: gettextCatalog.getString('Lng')
            }
          },
          {
            key: 'lat',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: gettextCatalog.getString('Lat')
            }
          },
          {
            key: 'startDate',
            type: 'datepicker',
            templateOptions: {
              label: gettextCatalog.getString('Start Time')
            }
          },
          {
            key: 'endDate',
            type: 'datepicker',
            templateOptions: {
              label: gettextCatalog.getString('End Date'),
              required: true
            }
          }
        ];
      };

    });

})();
