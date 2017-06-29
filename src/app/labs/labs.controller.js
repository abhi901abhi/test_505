(function() {
    'use strict';

    angular.module('vega.labs')
        .controller('labsController', ['$scope','LabFactory', function($scope, LabFactory) {
            var vm = this;
            vm.title = 'Vega Labs';
            LabFactory.query({}, function(response) {
                vm.labs = response;
            }, function(response) {
                console.log(response.data);

            });

        }]);

})();
