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


class TvShowService
{
    /**
     * @ngdoc method
     * @name Constructor Service
    */
    constructor($http)
    {
        HTTP.set(this, $http);

    }

    /**
     * @ngdoc method
     * @name tvShowService.getBySearch()
     * @param: {String} search --> The search input control
     * @description Get series by  search input control
    */
    getBySearch(search){
        return HTTP.get(this).get(CONFIG.URL + '/?s=' + search + '&plot=full&r=json&type=series');
    }

    /**
     * @ngdoc method
     * @name tvShowService.getShowTvById()
     * @param: {Integer} id --> The serie id
     * @description Get series by id
    */
    getShowTvById(id){
        return HTTP.get(this).get(CONFIG.URL + '/?i=' + id + '&plot=full&r=json');
    }

    /**
     * @ngdoc method
     * @name tvShowService.getSeasonsBySerie()
     * @param: {Integer} id --> The serie id
     * @param: {Integer} season --> The number season
     * @description Get seasons by serie
    */
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