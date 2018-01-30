(function() {
    'use strict';

    angular
        .module('bikefriendsApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('about', {
            parent: 'app',
            url: '/about',
            views: {
                'content@': {
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
