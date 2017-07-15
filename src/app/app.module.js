 angular.module('vega', [
     'vega.core',
     'vega.factories',
     'ui.router'
 ]);


 angular.module('vega').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/home');

     //Parent State
     $stateProvider.state('user', {
         url: '',
         abstract: true,
         views: {
             "sidebar": {
                 templateUrl: 'navigation/sidebar.tpl.html'
             },
             "header": {
                 templateUrl: 'navigation/header.tpl.html',
                 controller: 'headerctrl',
            controllerAs: 'vm'
             },
             "content": {
                 template: '<div ui-view></div>'
             },
             "footer": {
                 templateUrl: 'navigation/footer.tpl.html'
             }
         }
     });
 }]);
