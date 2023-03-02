//1. Receber 3 números e informar qual é o maior e o menor.

let numero01 = 400;
let numero02 = 100;
let numero03 = 300;
if ((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!"
else
if ((numero02 > numero01) && (numero02 > numero03)) mensagem = "O segundo número informado é maior!"
else
if ((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número informado é maior!"
else
mensagem = "Os números são iguais ou nada foi informado";
console.log(mensagem);

//2. Verificar se o usuário é menor de idade.

let idade = 18;
      
      if (idade < 18) mensagem = "A idade informada é de um menor!"
      else
      mensagem = "É maior de idade!";
      console.log(mensagem);

//3. Calcule a média aritmética de 3 números.

let nota01 = 9;
let nota02 = 4;
let nota03 = 3;

console.log("A média dos números informados é:" + (nota01+nota02+nota03)/3);

//4. Encontre os múltiplos de 3 ou 5.

let multiplos3 = 0;
let multiplos5 = 0;
    for (i = 0; i < 1000; i++) {
        multiplos3 += (i % 3 == 0) ? i : 0;
        multiplos5 += (i % 5 == 0) ? i : 0;
      }
      console.log("Somatórios dos Múltiplos de 3: " + multiplos3);
      console.log("Somatórios dos Múltiplos de 5: " + multiplos5);
      console.log("Somatórios dos Múltiplos de 5 e 3: " + multiplos3+multiplos5 );

//5. Qual é o 1001o número primo?
let primosEncontrados = 0;
    for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
       let ehPrimo = true;
        for (divisor = 2; dividendo > divisor ; divisor++) {
          if (dividendo % divisor == 0) {
            ehPrimo = false;
            break;
          };
        };
        if (Boolean(ehPrimo)) { 
          primosEncontrados++;
        }
      };
      console.log("O 1001o número primo é: "+ dividendo);

