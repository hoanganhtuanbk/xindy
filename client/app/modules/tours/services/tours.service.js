(function () {
  'use strict';
  angular
    .module('com.module.tours')
    .service('ToursService', function (CoreService, Tour, gettextCatalog) {
      this.getTours = function () {
        return Tour.find({
          filter: {
            order: 'created DESC'
          }
        }).$promise;
      };

      this.getTour = function (id) {
        return Tour.findById({
          id: id
        }).$promise;
      };

      this.upsertTour = function (tour) {
        return Tour.upsert(tour).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Tour saved'),
              gettextCatalog.getString('Your tour is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastSuccess(
              gettextCatalog.getString('Error saving tour '),
              gettextCatalog.getString('This tour could no be saved: ') + err
            );
          }
        );
      };

      this.deleteTour = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Tour.deleteById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Tour deleted'),
                gettextCatalog.getString('Your tour is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting tour'),
                gettextCatalog.getString('Your tour is not deleted! ') + err);
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
            key: 'title',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Title'),
              required: true
            }
          },
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Name'),
              required: true
            }
          },
          {
            key: 'description',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Description'),
              required: true
            }
          },
          {
            key: 'itinerary',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Itinerary'),
              required: true
            }
          },
          {
            key: 'note',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Note'),
              required: true
            }
          },
          {
            key: 'include',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Include'),
              required: true
            }
          },
          {
            key: 'url Video',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Url Video')
            }
          },
          {
            key: 'content',
            type: 'textarea',
            templateOptions: {
              label: gettextCatalog.getString('Content'),
              required: true
            }
          },
          {
            key: 'image',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Image')
            }
          }
        ];
      };

    });

})();
