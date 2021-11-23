/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
 function primalidadTest(numero) { // O( 1 )

    if (numero <= 3) { // O( 1 )
      return true;
    }
  
    if (numero % 1 !== 0) { // O(1  )
      return false; // O( 1 )
    }
  
    if (numero <= 1) { // O( 1 )
      return false; // O( 1 )
    }
  
    if (numero % 2 === 0) { // O( 1 )
      return false; // O( 1 )
    }
  
    const limiteDivisor = Math.sqrt(numero); // O( 1 )
    for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) { // O( n )
      if (numero % divisor === 0) { // O( 1 )
        return false; // O( 1 )
      }
    }
  
    return true; // O( 1 )
  }