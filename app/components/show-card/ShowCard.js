/**
 * @ngdoc Component
 * @name HeaderComponent
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 *
 * @description:  common component for the header of the application
 */

export const ShowCard = {
    bindings: {
        card: '='
    },
    template: `
        <div class="card-show" aria-label="Refresh">
            <div class="poster" style="background-image: url({{$ctrl.card.Poster}})"></div>            
            <md-tooltip md-direction="top">
                <div class="tooltip">
                    <p>Año: {{$ctrl.card.Year}}</p>
                </div>
            </md-tooltip>           
            <h2>{{$ctrl.card.Title}}</h2>
        </div>
  `
}