
import _ from 'underscore'

/**
 * Esta Funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales  Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas = [], tiposEspeciales = []) => {

    if(!tiposDeCartas)throw new Error('tiposDeCartas es obligatorio');
    if(!Array.isArray(tiposDeCartas))throw new Error('tiposDeCartas debe ser un arreglo de string');
    if(tiposDeCartas.length === 0)throw new Error('tiposDeCartas debe tener al menos un elemento');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


