'use strict';
angular.module('acadApp', ['oc.lazyLoad', 'ui.router', 'ui.bootstrap', 'angular-loading-bar', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$routeProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $routeProvider) {
            $ocLazyLoadProvider.config({ debug: false, events: true });
            $urlRouterProvider.otherwise('/log');
            $stateProvider
                .state('login', { templateUrl: 'Views/pages/login.html', url: '/log' })
                .state('home', {
                    templateUrl: 'views/pages/home.html', url: '/home', resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'acadApp',
                                files: ['scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js']
                            })
                        }
                    }
                })
                .state('profile', {
                    templateUrl: 'Views/pages/profile.html', url: '/pro', resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'acadApp',
                                files: ['scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js']
                            })
                        }
                    }
                })
                .state('register', {
                    templateUrl: 'Views/pages/register.html', url: '/reg', resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'acadApp',
                                files: ['scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js']
                            })
                        }
                    }
                })
        }]);



