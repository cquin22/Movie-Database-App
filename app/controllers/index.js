import angular from 'angular'
import  tvShowController from './TvShowController';
import detailTvShowController from './DetailTvShowController';

/**
 * @ngdoc module
 * @name controllers
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description
 * Index of the module
 */
const controllers = angular
    .module('app.controllers', [])
    .controller('tvShowController', tvShowController)
    .controller('detailTvShowController', detailTvShowController)
    .name

export default controllers