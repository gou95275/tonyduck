import angular from 'angular';
import _ from 'lodash';
//import reset from '../lib/css/reset.css'
import 'resetcss'
import 'commoncss'

angular.module('app', [])
    .controller('one', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.firstName = "tony";
        $scope.lastName = "ppp";
    }])
