(function () {
    'use strict';
    var app = angular.module('app', ['ngRoute']);
    app.constant('routes');

    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {
        $routeProvider.when("/", {
            controller: "anasayfa",
            templateUrl: "/app/anasayfa/anasayfa.html"
        });
        $routeProvider.when("/admin", {
            controller: "admin",
            templateUrl: "/app/admin/admin.html"
        });
        $routeProvider.when("/haber", {
            controller: "haber",
            templateUrl: "/app/haber/haber.html"
        });
        $routeProvider.when("/guncelleme", {
            controller: "guncelleme",
            templateUrl: "/app/guncelleme/guncelleme.html"
        });
        $routeProvider.when("/urun", {
            controller: "urun",
            templateUrl: "/app/urun/urun.html"
        });
        $routeProvider.otherwise({ redirectTo: "/" });
    }
})();
