(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('mesero', ['oc.lazyLoad',
        'ngRoute',
        //'ngAnimate',
        'angular-jwt',
        'auth0',
        'mvUtils',
        'mvAutocomplete',
        'mvUsuarios',
        'mvProductos',
        'mvSucursales',
        'mvProductosInsite',
        'mvContacts',
        'LangTables',
        'acHelper',
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/productos'});

        /*
        $routeProvider.when('/settings/controles', {
            templateUrl: 'controles/controles.html',
            controller: 'ControlesCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('controles/controles.js');
                }]
            }
        });
        */


        $routeProvider.when('/settings/usuarios', {
            templateUrl: 'usuarios/usuarios.html',
            controller: 'UsuariosCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('usuarios/usuarios.js');
                }]
            }
        });

        $routeProvider.when('/productos', {
            templateUrl: 'productos/productos.html',
            controller: 'ProductosCtrl',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('productos/productos.js');
                }]
            }
        });

        $routeProvider.when('/comandas', {
            templateUrl: 'comandas/comandas.html',
            controller: 'ComandasCtrl',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('comandas/comandas.js');
                }]
            }
        });


        $routeProvider.when('/working', {
            templateUrl: 'working/working.html',
            controller: 'WorkingCtrl',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('working/working.js');
                }]
            }
        });


        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('login/login.js');
                }]
            }
        });

    }]).controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$location'];
    function AppCtrl($scope, $location) {

        var vm = this;
        vm.hideLoader = true;
        vm.sub_menu_mobile_open = false;

        vm.goToPagina = goToPagina;


        function goToPagina(page) {
            $location.path(page);
        }

    }

})();
