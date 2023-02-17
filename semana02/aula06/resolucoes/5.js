/*
Observe as variáveis criadas abaixo. Você tem o ano de nascimento da Shuri. Usando seus conhecimentos, 
com base no ano de nascimento, calcule a idade dela e exiba da seguinte forma no console.

"Olá, me chamo Shuri, sou Super Heroína, tenho X anos e tenho algo para te dizer: O Pantera Negra vive, 
e quando ele lutar pelo destino de Wakanda, estarei ao lado dele."

  const nome = "Shuri";
  const anoDeNascimento = 1988;
  const profissao = "Super Heroína";
  const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
*/
const nome = "Shuri";
const anoDeNascimento = 1988;
const profissao = "Super Heroína";
const frase =
  "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";

const idade = 2023 - anoDeNascimento;

console.log(
  `Olá, me chamo ${nome}, sou ${profissao}, tenho ${idade} anos e tenho algo para te dizer: ${frase}`
);
