
/**
 * Esta función permite pedir una carta del deck
 * @param {Array<string>} deck Llamamos al deck de la funcion crearDeck
 * @returns {string} Retorna la carta pedida
 */



export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
