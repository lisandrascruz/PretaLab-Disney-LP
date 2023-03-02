// Exercicio 1:

for (let i = 1; i <= 1000; i++) {
  console.log(i);
}

// Exercicio 2:

for (let i = 1; i < 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Exercicio 3:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Pronta ou não,lá vou eu");

//Exercicio 4:

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Pronta ou não,lá vou eu");

//Exercicio 5:

for (i = 0; i <= 10; i++) {
  a = i * 9;
  console.log(`${i} x 9 =  ${a}`);
}

//Exercicio 6:
const numero = 12;
let resposta = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) resposta = false;
}
console.log(`${numero} é um numero primo primo? ${resposta}`);

//Exercicio 7:
let j = 0;
let P = 0;
let I = 0;

for (let i = 0; i <= 40; i++) {
  console.log(i);

  if (j % 2 === 0) {
    j = P;
    P = P + 1;
  } else {
    j = I;
    I = I + 1;
  }
}
console.log(`Entre 0 e 40, há ${P} números pares e ${I} números ímpares.`);

//Exercicio 8:
//Obs: Números primos são aqueles divisíveis apenas por 1, por eles mesmos, e maiores que 1)

for (let i = 2; i <= 400; i++) {
  let ePrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo === true) {
    console.log(i);
  }
}

// Exercício 9:

const num = 9;

let soma = 0;
let anterior = 0;
let proximo = 1;

for (let i = 0; i < num; i++) {
  soma = anterior + proximo;
  anterior = proximo;
  proximo = soma;
}
console.log(`Fibonacci de ${num} é ${anterior}`);

//Exercicio 10:

let num = 6;
let soma = 0;

for (i = 1; i < num - 1; i++) {
  if (num % i === 0) {
    soma = soma + i;
  }
}
if (soma === num) {
  console.log(`O número ${num} é perfeito.`);
} else {
  console.log(`O número ${num} não é perfeito`);
}