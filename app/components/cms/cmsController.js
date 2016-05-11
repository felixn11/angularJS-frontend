var cmsApp = angular.module('cmsApp');
    'use strict';

    angular
        .module('cmsApp')
        .controller('cmsController',['$scope', '$http', function($scope, $http){

    $scope.getLessons = function(){
        console.log('get lessons');
        $http.get('http://backend/api/v1/lessons').success(function (lessons) {
            $scope.lessons = lessons.data;
        }).error(function (error) {
            $scope.error = error;
        });
    }
}]);