// Exercicio 1: Escreva um código JavaScript para exibir os números de 1 até 1000 na tela.

for (let i = 1; i <= 1000; i++) {
  console.log(i);
}

// Exercicio 2: Encontre e exiba na tela todos os números pares entre 1 e 200.

for (let i = 1; i < 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//OU: 

for(i = 1; i <= 100; i++){

   console.log(2*i)

}

/*Exercicio 3: Júlia gosta de se esconder, porém não gosta de contar. Ela pediu para vocês criarem um código JavaScript para contar até 10 e quando acabar a contagem,
imprimir a mensagem na tela: “Prontas ou não, lá vou eu!!!”*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Pronta ou não,lá vou eu");



//Exercicio 4: Como Julia é indecisa, agora ela teve a ideia de fazer uma mudança e pediu para que a contagem fosse de 10 até 0 e após imprimir na tela a mesma frase.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Pronta ou não,lá vou eu");



//Exercicio 5: Vamos ajudar, Júlia? Ela precisa estudar a tabuada do 9. Em código JavaScript, crie uma tabuada do 9 e armazene, em seguida, imprima em tela.

for (i = 0; i <= 10; i++) {
  a = i * 9;
  console.log(`${i} x 9 =  ${a}`);
}



//Exercicio 6:Imprima os números de 0 até 40 na tela e em seguida, quantos números pares e quantos números ímpares foram impressos.

let P = 0;
let I = 0

for (let j = 0; j <= 40; j++){
    if (j % 2 === 0) {
      P++
    } else {
      I++
    }
  }
  console.log(`Entre 0 e 40, há ${P} números pares e ${I} números ímpares.`);



//Exercicio 7: Dado um numero qualquer, crie um código em Javascript que diga se ele é primo ou não.

const numero = 12;
let resposta = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) resposta = false;
}
console.log(`${numero} é um numero primo primo? ${resposta}`);


//Exercicio 8: Mostre na tela os números primos que estão entre o número 0 e o 400.
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

// Exercício 9:Você já ouviu falar na Sequência de Fibonacci? É uma sequência de números, onde o número 1 é o primeiro e segundo termo da ordem e os demais são originados pela soma de seus antecessores

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

//Exercicio 10: Um número perfeito é aquele que é igual à soma dos seus divisores positivos, exceto ele mesmo. Por exemplo, 6 é um número perfeito, pois 6 = 1 + 2 + 3. Escreva um código em JavaScript que receba um número "num" como entrada e imprima no console se "num" é perfeito ou não.

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
