# Aula 04

<p align="center">
  <img width="400" src="https://64.media.tumblr.com/ebc88add3f40107dc41f289ee05c865d/660c3fe096ab7c4c-59/s540x810/855b97698e377f23d0054518f62262571bedfa24.gif">
</p> 

## Introdução a JavaScript
Olá pessoinhas! Hoje vamos colocar a mão massa. Juntes iremos conhecer a sintaxe básica da linguagem JavaScript. Bora aprender a programar? 

### 💻 JavaScript
JavaScript é uma linguagem de programação que originalmente foi desenvolvida para trazer maior interatividade aos websites. Ela tornou possíveis o desenvolvimento das aplicações modernas da web - aplicações com os quais você pode interagir diretamente sem recarregar a página a cada ação.
JavaScript também é usado em sites mais tradicionais para fornecer várias formas de interatividade de forma mais inteligente.

O JavaScript nasceu para atender demandas voltadas ao Front e como as necessidades aumentam de acordo com o crescimento tecnológico, surgiu a ideia de utilizar uma mesma linguagem no lado do cliente e do servidor para otimizar processos e serviços. Dessa forma, o Node.JS aparece como uma alternativa viável para programação Back-End por se tratar de um ambiente para desenvolvimento utilizando a linguagem JavaScript.

De acordo com sua definição oficial, o Node é um runtime, que nada mais é do que um conjunto de códigos, API’s (Interface de Programação de Aplicativos - programa que vai nos ajudar a obter informações), ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador web.Essas características motivaram o engenheiro de software Ryan Dahl a desenvolver um ambiente, como um programa que você instala no seu computador, que trabalha com a linguagem JavaScript fora do navegador e pelo lado do servidor, via terminal, de uma maneira menos restritiva.

<p align="center">
  <img width="400" src="https://media.tenor.com/Yzeh4Z4UQuAAAAAC/viciadoemcodar.gif">
</p> 

<b>- Variáveis:</b>

As variáveis tem o poder de armazenar e manipular dados e informações inseridas em nossos códigos. A forma que escolhemos determinará se será uma variável de escopo local ou escopo global. Mas como assim?

<b>Escopo global</b> quer dizer que uma vez declarada, essa variável estará “viva” ”durante toda a aplicação e poderá ser acessada em toda a aplicação.

<b>Escopo local</b>, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas.

Algumas formas de declarar uma variável incluem:

●	 `var` declara uma variável, opcionalmente, inicializando-a com um valor.

●	 `let` declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

●	 `const` declara uma constante de escopo de bloco, apenas de leitura.

<p align="center">
  <img width="400" src="https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg">
</p> 

🏋🏽Bora praticar: 
- Abra o Visual Studio 

<b> Exemplo 1</b>
- Crie um arquivo `exemplo-1.js`
- Escreva o código abaixo e em seguida salve seu arquivo   
     ```javascript
        var fruta1 = "banana";
        var fruta2 = "maçã";
        var fruta3= "laranja";
        console.log(fruta1)
        console.log(fruta2)
        console.log(fruta3)
     ```
      
 <b> Exemplo 2</b>
- Crie um arquivo `exemplo-2.js`
- Escreva o código abaixo e em seguida salve seu arquivo

     ```javascript
        let x = 5;
        let y = 6;
        let z = x + y;
        console.log(z)
     ```
 
Também é possível declarar muitas variáveis em uma declaração:

   ```javascript
      let pessoa = "Renata", Idade = "33", signo = "Escorpião";
      console.log(z)
   ```

<b>- Tipos de Dados</b>

●	 `Number` representa um conjunto de dados numéricos positivos ou negativos, inteiros, reais, ou decimais;

●	 `String` é a sequência de caracteres que representa um texto;

●	 `Boolean` é uma variável que recebe um dado lógico com apenas duas possibilidades: ser verdadeiro ou falso (true or false);

●	 `Null` representa uma variável vazia ou nula que não armazena nada. Variáveis null são iniciadas como ‘0’ ou são nulas;

●	 `Lógicos` formam um grupo de dados para representar dois únicos valores lógicos possíveis: verdadeiro ou falso.


<b>- Manipulação de variáveis</b>

Existem algumas formas de manipular variáveis: 

●	 `length` checa o tamanho da variável;

●	 `split` separa uma variável definindo um limitador;

●	 `replace` substitui trechos das variáveis;

●	 `slice` retorna só um trecho da variável;

●	 `substr` retorna trechos de variáveis informando a posição.

🏋🏽Bora praticar: 
- Abra o Visual Studio 

<b> Exemplo 3</b>
- Crie um arquivo `exemplo-3.js`
- Escreva o código abaixo e em seguida salve seu arquivo   



<b>- Operadores Matemáticos e lógicos </b>

<p align="center">
  <img width="300" src="https://miro.medium.com/max/1340/1*4B3984iMIf7MPxN_S36iGg.png">
</p>


<p align="center">
  <img width="700" src="https://miro.medium.com/max/1400/1*_sS64sGl7FOjH5lecaXICA.png">
</p>

  
### 💡Dicas
Uma boa prática é inserir comentários ao longo do código para descrevê-lo.
 ```javascript
 // comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
*/

```
---

<p align="center">
  Isso é tudo pessoaaal!
</p>

<p align="center">
  <img src="https://stories.adorocinema.com/pantera-negra-qual-e-a-origem-da-saudacao-de-wakanda-forever/assets/5.gif" width="500"/>
</p>
