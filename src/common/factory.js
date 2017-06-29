(function() {
    'use strict';

    /**
     * All the factories for vega are here
     */
    angular.module('vega.factories', []);

    // LabFactory
    angular.module('vega.factories')
        .factory('LabFactory', LabFactory);

    function LabFactory($resource) {
        return $resource('vega/v1/api/lab/:docController', {
            id: '@id',
            docController: '@docController'
        }, {
            'queryMaster': {
                method: 'GET',
                isArray: true,
                params: {
                    docController: 'master'
                }
            },
            'query': {
                method: 'GET',
                isArray: true,
            },
            'get': {
                method: 'GET',
                isArray: true
            },
            'getOne': {
                method: 'GET'
            },
            'update': {
                method: 'PUT'
            },
            'delete': {
                method: 'DELETE'
            },
            'activate': {
                method: 'DELETE'
            }
        });
    }

})();
