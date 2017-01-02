(function () {
  'use strict';
  angular
    .module('com.module.tours')
    .run(function ($rootScope, Tour, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Tours'), 'app.tours.list', 'fa-edit');

      Tour.find(function (tours) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Tours'), 'bg-red', 'ion-document-text', tours.length, 'app.tours.list');
      });

    });

})();
