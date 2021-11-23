/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar = O( 1 )
 */
 function linearSearch(arreglo, clave) { // E.O( n )
    for (let indice = 0; indice < arreglo.length; indice++) { // T.O(n) E.O(1) 
      if (arreglo[indice] === clave) { // T.O(1)
        return indice; // O(1)
      }
    }
    return -1; // O(1)
  }