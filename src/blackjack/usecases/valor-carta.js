
/**
 * 
 * @param {String} carta  
 * @returns Devuelve el valor de la carta el cual es la funcion de pedirCarta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}