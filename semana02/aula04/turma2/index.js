// ---------------- Pratica 1
const fruta1 = "banana";
const fruta2 = "maça";
const fruta3 = "laranja";

console.log("Essa é a minha lista de frutas: ");
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

// Simulando hoisting
console.log(fruta4);
var fruta4 = "banana";

// Usando let para modificar nossa variável
let fruta5 = "banana";
console.log("Antes de modificar: " + fruta5);

fruta5 = "melancia";
console.log("Depois de modificar: " + fruta5);

// ---------------- Pratica 2
const nomePais = "Brasil";
const pontosTuristicos = "Cristo Redentor, Pelourinho";
const quantidadeEstados = 26;
const capitalPais = "Brasilia";
const eDaAmericaLatina = true;

// Tradicional
console.log(
  "Eu me chamo Lisandra e moro no " +
    nomePais +
    " que tem " +
    capitalPais +
    " como capital. Aqui sou muito feliz pois tenho " +
    quantidadeEstados +
    " estados para desbravar!"
);

// Template String vulgo seu lindo!
console.log(
  `Eu me chamo Lisandra e moro no ${nomePais} que tem ${capitalPais} como capital. Aqui sou muito feliz pois tenho ${quantidadeEstados} estados para desbravar!`
);
