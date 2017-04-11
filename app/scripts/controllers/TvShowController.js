import { EVENTS }  from '../constants.js';
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
        /**
         * @ngdoc model
         * @type undedined
         * @description Parameter that defines the error text
        */        
        _self.errorResponse = null;

        /**
         * @ngdoc model
         * @type {Array}
         * @description List of television shows
        */          
        _self.showsTvList = [];

        /**
         * @ngdoc WeakMap
         * @description Map $state to global class
        */                 
        STATE.set(this, $state);

        /**
         * @ngdoc WeakMap
         * @description Map tvShowService to global class
        */         
        TV_SHOW.set(this, tvShowService);

        /**
         * @ngdoc Listener
         * @description Listen event from success response
        */        
        $scope.$on(EVENTS.SUCCESS_RESPONSE, function(event, response) {
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
     * @name goMoreInfo()
     * @param: {Integer} id
     * @description Go to show-tv state
    */
    goMoreInfo(id){
        STATE.get(this).go('show-tv', {id: id });       
    }
}

export default TvShowController