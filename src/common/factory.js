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
angular.module('vega').
directive('setClassWhenAtTop', function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
console.log(element);
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = $(element).offset().top; // get element's top relative to the document

            $win.on('scroll', function (e) {
                if ($($window).scrollTop() >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
});
})();
