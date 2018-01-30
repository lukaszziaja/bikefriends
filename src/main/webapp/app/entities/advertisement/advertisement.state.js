(function() {
    'use strict';

    angular
        .module('bikefriendsApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('advertisement', {
            parent: 'entity',
            url: '/advertisement?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Advertisements'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/advertisement/advertisements.html',
                    controller: 'AdvertisementController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }]
            }
        })
        .state('advertisement-detail', {
            parent: 'advertisement',
            url: '/advertisement/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Advertisement'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/advertisement/advertisement-detail.html',
                    controller: 'AdvertisementDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Advertisement', function($stateParams, Advertisement) {
                    return Advertisement.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'advertisement',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('advertisement-detail.edit', {
            parent: 'advertisement-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/advertisement/advertisement-dialog.html',
                    controller: 'AdvertisementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Advertisement', function(Advertisement) {
                            return Advertisement.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('advertisement.new', {
            parent: 'advertisement',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/advertisement/advertisement-dialog.html',
                    controller: 'AdvertisementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                bodyOfAdvert: null,
                                postDate: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('advertisement', null, { reload: 'advertisement' });
                }, function() {
                    $state.go('advertisement');
                });
            }]
        })
        .state('advertisement.edit', {
            parent: 'advertisement',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/advertisement/advertisement-dialog.html',
                    controller: 'AdvertisementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Advertisement', function(Advertisement) {
                            return Advertisement.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('advertisement', null, { reload: 'advertisement' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('advertisement.delete', {
            parent: 'advertisement',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/advertisement/advertisement-delete-dialog.html',
                    controller: 'AdvertisementDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Advertisement', function(Advertisement) {
                            return Advertisement.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('advertisement', null, { reload: 'advertisement' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
