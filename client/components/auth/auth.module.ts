'use strict';

angular.module('caralivroApp.auth', [
  'caralivroApp.constants',
  'caralivroApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
