(function () {
    'use strict';
    var app = angular.module("myProfile", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider.otherwise("/");
        $routeProvider
            .when("/", {
                templateUrl : "pages/home.html"
            })
            .when("/aboutme", {
                templateUrl : "pages/aboutme.html"
            })
            .when("/mywork", {
                templateUrl : "pages/mywork.html"
            })
            .when("/contactme", {
                templateUrl : "pages/contactme.html"
            });
    });
})();
