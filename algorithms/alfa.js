/**
 * Complejidad Temporal -> O( n^2 + 6 )
 * Complejidad Espacial -> O( n + 5 )
 * Espacio Auxiliar -> O( 5 )
 */

async function algoritmoAlfa(payloadId, payloadAPI) { // EO( n )
    let respuesta = await fetch(payloadAPI); // T.O(1)  EO( 1 )
    let data = await respuesta.json(); // T.O(1) EO( 1 )
    for (let i = 0; i < data.length; i++) { // T.O( n ) EO( 1 ) 
        let payloads = data[i].rocket.second_stage['payloads']; // T.O(1) EO( 1 )
        for (let j = 0; j < payloads.length; j++) { // T.O ( n ) EO( 1 )
            if (payloadId == payloads[j].payload_id) { // T.O(1)
                return true; // T.O(1)
            }
        }
    }
    return false; // T.O(1)
}