(function () {
  'use strict';
  angular
    .module('com.module.homes')
    .run(function ($rootScope, Home, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Accommodation'), 'app.homes.list', 'fa-edit');

      Home.find(function (homes) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Accommodation'), 'bg-red', 'ion-document-text', homes.length, 'app.homes.list');
      });

    });

})();
