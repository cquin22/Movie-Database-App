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

class SearchController {

    /**
     * @ngdoc method
     * @description Constructor Controller
     */
    constructor($rootScope, $scope, tvShowService) {
        this.showInputControler = false;
        this.search = null;
        this.isActiveSearch = false;
        TV_SHOW.set(this, tvShowService);
        ROOT.set(this, $rootScope);

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

}

export default SearchController