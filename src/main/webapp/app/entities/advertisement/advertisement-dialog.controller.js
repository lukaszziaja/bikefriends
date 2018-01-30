(function() {
    'use strict';

    angular
        .module('bikefriendsApp')
        .controller('AdvertisementDialogController', AdvertisementDialogController);

    AdvertisementDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Advertisement', 'User'];

    function AdvertisementDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Advertisement, User) {
        var vm = this;

        vm.advertisement = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.advertisement.id !== null) {
                Advertisement.update(vm.advertisement, onSaveSuccess, onSaveError);
            } else {
                Advertisement.save(vm.advertisement, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('bikefriendsApp:advertisementUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.postDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
