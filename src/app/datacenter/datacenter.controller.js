(function() {
    'use strict';

    angular.module('vega.datacenter')
        .controller('datacenterController', ['$scope','$modal', function($scope,$modal) {
            var vm = this;
            alert(123);
          vm.imagedata=[
          {
            id:1,
            image:"4.jpg",
            price:"$125"
          },{
            id:2,
            image:"5.jpg",
            price:"$225"
          },{
            id:3,
            image:"6.jpg",
            price:"$325"
          },{
            id:4,
            image:"7.jpg",
            price:"$425"
          }];
   
vm.showmodalwindow=function(id){
alert(1234);
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: function($modalInstance){
        var vm=this;
        vm.cancel=function(){
$modalInstance.dismiss('cancel');
        };
      },
      controllerAs:"vm",
      size: "lg"
  
    });


};
        }]);

})();
