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
            this.showLoader = false;
            this.indexSeason = 0;
            this.tvShow = {info: null, episodes: null, seasons: null};
            TV_SHOW.set(this, tvShowService);
            this.loadData($stateParams);

    };


    loadData (params) {
        this.showLoader = true;
        TV_SHOW.get(this).getShowTvById(params.id)
        .then(response => {
            this.tvShow = response.data;            
            return this.getSeasonsBySerie(params.id, 1);
        })
    }

    compileSeasions(totalSeasons){
        var seasons = [];
        for(var i = 0; i < totalSeasons; i++){
            seasons.push(i);
        }
        return seasons;
    }

    getSeasonsBySerie(id, season){
        if(id != 0){
            this.indexSeason = id;
        }
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