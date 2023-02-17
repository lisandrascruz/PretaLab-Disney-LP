/*
Vamos fazer algumas operações simples. Queremos imprimir a área e o perímetro de um retângulo, 
sabemos que a base do retângulo é 5 e a altura é 8.
area = base * altura
perimetro = 2(b+h)
*/

const base = 5;
const altura = 8;

const area = base * altura;
const perimetro = 2 * (base + altura);

console.log(
  `A area do retângulo de base ${base} e altura ${altura} corresponde a ${area} e perimetro corresponde a ${perimetro}`
);
