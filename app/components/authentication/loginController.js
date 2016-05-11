var cmsApp = angular.module('cmsApp');

cmsApp.controller('loginController', ['$scope', '$auth', '$state', function($scope, $auth, $state) {

    $scope.login = function() {
        var credentials = {
            email: $scope.email,
            password: $scope.password
        };

        // Use Satellizer's $auth service to login
        $auth.login(credentials)
            .then(function (data) {
                console.log("succes login");
                // If login is successful, set location to /
                $state.go('lessons');
                //$location.path('/lessons');
            })
            .catch(function (data) {
                console.log("error");
            });
    }
}]);