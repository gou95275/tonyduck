import angular from 'angular'; 

angular.module('app',[])
    .controller('one', ['$rootScope','$scope', function($rootScope,$scope) {
        $scope.firstName = "John";
        $scope.lastName = "wcwcf";
    }])