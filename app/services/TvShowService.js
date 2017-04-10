import { CONFIG }  from '../constants.js';

/**
 * @ngdoc service
 * @name TvShowService
 *
 *  @description Provides service when get and config tv shows
 *  @author Cristian Quintero <cristianqr22@gmail.com>
 *  @requires $http
 */


const HTTP = new WeakMap();
var list = null;

class TvShowService
{
    /**
     * @ngdoc method
     * @name Constructor Service
     * @description Get the id cookie
     */
    constructor($http)
    {
        HTTP.set(this, $http);

    }


    getBySearch(search){
        return HTTP.get(this).get(CONFIG.URL + '/?s=' + search + '&plot=full&r=json&type=series');
    }

    getShowTvById(id){
        return HTTP.get(this).get(CONFIG.URL + '/?i=' + id + '&plot=full&r=json');
    }

    getSeasonsBySerie(id, season){
        return HTTP.get(this).get(CONFIG.URL + '/?i=' + id + '&plot=full&r=json&Season=' + season);
    }    

    /**
     * @ngdoc static method
     * @name Instantiate the Dependency injection
     * @description Get the id cookie
     */
    static initService($http){
        return new TvShowService($http);
    }
}

TvShowService.initService.$inject = ['$http' ];



export default TvShowService.initService;