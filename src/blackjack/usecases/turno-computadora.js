import {pedirCarta, valorCarta, crearCartaHTML} from './index.js'


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck  
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML ) throw new Error('Argumento puntosHTML es necesario'); 

    let puntosComputadora = 0;

    do {

        // Esta función me permite tomar una carta
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // Esta función crea la carta HTML
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}