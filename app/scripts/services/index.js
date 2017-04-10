import angular from 'angular'
import TvShowService  from './TvShowService';


const user = angular
    .module('app.services', [])
    .factory('tvShowService', TvShowService)
    .name

export default user