import angular from 'angular';
import _ from 'lodash';

angular.module('app', [])
    .controller('one', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.firstName = "tony";
        $scope.lastName = "uuu";
        
    }])
