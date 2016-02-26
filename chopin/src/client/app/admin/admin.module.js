(function () {
    'use strict';

    angular.module('app.admin', ['app.core']);

    angular.module('app.admin').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('admin', {
            url: '/admin',
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController',
            controllerAs: '$ctrl',
            authentication: true,
            admin: true
        });
    }

})();
