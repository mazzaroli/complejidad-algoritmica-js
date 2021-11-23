/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
 function fibonacci(numero) {
    const secuenciaFibonacci = [1]; // O( 1 ) 
  
    let valorPrevio = 0; // O( 1 )
    let valorActual = 1; // O( 1 )
  
    if (numero === 1) { // O( 1 )
      return secuenciaFibonacci; // O( 1 )
    }
  
    let i = numero - 1; // O( 1 )
  
    while (i) { // O( 1 )
      valorActual += valorPrevio; // O( 1 )
      valorPrevio = valorActual - valorPrevio; // O( 1 )
      secuenciaFibonacci.push(valorActual); // O( 1 )ojisadsdfoaknmafsdoiknasfojinaf
      i -= 1; // O( 1 )
    }
  
    return secuenciaFibonacci; // O( 1 )
  }