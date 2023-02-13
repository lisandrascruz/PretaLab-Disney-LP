# Aula 05

<p align="center">
  <img width="600" src="https://camo.githubusercontent.com/b30511722f70fde6e05fb4aec88d0e83b11484fb5e80f4557af6c5ed19767f24/68747470733a2f2f7468756d62732e6766796361742e636f6d2f41676974617465644c6f6e656c79426c61636b6275636b2d6d61782d316d622e676966">
</p> 

### 💻 JavaScript
Na última aula vimos variáveis e tipos de dados. Hoje continuaremos a entender Javascript com muita prática. Bora!!!

## ↔️ Estrutura condicional
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/7760933/218580978-63770ace-c9e5-4ed4-94d0-a24bc5e9f5e1.png">
</p>

Uma estrutura condicional, como seu próprio nome sugere, trabalha em determinadas condições, ou seja, <b>sua execução depende de uma condição que deve ser satisfeita.</b>.

### 🛣 if e else  


  <b>Estrutura condicional simples</b>: A estrutura condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. 

  Exemplo: <b>SE</b> a Lis vai em um restaurante e tem boas opções vegetarianas **ENTÃO** ela fica muito feliz.
  
  <b>Estrutura condicional composta</b>: Usada para tratar os casos em que a condição testada é falsa. Assim, caso a condição if não seja atendida teremos o else para que outra coisa seja feita. Dessa forma, sempre que tivermos um if…else, podemos dizer que o código sempre irá executar alguma coisa.

  Exemplo: <b>SE</b> a Lis vai em um restaurante e tem boas opções vegetarianas **ENTÃO** ela fica muito feliz **SENÃO** a ela fica bem chateada.
  

Se for falsa, executa as afirmações dentro de else.
<p align="center">
  <img width="600" src="https://wiki.sj.ifsc.edu.br/images/c/ca/Fig037_MCO018703.jpg">
</p> 

Estrutura de um `if else`:
```javascript
  if(condicao) {
    // faz algo
  } else if (outra condicao) {
    // faz outra coisa - que tal pesquisar mais sobre?
  } else {
    // se nenhuma das condições forem atendidas
    // faça o que tiver aqui!
  }
```

#### 🏋🏽 Bora praticar
- Abra o Visual Studio 

<b> Exemplo 1</b>
- Crie um arquivo com extensão `.js`
- Escreva o código abaixo e em seguida salve seu arquivo 

```javascript
let hora = 10;

if (hora < 12){
    console.log('Bom dia!');
} else {
    console.log('Boa tarde!');
}
```
Qual saída vocês obtiveram?

<b> Exercício 1</b>
- Crie um arquivo com extensão `.js`
- Faça:
  1. Declare um valor numérico;  
  2. Vamos analisar se esse número é ou não maior que 10:   
    a) Se for, vamos escrever na tela a seguinte frase: "Esse número é maior que 10";    
    b) Se não for, vamos escrever na tela a seguinte frase: "Esse número é menor que 10".


<details>
  <summary>Maaasss.. e se esse número for igual a 10?</summary>

  <p align="center">
    <img width="600" src="https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png">
  </p>

</details>
 

<b> Exemplo 2</b>
- Crie um arquivo com extensão `.js`
- Escreva o código abaixo e em seguida salve seu arquivo
```javascript
let a = 20,
    b = 20;

if (a > b){
    console.log('a é maior que b');
} else if (a < b){
    console.log('a é menor que b');
} else {
    console.log('a é igual a b');
}
```

#### 🏋🏽 Bora praticar
- Abra o Visual Studio 

- Crie um arquivo com extensão `.js`
- Faça:
  1. Crie um programa que receba 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100.
    a) Caso seja maior que 100, retorne "Esse número é maior que 100";
    b) Caso seja igual a 100, retorne "Bingo! Deu 100!";
    c) Caso seja menor que 100, retorne "Esse número é menor que 100".



## 🤔Tabela Verdade

A tabela da verdade é muito utilizada na lógica de programação para desenvolvimento do raciocínio lógico. Seu objetivo é verificar a validade lógica de uma condição composta (argumento formado por duas ou mais condições simples). 

<p align="center">
  <img width="600" src="https://files.passeidireto.com/85a780bb-7e36-412e-b793-b2c7c44ba4e5/bg1.png">
</p>


---

<p align="center">
  Isso é tudo pessoaaal!
</p>

<p align="center">
  <img src="https://camo.githubusercontent.com/0ae622f2ae10d672df09248a9d00ec6ce16558dad1c305531cb4caf33137b784/68747470733a2f2f7468756d62732e6766796361742e636f6d2f416767726573736976654a65616c6f7573416d75726d696e6e6f772d73697a655f726573747269637465642e676966" width="500"/>
</p>
