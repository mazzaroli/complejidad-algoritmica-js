/**
 * Complejidad Temporal -> O( n^2 + 9)
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
 function selectionSort(arreglo) {// E.O( n )
    let longitud = arreglo.length; // T.O( 1 ) E.O( 1 )
  
    for (let i = 0; i < longitud; i++) { // T.O( n ) E.O( 1 )
      let minimo = i; // T.O( 1 ) E.O( 1 )
      for (let j = i + 1; j < longitud; j++) { // T.O( n ) E.O( 1 )
        if (arreglo[j] < arreglo[minimo]) { // T.O( 1 )
          minimo = j; // T.O( 1 )
        }
      }
      if (minimo != i) { // T.O( 1 ) 
        let temporal = arreglo[i]; // T.O( 1 ) E.O( 1 )
        arreglo[i] = arreglo[minimo]; // T.O( 1 )
        arreglo[minimo] = temporal; // T.O( 1 )
      }
    }
    return arreglo; // T.O( 1 )
  }