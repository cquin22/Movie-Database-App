import { EVENTS }  from '../../constants.js';
/**
 * @ngdoc controller
 * @name MainController
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @requires $scope
 * @requires configServicer
 *
 * @description The Main Controller.
 */

const  TV_SHOW = new WeakMap();
const ROOT = new WeakMap();
const STATE = new WeakMap();


class SearchController {

    /**
     * @ngdoc method
     * @description Constructor Controller
     */
    constructor($rootScope, $state, tvShowService) {

        /**
         * @ngdoc model
         * @type boolean
         * @description Parameter that defines if show input search
        */         
        this.showInputControler = false;

        /**
         * @ngdoc model
         * @type undefined
         * @description Parameter for save value of search
        */         
        this.search = null;

        /**
         * @ngdoc model
         * @type boolean
         * @description Parameter that defines if the request is active
        */          
        this.isActiveSearch = false;

        /**
         * @ngdoc WeakMap
         * @description Map tvShowService to global class
        */          
        TV_SHOW.set(this, tvShowService);

        /**
         * @ngdoc WeakMap
         * @description Map $rootScope to global class
        */          
        ROOT.set(this, $rootScope);

        /**
         * @ngdoc WeakMap
         * @description Map $state to global class
        */          
        STATE.set(this, $state);

    }

    /**
     * @ngdoc method
     * @name searchTvShow()
     * @description: Find tv show
    */
    searchTvShow(){
        this.isActiveSearch = true;
        TV_SHOW.get(this).getBySearch(this.search)
        .then(response => {
            ROOT.get(this).$broadcast(EVENTS.SUCCESS_RESPONSE, response);
            this.isActiveSearch = false;
        }) 
    }

    /**
     * @ngdoc method
     * @name enableInput()
     * @description: toggle for show input
    */
    enableInput(){
        this.showInputControler = !this.showInputControler;
    }

    /**
     * @ngdoc method
     * @name goToHome()
     * @description: Go to home state
    */
    goToHome(){
        STATE.get(this).go('home');
    }

    /**
     * @ngdoc method
     * @name onChange()
     * @description: listen on change input value and clean model
    */
    onChange(){
        this.search = this.search.replace(/[^\w\s]/gi, "");
    }

    /**
     * @ngdoc method
     * @name showButtonBack()
     * @description: Function that show button back
     * @return {Boolean}
    */
    showButtonBack(){
        var showButton = false;
        console.log(STATE.get(this).$current.name);
        if(STATE.get(this).$current.name == 'show-tv'){
            showButton = true;
        }
        return showButton;
    }

}

export default SearchController