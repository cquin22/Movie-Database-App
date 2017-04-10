import controller from './SearchController';
/**
 * @ngdoc Component
 * @name HeaderComponent
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 *
 * @description:  common component for the header of the application
 */

export const HeaderComponent = {
    controller,
    template: `
        <div class="header wrap container-fluid">
            <div class="row center-md middle-xs">
                <div class="col-md-4">
                    <span ng-click="$ctrl.goToHome()" class="back" ng-if="$ctrl.showButtonBack()">Back</span>
                    <h1 class="title-primary">Shows</h1>
                </div>
                <div class="col-md-8">
                    <div class="row end-xs">
                        <div class="col-xs-12">
                            <div class="box-icon">
                                <span ng-if="$ctrl.isActiveSearch">
                                      <md-progress-circular ng-disabled="$ctrl.isActiveSearch" class="md-hue-2" md-diameter="40px"></md-progress-circular>
                                </span>
                                <span class="icon-tool"></span>
                                <span class="icon-musica-searcher" ng-click="$ctrl.enableInput()"></span>
                            </div> 
                            <div ng-if="$ctrl.showInputControler" class="search-component">
                                <md-input-container flex-gt-sm>
                                    <label>Find your favorite show</label>
                                    <input ng-model="$ctrl.search" ng-change="$ctrl.onChange()">
                                </md-input-container>
                                <a ng-click="$ctrl.searchTvShow()" class="md-raised md-primary md-button md-ink-ripple search-btn" href="">Search</a>                            
                            </div>                        
                        </div>
                    </div>
                </div>                    
            </div>         
        </div> 
  `
}