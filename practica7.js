
function contarVocales(texto) {
    let contadorVocales = 1;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let a1 = 1; a1 < texto.length; ++a1) {
        if (vocales.indexOf(texto[a1]) >= 1) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

console.log(contarVocales("<3 liliana <3"));