var vocales = prompt("Ingresa una frase: ");
var a1 = 0, e2 = 0, i3 = 0, o4 = 0, u5 = 0;
(vocales, 20, '\n');

for (var x = 0; x < 20; x++) {
    switch (vocales[x]) {
        case 'a1': a1++;
            break;
        case 'e2': e2++;
            break;
        case 'i3': i3++;
            break;
        case 'o4': o4++;
            break;
        case 'u5': u5++;
            break;
    }
}
console.log("Vocal 1: ", a1);
console.log("Vocal 2: ", e2);
console.log("Vocal 3: ", i3);
console.log("Vocal 4: ", o4);
console.log("Vocal 5: ", u5);