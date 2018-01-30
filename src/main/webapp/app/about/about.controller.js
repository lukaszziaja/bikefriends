(function () {
    'use strict';

    angular
        .module('bikefriendsApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function AboutController($scope, Principal, LoginService, $state) {
        var vm = this;
    }
})();



