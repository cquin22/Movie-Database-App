import angular from 'angular'
import TvShowService  from './TvShowService';

/**
 * @ngdoc module
 * @name services
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description
 * Index of the services modules
 */
const services = angular
    .module('app.services', [])
    .factory('tvShowService', TvShowService)
    .name

export default services