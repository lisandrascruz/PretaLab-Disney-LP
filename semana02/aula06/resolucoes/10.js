/*
Defina 3 constantes que salvem valores numericos diferentes. Utilize if/else 
para escrever um código que retorne o maior de três números.
*/

const numero1 = 11;
const numero2 = 1;
const numero3 = 2;

if (numero1 > numero2 && numero1 > numero3) {
  console.log("O numero " + numero1 + " é o maior dos 3!");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("O numero " + numero2 + " é o maior dos 3!");
} else {
  console.log("O numero " + numero3 + " é o maior dos 3!");
}
