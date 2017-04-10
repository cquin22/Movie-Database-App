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
        this.show = null;
        _self.showsTvList = [];        
        STATE.set(this, $state);
        TV_SHOW.set(this, tvShowService);
        $scope.$on('handleBroadcast', function(event, message) {
           _self.showsTvList = message.data.Search;
        });
    };


    goMoreInfo(id){
        STATE.get(this).go('show-tv', {id: id });       
    }
}

export default TvShowController