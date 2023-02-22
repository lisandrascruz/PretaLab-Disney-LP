# Aula 07

<p align="center">
  <img width="600" src="https://camo.githubusercontent.com/b30511722f70fde6e05fb4aec88d0e83b11484fb5e80f4557af6c5ed19767f24/68747470733a2f2f7468756d62732e6766796361742e636f6d2f41676974617465644c6f6e656c79426c61636b6275636b2d6d61782d316d622e676966">
</p> 

## 💻 JavaScript
Na última aula vimos Estrutura condicional - if/else. Hoje continuaremos a nos aventurar nas diferentes estruturas de dados. Vamooos!!!

## 🔁 Estruturas de Repetição

Estruturas de repetições repetem determinado bloco de comandos enquanto a condição atende ao requisito.</b>

<p align="center">
  <img width="300" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/i18n/pt/Fluxograma_simples.png">
</p>



## for loop

`for` é utilizado quando temos definida a quantidade de iterações de repetições necessárias.
<p align="center">
  <img width="300" src="https://media.tenor.com/Oe-fMIIqnT8AAAAC/loop-infinite.gif">
</p>

 Por parâmetro, <b>for</b> recebe três atributos: 

```javascript
for ([inicialização]; [condição]; [expressão final]) {
   declaração;
}
```
 - Inicialização: é uma expressão ou declaração de variáveis. É usada para iniciar o contador de variáveis.
 - Condição: é a expressão que será avaliada antes da iteração do loop. Enquanto a condição for atendida, o seu código será executado.
 - Expressão final: é validada ao final de cada iteração que acontece no laço FOR. Utilizada para incrementar ou atualizar a variável.
 - Declaração: é o trecho de código que será executado caso a condição seja verdadeira.
 
### Exemplo
```javascript
for (var i = 0; i < 9; i++) {
   console.log(i);
}
```

#### 🏋🏽 Bora praticar 
  Abra o Visual Studio 

  <details>
    <summary> <b>Pratica 1:</b> inicie a variável <b>i</b> recebendo o valor 0. Enquanto for menor que 11, acrescente mais um número a variável, então imprima na tela (2*i). </summary>

```javascript
const fruta1 = "banana";
const fruta2 = "maçã";
const fruta3 = "laranja";
console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
```
  </details>
