(function() {
    'use strict';
    angular
        .module('cmsApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {
            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = 'http://cannerberg-joc.nl/auth/login';
            $stateProvider
                .state('cms', {
                    url: '/',
                    views: {
                        nav: {
                            templateUrl: 'app/components/header/header.html'
                        },
                        blogs:{
                            templateUrl: 'app/components/cms/cmsView.html'
                        }
                    },
                    controller: 'cmsController as cms',
                    resolve: {
                        loginRequired: loginRequired
                    }
                })
                .state('login', {
                    url: '/login',
                    controller: 'authController',
                    views: {
                        login: {
                            templateUrl: 'app/components/authentication/authView.html'
                        }
                    },
                    resolve: {
                        skipIfLoggedIn: skipIfLoggedIn
                    }
                })

            function skipIfLoggedIn($q, $auth) {
                console.log('skipifloggedin');
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    state.change('home');
                    deferred.reject();
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }

            function loginRequired($q, $location, $auth) {
                console.log("loginrequired");
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    console.log('authenticated');
                    deferred.resolve();
                } else {
                    $location.path('/login');
                }
                return deferred.promise;
            }

            $urlRouterProvider.otherwise('/');
        });

})();