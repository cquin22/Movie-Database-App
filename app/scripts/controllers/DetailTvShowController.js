/**
 * @ngdoc controller
 * @name TvShowController
 * @name as: tvShow
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description
 * Controller. The parent controller the APP.
 *
 * This is the parent of all controllers and is the main application
 */
const  TV_SHOW = new WeakMap();


class DetailTvShowController {
    constructor($scope, $stateParams, tvShowService) {

            /**
             * @ngdoc model
             * @type boolean
             * @description Parameter that defines if show icon loader
            */           
            this.showLoader = false;

            /**
             * @ngdoc model
             * @type integer
             * @description Parameter that defines selected index season
            */ 
            this.indexSeason = 0;

            /**
             * @ngdoc model
             * @type Object
             * @description Object of configuration of tv series
            */ 
            this.tvShow = {info: null, episodes: null, seasons: null};

            /**
             * @ngdoc WeakMap
             * @description Map tvShowService to global class
            */   
            TV_SHOW.set(this, tvShowService);

            /**
             * @ngdoc model
             * @type Function
             * @description Initial function for load data
            */ 
            this.loadData($stateParams);

    };

    /**
     * @ngdoc method
     * @name loadData()
     * @param: {Function} params
     * @description Load default shows tv
    */
    loadData (params) {
        this.showLoader = true;
        TV_SHOW.get(this).getShowTvById(params.id)
        .then(response => {
            this.tvShow = response.data;            
            return this.getSeasonsBySerie(params.id, 1);
        })
    }

    /**
     * @ngdoc method
     * @name compileSeasions()
     * @param: {Integer} totalSeasons
     * @description: Build array of seasons
     * @return: {Array}
    */
    compileSeasions(totalSeasons){
        var seasons = [];
        for(var i = 0; i < totalSeasons; i++){
            seasons.push(i);
        }
        return seasons;
    }

    /**
     * @ngdoc method
     * @name getSeasonsBySerie()
     * @param: {Integer} id
     * @param: {Integer} season
     * @description: Get season by series
    */
    getSeasonsBySerie(id, season){
        this.tvShow.episodes = null;
        this.showLoader = true;
        this.indexSeason = season;
        TV_SHOW.get(this).getSeasonsBySerie(id, season)
        .then(response => {
            var seasons = this.compileSeasions(response.data.totalSeasons);
            this.tvShow.episodes = response.data.Episodes;
            this.tvShow.seasons = seasons;
            this.showLoader = false;
        })
    }    

}

export default DetailTvShowController