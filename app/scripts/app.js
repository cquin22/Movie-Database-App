import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from  'angular-animate';
import angularAria from  'angular-aria';
import angularMaterial from  'angular-material';
import controllers from './controllers/index';
import views from './views/index';
import services from './services/index'

/**
 * @ngdoc root module
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @name movieDataBaseApp
 * @description Initial application module
 */
const root = angular
    .module('movieDataBaseApp', [
        uiRouter,
        angularAnimate,
        angularAria,
        angularMaterial,
        views,
        controllers,
        services
    ])


document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['movieDataBaseApp']))

export default root