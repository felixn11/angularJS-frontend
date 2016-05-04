(function() {
    'use strict';

    angular
        .module('cmsApp')
        .controller('authController', AuthController);


    function AuthController($auth, $state) {

        var vm = this;

        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            console.log(credentials);

            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {
                // If login is successful, redirect to the users state
                console.log("succes");

                //$state.go('users', {});
            }, function(error) {
                console.log(error);
            });
        }
    }
})();