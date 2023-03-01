/* 
1. Escreva um código JavaScript para exibir os 
números de 1 até 1000 no terminal
*/
for (let i = 0; i <= 1000; i++) {
  // console.log(i);
}

/*
  2. Encontre e exiba no console 
  todos os números pares entre 1 e 200.
*/
for (let i = 1; i <= 200; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// for (let i = 1; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log("Par: " + i);
//   } else {
//     console.log("Impar: " + i);
//   }
// }

// for (let i = 0; i <= 200; i += 2) {
//   console.log("Par: " + i);
// }

/*
  3. Júlia gosta de se esconder, porém não gosta de contar. 
  Ela pediu para vocês criarem um código JavaScript para 
  contar até 10 e quando acabar a contagem, 
  imprimir a mensagem na tela: “Prontas ou não, lá vou eu!!!”
*/
// for (let i = 1; i <= 10; i++) {
//   console.log(i + "...");
// }
// console.log("Prontas ou não, lá vou eu!!!")

// for (let i = 1; i <= 10; i++) {
//   console.log(i + "...");

//   if (i === 10) {
//     console.log("Prontas ou não, lá vou eu!!!");
//   }
// }

for (let i = 1; i <= 11; i++) {
  if (i <= 10) {
    console.log(i);
  } else {
    console.log("Prontos ou não, lá vou eu!");
  }
}
