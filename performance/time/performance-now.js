const performance = require('perf_hooks')
function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

let inicioTiempo = performance.performance.now();
contar(5);
let finalTiempo = performance.performance.now();
let duracion = finalTiempo - inicioTiempo;

console.log(`el algoritmo contar ha durado ${duracion}ms.`)

