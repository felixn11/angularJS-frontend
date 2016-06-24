var cmsApp = angular.module('cmsApp');

cmsApp.controller('authController', ['$scope', '$auth', '$state', function($scope, $auth, $state) {
    $scope.login = function() {
        var credentials = {
            'email': $scope.email,
            'password': $scope.password
        };
        // Use Satellizer's $auth service to login
        $auth.login(credentials)
            .then(function (data) {
                $state.go('cms');
            })
            .catch(function (data) {
                console.log("error");
            });
    }
    $scope.logout = function(){
        // Use Satellizer's $auth service to logout
        $auth.logout().then(function() {
            $state.go('login');
        });
    }
}]);