import angular from 'angular';
import 'angular-ui-router'

import 'resetcss';
import 'commoncss';
import 'font';
import './css/style.css';

var headernav = require('@/headernav.html');


/*if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}*/
angular.module('app', ['ui.router'])
    .value("myProfile", {
        QQ: "736726698@qq.com",
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }])
    .component('headerNav', {
        template: headernav,
        controller: function() {}
    })
