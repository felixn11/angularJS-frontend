var cmsApp = angular.module('cmsApp');

cmsApp.controller('logoutController', ['$scope', '$auth', '$location', function($scope, $auth, $location) {
    $scope.logout = function(){

        console.log('logout');
        // Use Satellizer's $auth service to login
        $auth.logout().then(function() {
            console.log("logout succes");
            // If login is successful, set location to /
            $location.path('/');
        });
    }
}]);