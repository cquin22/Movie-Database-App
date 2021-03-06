/**
 * @ngdoc Component
 * @name ShowCard
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description:  Component that builds each card
 */

export const ShowCard = {
    bindings: {
        card: '='
    },
    template: `
        <div class="card-show" aria-label="Refresh">
            <div class="poster" style="background-image: url({{$ctrl.card.Poster != 'N/A' ? $ctrl.card.Poster : 'http://www.sirohiya.com.np/ennp/img/NOIMG.png'}})"></div>            
            <md-tooltip md-direction="top">
                <div class="tooltip">
                    <p>Año: {{$ctrl.card.Year}}</p>
                </div>
            </md-tooltip>           
            <h2>{{$ctrl.card.Title}}</h2>
        </div>
  `
}