'use strict';

angular.module('ec-admin.app', ['ec-admin'])
        .controller('ListCategoriesCtrl', [

            '$scope',
            'Util',
            'API',
            '$state',
            'AppConfig',

            function ($scope, Util, API, $state, AppConfig) {
                console.log("We are in list categories controller...");

            }
        ]);