# Aula 04

<p align="center">
  <img width="400" src="https://camo.githubusercontent.com/b30511722f70fde6e05fb4aec88d0e83b11484fb5e80f4557af6c5ed19767f24/68747470733a2f2f7468756d62732e6766796361742e636f6d2f41676974617465644c6f6e656c79426c61636b6275636b2d6d61782d316d622e676966">
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


### 🎲 Tipos de Dados

- `Number` representa um conjunto de dados numéricos positivos ou negativos, inteiros, reais ou decimais;

- `String` é a sequência de caracteres, sejam eles textuais, numericos, simbolos e afins;

- `Boolean` é uma variável que recebe um dado lógico com apenas duas possibilidades: ser verdadeiro ou falso (true or false);

- `Null` representa uma variável vazia ou nula que não armazena nada.


## 📦 Variáveis e Constantes

As variáveis tem o poder de armazenar informações inseridas em nossos códigos. A forma que escolhemos determinará se será uma variável de escopo local ou escopo global. Mas como assim?

  - <b>Escopo global</b> quer dizer que uma vez declarada, essa variável estará “viva” ”durante toda a aplicação e poderá ser acessada em toda a aplicação.

  - <b>Escopo local</b>, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas.

### Declarando variáveis e constantes

- `var` declara uma variável, opcionalmente, inicializando-a com um valor. [USO NÃO RECOMENDADO]

- `let` declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

- `const` declara uma constante de escopo de bloco, apenas de leitura.


🐼 🐼 🐼 

`Todas as vezes que uma variável é criada com o VAR, um panda morre. Atualmente o seu uso está depreciado e não é considerado uma boa prática. Salvem os pandas, não usem VAR.`

🐼 🐼 🐼


<p align="center">
  <img width="600" src="https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg">
</p> 

### Padrões de nomeclatura 
`Iremos utilizar o camelCaseNoCurso`

<p align="center">
  <img width="400" src="https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png">
</p> 
   

#### 🏋🏽 Bora praticar 
  Abra o Visual Studio 

  <details>
    <summary>Pratica 1: crie 3 constantes e mostre no console o valor salvo nelas</summary>

```javascript
const fruta1 = "banana";
const fruta2 = "maçã";
const fruta3 = "laranja";
console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
```
  </details>
    
    
  <details>
    <summary>Pratica 2: Declare e insira os valores nas seguintes variáveis ou constantes: Nome do país, Pontos turísticos, Capital do país, Quantidade de estados, O país é da América Latina?
    </summary>

```javascript
const nomePais = "Brasil";
let pontosTuristicos = "Pelorinho, Cristo Redentor";
const capitalPais= "Brasilia";
const quantidadeEstados = 26;
const eDaAmericaLatina= true;
```

  </details>
 
 
````
Também é possível declarar muitas variáveis em uma declaração:
let pessoa = "Renata", Idade = "33", signo = "Escorpião";
````

### Manipulação de Strings

Existem algumas formas de manipular string: 
- `length` checa o tamanho da string;
- `split` separa uma string definindo um limitador;
- `replace` substitui trechos da string;
- `slice` retorna só um trecho da string;
- `substr` retorna trechos de string informando a posição.
- mais: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 


## Operadores Aritméticos e Lógicos

### Os operadores aritméticos são os conhecidos por nós na matemática.

```javascript
const soma = 21 + 21;
const subtracao = 21 - 21;
const multiplicacao = 21 * 21;
const divisao = 21 / 21;
```

Além dos mais comuns cidatos acima existe também o módulo da divisão que consiste no resto da divisão de dois números.

```javascript
const moduloDaDivisão = 21 % 21;
```

### Operadores de comparação e lógico

```javascript
// Comparação
const estritamenteIgual = 21 === 21;
const estritamenteDiferente = 21 !== 21;
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
// Lógicos
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
```


<details>
  <summary>Pratica 3: crie 2 constantes: numero1 e numero2, cada uma contendo um valor numérico. Em seguida, crie mais 5 constantes: soma, subtração, multiplicação, divisão e modulo, que contenha as reespectivas operações usando as constantes numero1 e numero2</summary>

```javascript
const soma = numero1+numero2;
const subtracao = numero1-numero2;
const multiplicacao= numero1*numero2;
const divisao= numero1/numero2;
const modulo= numero1%numero2;
```
</details>
    
  
### 💡 Dicas
Durante o processo de aprendizagem inserir comentários ao longo do código para descrevê-lo pode ser útil para relembrar.
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
  <img src="https://camo.githubusercontent.com/0ae622f2ae10d672df09248a9d00ec6ce16558dad1c305531cb4caf33137b784/68747470733a2f2f7468756d62732e6766796361742e636f6d2f416767726573736976654a65616c6f7573416d75726d696e6e6f772d73697a655f726573747269637465642e676966" width="500"/>
</p>
