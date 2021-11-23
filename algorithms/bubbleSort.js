/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
 function bubbleSort(arreglo) { //E.O( n )
    let longitud = arreglo.length; // T.O(1)
    for (let i = 0; i < longitud; i++) { // T.O(n)  E.O(1)
      for (let j = 0; j < longitud; j++) { // T.O(n)  E.O( 1 )
        if (arreglo[j] > arreglo[j + 1]) { // T.O(1)
          let temporal = arreglo[j]; // T.O(1)  E.O( 1 )
          arreglo[j] = arreglo[j + 1]; // T.O(1)
          arreglo[j + 1] = temporal; // T.O(1)
        }
      }
    }
    return arreglo; // T.O(1)
  }
