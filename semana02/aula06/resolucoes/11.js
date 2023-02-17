/*
  Utilize if/else para escrever um código que define três números em constantes e retorne true 
  se pelo menos uma das três for par. Caso contrário, ele deve retornar false
*/

const numero1 = 2;
const numero2 = 4;
const numero3 = 6;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}
