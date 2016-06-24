var cmsApp = angular.module('cmsApp');
    'use strict';

    angular
        .module('cmsApp')
        .controller('cmsController',['$scope', '$http', function($scope, $http){

    $scope.getBlogs = function(){
        $http.get('http://cannerberg-joc.nl/api/v1/blogs').success(function (blogs) {
            $scope.blogs = blogs;
        }).error(function (error) {
            $scope.error = error;
        });
    }
}]);