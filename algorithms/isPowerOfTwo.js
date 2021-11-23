/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */

 function isPowerOfTwo(n) {
    if (n < 1) { // O( 1 )
      return false; // O( 1 )
    }
  
    let numeroDividido = n; // O( 1 )
    while (numeroDividido !== 1) { // O( n )
      if (numeroDividido % 2 !== 0) { // O( 1 )
        return false; // O( 1 )
      }
      numeroDividido = numeroDividido / 2; // O( 1 )
    }
  
    return true; // O( 1 )
  }