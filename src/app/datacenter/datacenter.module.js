    angular.module('vega.datacenter', ['ui.router']);
    angular.module('vega.datacenter').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('user.datacenter', {
            url: '/datacenter',
            templateUrl: 'datacenter/datacenter.tpl.html',
            controller: 'datacenterController',
            controllerAs: 'vm'
        });
    }]);
