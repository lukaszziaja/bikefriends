(function() {
    'use strict';
    angular
        .module('bikefriendsApp')
        .factory('Advertisement', Advertisement);

    Advertisement.$inject = ['$resource', 'DateUtils'];

    function Advertisement ($resource, DateUtils) {
        var resourceUrl =  'api/advertisements/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.postDate = DateUtils.convertLocalDateFromServer(data.postDate);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.postDate = DateUtils.convertLocalDateToServer(copy.postDate);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.postDate = DateUtils.convertLocalDateToServer(copy.postDate);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
