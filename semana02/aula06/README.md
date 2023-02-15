# Aula 06

Nem só de bloquinho vive a pessoa estudante, então simbora manter o conteúdo fresquinho na mente? Temos 3 alegorias de questões. 
<p align="center">
  <a href="https://www.youtube.com/watch?v=qtsVEZ-A36w" target="_blank">
    <img src="https://i3.ytimg.com/vi/qtsVEZ-A36w/maxresdefault.jpg" width="500" border="10" />
  </a>
</p>

<p align="center"> Para entender o nome das alegorias, ouçam a música do Alceu! </p>

## Descendo ladeira, fazendo poeira, atiçando o calor
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218595744-4358a4cc-c084-49a0-8d2f-e46cb32e8923.png" width=400
</p>


**1. Prática**<br>
Conteúdos abordados: constantes e variáveis

- [ ] Crie uma constante chamada meuNome e atribua a ela o seu nome.
- [ ] Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
- [ ] Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
- [ ] Crie uma variável let chamada profissão e atribua a ela a sua profissão.

Agora utilizaremos o console.log:

- [ ] utilize o console.log para imprimir as constantes e variáveis que você criou
- [ ] altere o valor da variável profissão para desenvolvedora e faça um console.log e verifique o que acontece.
- [ ] altere o valor da constante cidadeNatal e faça um console.log nela, verifique o que ocorre. Você consegue explicar, com suas palavras, o motivo do erro?


**2. Prática**<br>
Conteúdos abordados: variáveis, constantes e seus padrões de nomenclatura

Abaixo iremos ver algumas declarações de constantes e variáveis, observe se a escrita e seus tipos estão de acordo com a sintaxe da linguagem JavaScript. Caso não esteja, corrija, deixando- a válida.

a) algum_nome : Mariana

b) var Nome = 32; 


c) const : idade 40;


d) let profissão =  ‘ desenvolvedor’;



**3. Prática**<br>
Conteúdos abordados: operadores aritméticos

Vamos fazer algumas operações simples. Queremos imprimir a área e o perímetro de um retângulo, sabemos que a base do retângulo é 5 e a altura é 8.

1. - [ ] Escreva em frases curtas o que será necessário fazer, para imprimir o valor da área e perímetro desse retângulo. 
2. - [ ] Escreva o código para ser possível ver a impressão.

**Exemplo**: <br>
Quero imprimir o nome de minha gata no console.<br>

**Frases:**<br> 
* criar constante e atribuir a ela o nome de minha gata <br>
* Imprimir o valor da constante, chamando a função console.log(); <br>


**Código:**<br>
const nomeDaMinhaGata = “Olga”; <br>
console.log(nomeDaMinhaGata);

**4. Prática**<br>
Conteúdos abordados: operadores relacionais e estrutura condicional

Observe as variáveis abaixo:

a = null;<br>
b = 20;<br>
c = true;<br>
d = '' '';<br>

Analise as comparações abaixo e marque aquelas cuja saída no console será verdade.



~~~
if (b === 20 && c != false && d == 0) {
   console.log('Verdade')
} else {
   console.log('Falso')
}
~~~


~~~
if (a == 0) {
   console.log('Verdade')
} else {
   console.log('Falso')
}
~~~


~~~
if (d) {
   console.log('Verdade')
} else {
   console.log('Falso')
}
~~~

~~~
if (b == '20') {
   console.log('Verdade')
} else {
   console.log('Falso')
}
~~~


**5. Prática**<br>
Imprima a seguinte frase: Olá, me chamo Shuri, sou Super Heroína, tenho X anos e tenho algo para te dizer: O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.

  * Abaixo já estão algumas constantes, crie outras caso seja necessário 
  * calcule a idade com base no ano de nascimento, após
  * imprima o que foi pedido.


const nome = "Shuri";<br>
const anoDeNascimento = 1988;<br>
var profissao = "Super Heroína";<br>
var frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";<br>

🚀 Ao infinito e além: no JavaScript podemos fazer o que foi pedido de formas diferentes, tente fazer, pelo menos, de duas formas diferente, pode pesquisar.
  
**6. Prática**<br>
  Conteúdos abordados: Tabela verdade, Estrutura Condicional<br>
  
- [ ] Crie uma variável chamada “diasDaSemana” que receba a string “quarta-feira”.

* Utilizando if/else, implemente condicionais para que:<br>
* Se nossa variável “diasDaSemana” for: “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima:  “Oba, mais um dia de aprendizado em JavaScript :D”. <br>
* Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido”.



## Do pique do frevo caí como um raio
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218595053-988cfe41-c047-4291-912d-ccfa5bf7346e.png" width=400
</p>


**7. Prática**
  
Conteúdos abordados: operadores relacionais e estrutura condicional

Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz: “Por favor, me veja uma feijoada E um suco de laranja”.
Seria muito triste se você recebesse apenas a bebida ou só a comida, não é?
Também não seria legal se recebêssemos a feijoada completa,  mas a nossa bebida fosse um caldo de cana. Porque nosso pedido era de que as duas condições fossem atendidas corretamente.
Construa esse pedido em JavaScript, quando o pedido vier certo, imprima a mensagem: “Muito grata pelo almoço!” caso não seja o pedido, imprima: “Acho que houve um engano com meu pedido”

**8. Prática**<br>
  Conteúdos abordados: operadores relacionais e estrutura condicional


Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100.  <br> 
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. 
Para isso, considere as seguintes informações: 
* Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”.
* Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”.
* Se a nota for menor que 60, imprima “Infelizmente, você reprovou.” .
<br>

Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.


**9. Prática**<br>
  Conteúdos abordados: operadores relacionais e estrutura condicional

Utilize  if/else para escrever um código que retorne o maior dos dois números.<br>
  * Defina, no começo do seu código, duas constantes com os valores que serão comparados.


**10. Prática**<br>
Utilize if/else para escrever um código que retorne o maior de três números.<br>
  * Defina, no começo do seu código, três constantes com os valores que serão comparados.



**11. Prática**<br>
  Conteúdos abordados: operadores relacionais e estrutura condicional e  Operadores aritméticos

Utilize if/else para escrever um código que define três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.<br>
  
💡 Dica: brinque com os valores, teste para números pares e ímpares. <br>
  
**12. Prática**<br>
  Conteúdos abordados: operadores relacionais e estrutura condicional

- [ ] Crie uma constante chamada “horarioAtual”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
- [ ] Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. 
- [ ] Implemente condicionais para que: 
* Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “mensagem”.
* Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “mensagem”.
* Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “mensagem”. 
* Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “mensagem”. 
* Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado” na variável “mensagem”. 
- [ ] Agora imprima a variável mensagem fora das suas condições.

**13. Prática**<br> 
  Conteúdos abordados: Tabela verdade, Estrutura Condicional

  - [ ] Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.<br> 

   * Siga essas regras:<br> 
  Porcentagem >= 90 -> A<br>
  Porcentagem >= 80 -> B<br>
  Porcentagem >= 70 -> C<br> 
  Porcentagem >= 60 -> D<br> 
  Porcentagem >= 50 -> E<br> 
  Porcentagem < 50 -> F<br> 

* O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

  

## Me segura que senão eu caio
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218594766-16ebd087-6649-4e79-af7e-f8927e99edb7.png" width=400
</p>



**14. Prática**<br>
  Conteúdos abordados: Estrutura Condicional, operadores aritméticos


  - [ ] Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.<br>
 * A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.<br>
  **Atente que, sobre o custo do produto, incide um imposto de 20%.** 

  - [ ] Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de entrada seja menor que zero. 

valorCustoTotal = valorCusto + impostoSobreOCusto;<br>
lucro =  valorVenda - valorCustoTotal (lucro de um produto);<br>


**15. Prática**<br>
  Conteúdos abordados: operadores aritméticos, estrutura Condicional<br>

  - [ ] Utilize if/else para escrever um código que define três constantes com os valores dos três ângulos internos de um triângulo.<br>
  * Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
  * Se algum ângulo for inválido, você deve retornar uma mensagem de erro.<br>
  **Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.**

  
