/*
Crie uma variável chamada diaDaSemana que receba a string "quarta-feira". 
Utilizando if/else, implemente condicionais para que:

a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" 
OU "sexta-feira", o console.log imprima a seguinte mensagem:
  Oba, mais um dia de aprendizado em JavaScript :D
b. Se for algum dia de fim de semana:
  “FINALMENTE, descanso merecido”.
*/

const diaDaSemana = "aas";

if (
  diaDaSemana === "segunda-feira" ||
  diaDaSemana === "terça-feira" ||
  diaDaSemana === "quarta-feira" ||
  diaDaSemana === "quinta-feira" ||
  diaDaSemana === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado em JavaScript :D");
} else {
  console.log("FINALMENTE, descanso merecido");
}

// if (
//   diaDaSemana === "segunda-feira" ||
//   diaDaSemana === "terça-feira" ||
//   diaDaSemana === "quarta-feira" ||
//   diaDaSemana === "quinta-feira" ||
//   diaDaSemana === "sexta-feira"
// ) {
//   console.log("Oba, mais um dia de aprendizado em JavaScript :D");
// } else if (diaDaSemana === "sabado" || diaDaSemana === "domingo") {
//   console.log("FINALMENTE, descanso merecido");
// } else {
//   console.log(
//     "Eita, o que você digitou não é um dia da semana. Tente novamente!"
//   );
// }
