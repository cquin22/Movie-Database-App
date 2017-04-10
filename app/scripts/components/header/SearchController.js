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
        this.showInputControler = false;
        this.search = null;
        this.isActiveSearch = false;
        TV_SHOW.set(this, tvShowService);
        ROOT.set(this, $rootScope);
        STATE.set(this, $state);

    }


    searchTvShow(){
        this.isActiveSearch = true;
        TV_SHOW.get(this).getBySearch(this.search)
        .then(response => {
            ROOT.get(this).$broadcast('handleBroadcast', response);
            this.isActiveSearch = false;
        }) 
    }

    enableInput(){
        this.showInputControler = !this.showInputControler;
    }

    goToHome(){
        STATE.get(this).go('home');
    }


    onChange(){
        this.search = this.search.replace(/[^\w\s]/gi, "");
    }


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