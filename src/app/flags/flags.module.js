    angular.module('vega.flags', ['ui.router']);
    angular.module('vega.flags').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('user.flags', {
            url: '/flags',
            templateUrl: 'flags/flags.tpl.html',
            controller: 'flagsController',
            controllerAs: 'vm'
        });
    }]);
