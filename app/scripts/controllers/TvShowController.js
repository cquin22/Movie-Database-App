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
const STATE = new WeakMap();
const  TV_SHOW = new WeakMap();

class TvShowController {
    constructor($scope, $state, tvShowService) {
        var _self = this;
        _self.errorResponse = null;
        _self.show = null;
        _self.showsTvList = [];        
        STATE.set(this, $state);
        TV_SHOW.set(this, tvShowService);
        $scope.$on('handleBroadcast', function(event, response) {
            if(response.data.Error){
                _self.showsTvList = [];
                _self.errorResponse = response.data.Error;
            }else{
                _self.showsTvList = response.data.Search;
                if($state.$current.name != 'home'){
                    $state.go('home');
                }
            }
        });
    };

    /**
     * @ngdoc method
     * @name configService.setIdUser(config)
     * @param: {Object} config --> The config user
     * @description Set the config user
    */
    goMoreInfo(id){
        STATE.get(this).go('show-tv', {id: id });       
    }
}

export default TvShowController