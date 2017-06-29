    angular.module('vega.labs', ['ui.router']);
    angular.module('vega.labs').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('user.labs', {
            url: '/labs',
            templateUrl: 'labs/labs.tpl.html',
            controller: 'labsController',
            controllerAs: 'vm'
        });
    }]);
