/* 
  Revisão geral
  1. Tipos de dados
  2. Variaveis e constantes / Concatenação (textos e numeros)
  3. Operadores aritmeticos
  4. Condicional (if/else if/else) ** uso do else if
  5. Operadores logicos
  6. Extensões de arquivos
*/

const number = 0.21;
const stringTexto = "ksdhngfskdf sdkgo sdoklgh";
const stringVazio = "";
const stringCPF = "09791838444";
const booleanTrue = true;
const booleanFalse = false;

const empty = null;
const noData = undefined;

let cor = "laranja";
// console.log(cor);

cor = cor + ", azul";
// console.log(cor);

cor = cor + ", verde";
// console.log(cor);

cor = cor + ", rosa";
// console.log(cor);

let qtddFilhos = 0;
let nomeFilho1 = "";
// console.log(qtddFilhos + " " + nomeFilho1);
// console.log(typeof nomeFilho1);

qtddFilhos = 1;
nomeFilho1 = "Lucas";

// tradicional
// console.log(
//   "Juliana tem " + qtddFilhos + " filho e ele se chama " + nomeFilho1
// );

// template string
// console.log(`Juliana tem ${qtddFilhos} filho e ele se chama ${nomeFilho1}`);

// console.log(qtddFilhos + " " + nomeFilho1);
const salarioDoNovoFuncionario = null;

qtddFilhos = 2;
qtddFilhos = 0;
qtddFilhos = -2;

// if (qtddFilhos > 1) {
//   console.log(`Juliana tem ${qtddFilhos} filhos`);
// } else if (qtddFilhos === 1) {
//   console.log(`Juliana tem ${qtddFilhos} filho`);
// } else if (qtddFilhos === 0) {
//   console.log(`Pelo visto.. Juliana não tem filhos!`);
// } else {
//   console.log("Passa amanha paiassu");
// }

const numero1 = 1;

// if (numero1 < 10) {
//   console.log("esse numero é menor que 10");
// } else if (numero1 < 5) {
//   console.log("esse numero é menor que 5");
// } else if (numero1 === 10) {
//   console.log("esse numero é igual a 10");
// } else if (numero1 > 10) {
//   console.log("esse numero é maior que 10");
// }

// if (numero1 < 5) {
//   console.log("esse numero é menor que 5");
// } else if (numero1 < 10) {
//   console.log("esse numero é menor que 10");
// } else if (numero1 === 10) {
//   console.log("esse numero é igual a 10");
// } else if (numero1 > 10) {
//   console.log("esse numero é maior que 10");
// }

if (numero1 < 10 && numero1 >= 5) {
  console.log("esse numero é menor que 10");
} else if (numero1 < 5) {
  console.log("esse numero é menor que 5");
} else if (numero1 === 10) {
  console.log("esse numero é igual a 10");
} else if (numero1 > 10) {
  console.log("esse numero é maior que 10");
}
