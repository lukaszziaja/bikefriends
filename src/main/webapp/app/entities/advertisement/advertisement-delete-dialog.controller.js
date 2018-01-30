(function() {
    'use strict';

    angular
        .module('bikefriendsApp')
        .controller('AdvertisementDeleteController',AdvertisementDeleteController);

    AdvertisementDeleteController.$inject = ['$uibModalInstance', 'entity', 'Advertisement'];

    function AdvertisementDeleteController($uibModalInstance, entity, Advertisement) {
        var vm = this;

        vm.advertisement = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Advertisement.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
