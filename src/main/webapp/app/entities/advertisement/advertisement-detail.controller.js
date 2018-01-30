(function() {
    'use strict';

    angular
        .module('bikefriendsApp')
        .controller('AdvertisementDetailController', AdvertisementDetailController);

    AdvertisementDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Advertisement', 'User'];

    function AdvertisementDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Advertisement, User) {
        var vm = this;

        vm.advertisement = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('bikefriendsApp:advertisementUpdate', function(event, result) {
            vm.advertisement = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
