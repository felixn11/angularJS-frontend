(function() {
    'use strict';
    angular
        .module('cmsApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {
            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = 'http://cms.nop/auth/login';
            $stateProvider
                .state('lessons', {
                    url: '/',
                    views: {
                        nav: {
                            templateUrl: 'app/components/header/header.html'
                        },
                        lessons:{
                            templateUrl: 'app/components/cms/cmsView.html'
                        }
                    },
                    //templateUrl: 'app/components/cms/cmsView.html',
                    controller: 'cmsController as cms',
                    resolve: {
                        loginRequired: loginRequired
                    }
                })

                .state('login', {
                    url: '/login',
                    controller: 'loginController',

                    views: {
                        login: {
                            templateUrl: 'app/components/authentication/loginView.html'
                        }
                    },
                    //templateUrl: 'app/components/authentication/loginView.html',

                    resolve: {
                        skipIfLoggedIn: skipIfLoggedIn
                    }
                })

                .state('logout', {
                url: '/logout',
                template: null,
                controller: 'LogoutCtrl'
                });



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