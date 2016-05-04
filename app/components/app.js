(function() {

    'use strict';

angular
    .module('cmsApp', ['ui.router', 'satellizer', 'ngStorage', 'ngRoute'])
    .config(function($stateProvider, $authProvider, $urlRouterProvider, $routeProvider) {

        $authProvider.loginUrl = 'http://api.cms/auth/login';
        $urlRouterProvider.otherwise('/auth');

        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: 'app/components/authentication/authView.html',
                controller: 'authController as auth'
            });
            /*
            .state('accepted', {
                url: '/users',
                templateUrl: '../views/....',
                controller: '...'
            });*/
    });
})();




