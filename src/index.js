import angular from 'angular';
import 'resetcss';
import 'commoncss';

/*if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}*/
var app = angular.module('app', [])

app.controller('one', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.firstName = "tony";
    $scope.lastName = "fff";
}])
