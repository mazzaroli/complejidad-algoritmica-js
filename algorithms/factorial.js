/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
 function factorial(numero) {
    let resultado = 1; // O( 1 )
  
    for (let i = 2; i <= numero; i += 1) { // O( n )
      resultado *= i; // O( 1 )
    }
  
    return resultado; // O( 1 )
  }