(function() {
    'use strict';

    // var core = angular.module('hercules.core');
    // core.config(['$mdThemingProvider', mdConfig]);
    // core.config(toastrConfig);
    // /* @ngInject */
    // function toastrConfig(toastr) {


    //     toastr.options = {
    //         timeOut: 4000,
    //         positionClass: 'toast-bottom-right',
    //         newestOnTop: true,
    //         closeButton: true,
    //         showMethod: 'slideDown',
    //         hideMethod: 'slideUp',
    //         closeMethod: 'slideUp',
    //         preventDuplicates: true,
    //         progressBar: true,
    //         autoDismiss: true
    //     };
    // }

    // core.config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    //     //configure after user signin redirect state
    //     //  $authProvider.afterSigninRedirectTo = 'home';
    //     //configure after user signout redirect state
    //     //  $authProvider.afterSignoutRedirectTo = 'login';


    // });
    // var date = new Date();
    // var year = date.getFullYear();

    // var config = {
    //     appErrorPrefix: '[Hercules Error] ', //Configure the exceptionHandler decorator
    //     appTitle: 'Hercules',
    //     brand: 'Hercules',
    //     year: year,
    //     version: '1.0.0',

    // };


    // core.value('config', config);

    // core.value('localStorage', window.localStorage);

    // core.config(['ngDialogProvider', function(ngDialogProvider) {
    //     ngDialogProvider.setDefaults({
    //         className: 'ngdialog-theme-default',
    //         plain: true,
    //         showClose: true,
    //         closeByDocument: true,
    //         closeByEscape: true
    //     });
    // }]);
    // core.config(configure);

    // core.run(runner);

    // /* @ngInject */
    // function configure($logProvider, exceptionHandlerProvider) {

    //     // turn debugging off/on (no info or warn)
    //     if ($logProvider.debugEnabled) {
    //         $logProvider.debugEnabled(true);
    //     }

    //     // Configure the common exception handler
    //     exceptionHandlerProvider.configure(config.appErrorPrefix);

    // }

    // function runner($rootScope) {
    //     // ServerInformation:$rootScope.serverInformation = ServerInformation.query();

    // }

    // function mdConfig($mdThemingProvider) {
    //     $mdThemingProvider.theme('default')
    //         .primaryPalette('indigo', {
    //             'default': '500'
    //         })
    //         .accentPalette('cyan', {
    //             'default': '500'
    //         })
    //         .warnPalette('red', {
    //             'default': '500'
    //         })
    //         .backgroundPalette('grey');
    // }

    // core.config(blockuiconfiguration);

    // function blockuiconfiguration(blockUIConfig) {
    //     //https://github.com/McNull/angular-block-ui
    //     // Change the default overlay message
    //     blockUIConfig.message = 'Please wait!';
    //     // Change the default delay to 100ms before the blocking is visible
    //     blockUIConfig.delay = 100;
    //     //By default the BlockUI module will start a block whenever the Angular $http service has an pending request. 
    //     //If you don't want this behaviour and want to do all the blocking manually you can change this value to false.
    //     // Disable automatically blocking of the user interface
    //     blockUIConfig.autoBlock = true;
    //     // Disable clearing block whenever an exception has occurred
    //     blockUIConfig.resetOnException = true;
    //     // Provide the custom template via a url
    //     //blockUIConfig.templateUrl = 'my-templates/block-ui-overlay.html';
    // }

    // core.config(uiSelectConfiguration);

    // function uiSelectConfiguration(uiSelectConfig) {
    //     uiSelectConfig.theme = 'selectize';
    // }



})();
