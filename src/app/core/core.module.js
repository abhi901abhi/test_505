(function() {
    'use strict';

    angular.module('vega.core', [
        // // the angular modules
        // 'ngAnimate', 'ngAria', 'ngMaterial', 'ngLocalStorage', 'ngCookies', 'ngSanitize', 
        'ngResource', //'ngMessages',

        // // the building blocks
        // 'hercules.blocks.exception', 'hercules.blocks.router',
        // 'hercules.blocks.auth',
        'vega.home',
        'vega.labs',
        'vega.flags',

        // // the common modules and navigation areas
        // 'hercules.settings',
        // 'hercules.navigation',
        // 'hercules.admin',
        // // 'hercules.centralUser',
        // 'hercules.jobSearch',
        // 'hercules.picking',
        // 'hercules.flagging',
        // 'hercules.dispatch',
        // 'hercules.breakage',
        // 'hercules.binning',
        // 'hercules.receive',
        // 'hercules.coating',
        // 'hercules.printing',
        // 'hercules.rework',
        // 'hercules.deliveryOrders',
        // 'hercules.jobModification',
        // 'hercules.jobCancellation',
        // 'hercules.credit',
        // // the template cache
        'templates-app', //, 'templates-common',

        // // the third-party modules we are using
        'ui.router'
        // 'ui.bootstrap', 'ui.tree', 'textAngular', 'duScroll', 'highcharts-ng', 'ngLodash',
        // 'wj', 'cfp.hotkeys', 'isteven-multi-select', 'angularjs-dropdown-multiselect', //'m43nu.auto-height'
        // 'ui.select', 'checklist-model', 'ngStorage', 'ngAA', 'ngDialog',
        // 'blockUI', //Loading symbol
        // 'ngPromiseExtras', //$q.allSettled 'twygmbh.auto-height'
        // 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.pagination',
        // 'ngAudio', 'checklist-model', 'toaster', 'pasvaz.bindonce', 'oitozero.ngSweetAlert', 'ui.bootstrap.contextMenu'
    ]);
})();
