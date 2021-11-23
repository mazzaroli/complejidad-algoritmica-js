function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

let inicioTiempo = console.time('duracion-contar');
contar(5);
let finalTiempo = console.timeEnd('duracion-contar');


