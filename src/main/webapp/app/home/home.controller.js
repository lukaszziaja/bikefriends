(function () {
    'use strict';

    angular
        .module('bikefriendsApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function HomeController($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        $scope.myInterval = 2000;
        vm.register = register;
        vm.about = about;
        $scope.$on('authenticationSuccess', function () {
            getAccount();
        });
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/300',
                text: ['Dołącz do naszego klubu!', 'Pięknie widoki gwarantowane!',
                    'Nie siedź w domu, spędzaj czas aktywnie.',
                    'Poznawaj nowych ludzi!'][slides.length % 4],
                id: currIndex++
            });
        };


        getAccount();

        function getAccount() {
            Principal.identity().then(function (account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }

        function register() {
            $state.go('register');
        }

        function about(){
            $state.go('about');
        }

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
    }
})();



