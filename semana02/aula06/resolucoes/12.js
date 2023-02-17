/*
Siga as instruções abaixo:

a. Crie uma constante chamada "horarioAtual", que receba um número entre 4 e 24 de sua escolha, 
para representar as horas do dia. 
b. Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. 

c. Implemente condicionais para que:
  Se o horário for maior ou igual a 22, atribua "Não deveríamos comer nada, é hora de dormir" na variável "mensagem".
  Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "mensagem".
  Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem".
  Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem".
  Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado" na variável "mensagem". d. Por fim, dê um console.log na variável "mensagem".
*/

const horarioAtual = 8;
let mensagem = "";

if (horarioAtual >= 22) {
  mensagem = "Não deveríamos comer nada, é hora de dormir";
} else if (horarioAtual >= 18 && horarioAtual < 22) {
  mensagem = "Rango da noite, vamos jantar :D";
} else if (horarioAtual >= 14 && horarioAtual < 18) {
  mensagem = "Vamos fazer um bolo pro café da tarde?";
} else if (horarioAtual >= 11 && horarioAtual < 14) {
  mensagem = "Hora do almoço!!!";
} else if (horarioAtual >= 4 && horarioAtual < 11) {
  mensagem = "Humm, cheiro de café recém-passado";
}

console.log(mensagem);
