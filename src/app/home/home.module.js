    angular.module('vega.home', ['ui.router']);
    angular.module('vega.home').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('user.home', {
            url: '/home',
            templateUrl: 'home/home.tpl.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
    }]);
