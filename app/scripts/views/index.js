import angular from 'angular';
import { HomeComponent} from './Home';
import { DetailTvShow} from './DetailTvShow';
import { HeaderComponent } from '../components/header/Header';
import { ShowCard } from '../components/show-card/ShowCard';

/**
 * @ngdoc module
 * @name views
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description
 * Index of the views modules
 */
const views = angular
    .module('app.views', [])
    .component('home', HomeComponent)
    .component('detailTvShow', DetailTvShow)
    .component('headerComponent', HeaderComponent)
    .component('showCard', ShowCard)     
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
            .state('show-tv', {
                url: '/show-tv/:id',
                component: 'detailTvShow'
            })            
        $urlRouterProvider.otherwise('/')
    })
    .name

export default views