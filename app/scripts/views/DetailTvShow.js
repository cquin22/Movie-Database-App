import controller from '../controllers/DetailTvShowController';
/**
 * @ngdoc component
 * @name DetailTvShow
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description: Detail page of tv show
 *
 */
export const DetailTvShow = {
    controller,
    template: `
        <div class="header wrap container-fluid">
            <div class="row">
                <div ng-if="$ctrl.showLoader"  class="col-md-12">
                    <md-progress-circular ng-disabled="$ctrl.isActiveSearch" class="md-hue-2" md-diameter="40px"></md-progress-circular>                   
                </div> 
                <div class="col-md-5">
                    <div class="container-poster">
                         <img ng-if="$ctrl.tvShow.Poster != 'N/A'" ng-src="{{$ctrl.tvShow.Poster}}" />
                        <img ng-if="$ctrl.tvShow.Poster == 'N/A' " src="https://static1.squarespace.com/static/574db59f59827e2eebfb93b4/t/57bdc1d09f74564c5c564290/1472053713193/no-photo.jpg" />
                        <h1>{{$ctrl.tvShow.Title}}</h1>               
                    </div>
                </div>
                <div class="col-md-7 detail-info">
                    <h2>Seasons</h2>
                    <div class="numbers">
                        <div id="Item_{{number}}" class="number" ng-repeat="number in $ctrl.tvShow.seasons" ng-click="$ctrl.getSeasonsBySerie($ctrl.tvShow.imdbID, number + 1)" ng-class="{'active': $index +1 === $ctrl.indexSeason }">
                            {{number + 1}}
                        </div>
                    </div>
                    <div ng-if="$ctrl.tvShow.episodes" class="box-episode animated fadeIn" ng-repeat="episode in $ctrl.tvShow.episodes">
                        <span class="episode">{{episode.Episode}} </span> <span>{{episode.Title}}</span> <span class="item"></span>
                    </div>
                </div>                              
            </div>       
        </div>
  `
}