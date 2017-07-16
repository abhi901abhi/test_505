(function() {
    'use strict';
    angular.module('vega.home')
        .controller('homeController', ['$scope', '$http', function($scope, $http) {
            var vm = this;
            vm.title = 'homeController';
           
        }]);

})();
