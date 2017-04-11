import controller from '../controllers/TvShowController';

/**
 * @ngdoc component
 * @name HomeComponent
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description: App home page
 *
 */
export const HomeComponent = {
    controller,
    template: `
        <div class="header wrap container-fluid">
            <div class="row" ng-if="$ctrl.showsTvList.length == 0">
                <div  class="col-md-12 alert-msg">
                    <p ng-if="!$ctrl.errorResponse">To find your favorite shows use the search button <span class="icon-musica-searcher"></span> in the upper right, then write your favorite show</p>
                    <p ng-if="$ctrl.errorResponse">{{$ctrl.errorResponse}}</p>
                </div>              
            </div>
            <div class="row" ng-if="$ctrl.showsTvList.length > 0">
                <show-card class="col-md-4" ng-repeat="card in $ctrl.showsTvList" ng-click="$ctrl.goMoreInfo(card.imdbID)" card="card"></show-card>
            </div>         
        </div>
  `
}