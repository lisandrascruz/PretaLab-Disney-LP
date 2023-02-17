const numero1 = 10;
const numero2 = 2;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const modulo = numero1 % numero2;

console.log('A soma é: ' + soma);
console.log("A subtração é: " + subtracao);
console.log(`A multiplicação é: ${multiplicacao}`);
console.log(divisao);
console.log(modulo);

const numero = 101;
if (numero > 100) {
  console.log("é magica é?");
} else if (numero < 10) {
  console.log("Esse número é menor que 10!");
} else if (numero === 10) {
  console.log("Esse número é 10!");
} else {
  console.log("Esse número é maior que 10!");
}

const horas = 23;
if (horas > 0 && horas < 24) {
  console.log("essa hora é valida");
} else {
  console.log("horario invalido");
}
