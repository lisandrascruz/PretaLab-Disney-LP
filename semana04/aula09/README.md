# Aula 09

<p align="center">
  <img width="600" src="https://camo.githubusercontent.com/b30511722f70fde6e05fb4aec88d0e83b11484fb5e80f4557af6c5ed19767f24/68747470733a2f2f7468756d62732e6766796361742e636f6d2f41676974617465644c6f6e656c79426c61636b6275636b2d6d61782d316d622e676966">
</p> 

## 🔁 Estruturas de Repetição

Estruturas de repetições repetem determinado bloco de comandos enquanto a condição atende ao requisito. As estruturas de repetição são representadas por `while`, `do while` e `for`.

<p align="center">
  <img width="600" src= "https://wiki.sj.ifsc.edu.br/images/7/7c/Fig039_MCO018703.jpg"> 
 </p>
  
### WHILE

`while` cria um laço que executa um bloco de comando especifico enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução do bloco.

### Exemplo 2
```javascript
let i = 0;
while (i < 11){
    console.log("5 x " + i + " = " + 5*i)
    i++
 }
 ```
 
### DO WHILE

`Do while` é parecido com while, mas nele, a condição só acontece depois que os comandos do bloco forem executados.


### Exemplo 2
```javascript
let i = 0;

do {
    console.log("O contador vale:" + i);
    i++;
} while (contador < 5)
```

#### 🏋🏽 Bora praticar 
  Abra o Visual Studio 

  <details>
    <summary> <b>Pratica:</b> inicie a variável <b>i</b> recebendo o valor 0. Enquanto for menor que 11, acrescente mais um número a variável, então imprima na tela (2*i). </summary>

```javascript
for (let i = 0; i < 11; i++) {
    console.log(2*i);
}
```
  </details>
  
  
  
---

<p align="center">
  Isso é tudo pessoaaal!
</p>

<p align="center">
  <img src="https://camo.githubusercontent.com/0ae622f2ae10d672df09248a9d00ec6ce16558dad1c305531cb4caf33137b784/68747470733a2f2f7468756d62732e6766796361742e636f6d2f416767726573736976654a65616c6f7573416d75726d696e6e6f772d73697a655f726573747269637465642e676966" width="500"/>
</p>
