# Aula 06

Nem só de bloquinho vive a pessoa estudante, então simbora manter o conteúdo fresquinho na mente? Temos 3 alegorias de questões. 
<p align="center">
  <a href="https://www.youtube.com/watch?v=qtsVEZ-A36w" target="_blank">
    <img src="https://i3.ytimg.com/vi/qtsVEZ-A36w/maxresdefault.jpg" width="500" border="10" />
  </a>
</p>

<p align="center"> Para entender o nome das alegorias, clique na imagem acima e ouçam a música do Alceu! </p>

## Descendo ladeira, fazendo poeira, atiçando o calor
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218595744-4358a4cc-c084-49a0-8d2f-e46cb32e8923.png" width=400
</p>


#### 1. Siga as instruções descritas abaixo:
  <sub>Conteúdos abordados: constantes e variáveis</sub>
      
    a. Crie uma constante chamada **meuNome** e atribua a ela o seu nome.
    b. Crie uma constante chamada **cidadeNatal** e atribua a ela a sua cidade de nascimento.
    c. Crie uma constante chamada **anoDeNascimento** e atribua a ela o ano em que você nasceu.
    d. Crie uma variável chamada **profissão** e atribua a ela a sua profissão.
    e. Utilize o console.log para imprimir as constantes e variáveis que você criou.
    f. Altere o valor da variável profissão para **desenvolvedora** e tente exibir no console novamente, observe o que acontece.
    g. Atribua um novo valor à constante **cidadeNatal** e tente exibir no console novamente, observe o que acontece.
      
  > Você consegue entender e explicar, com suas palavras, o motivo do erro?

---

#### 2. Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do Javascript. Caso não esteja, corrija, deixando-a válida.
  <sub>Conteúdos abordados: variáveis, constantes e seus padrões de nomenclatura</sub>

    a. algum_nome: Mariana
    b. var Nome = 32; 
    c. const: idade 40;
    d. let profissão = 'desenvolvedor';

--- 

#### 3. Vamos fazer algumas operações simples. Queremos imprimir a área e o perímetro de um retângulo, sabemos que a base do retângulo é 5 e a altura é 8.
<sub>Conteúdos abordados: operadores aritméticos</sub>

> Para te ajudar a pensar, **escreva em português um algoritmo** do que você deve fazer para calcular a área de um perimentro. Feito isso, **escreva um código** que calcule a área e exiba no console.
    
    Exemplo: Quero imprimir o nome de minha gata no console.

    1. Meu algoritmo em portugues seria:
      - Criar constante e atribuir a ela o nome de minha gata 
      - Dar um console.log o valor da constante de eu acabei de criar

    2. Meu código seria:
      const nomeDaMinhaGata = “Olga”; 
      console.log(nomeDaMinhaGata);

---

#### 4. Sem rodar os códigos, tente analisar e identificar quais trechos de código terá como saída no console 'Folia' com base nas variáveis declaradas.
  <sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

  ```javascript
  const a = null;
  const b = 20;
  const c = true;
  const d = '';
  ```

  Trecho 1:
  ```javascript
  if (b === 20 && c != false && d == 0) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 2:
  ```javascript
  if (a == 0) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 3:
  ```javascript
  if (d) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 4:
  ```javascript
  if (b == '20') {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

---
#### 5. Observe as variáveis criadas abaixo. Você tem o ano de nascimento da Shuri. Usando seus conhecimentos, com base no ano de nascimento, calcule a idade dela e exiba da seguinte forma no console. 
  <sub>Conteúdos abordados: operadores aritméticos e string </sub>
  
  > Olá, me chamo Shuri, sou Super Heroína, tenho **X** anos e tenho algo para te dizer: O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.


```javascript
  const nome = "Shuri";
  const anoDeNascimento = 1988;
  const profissao = "Super Heroína";
  const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
```

⚠️`Fique a vontade para cirar novas variáveis, se achar necessário`

---

#### 6. Crie uma variável chamada **diaDaSemana** que receba a string "quarta-feira". Utilizando if/else, implemente condicionais para que:
<sub>Conteúdos abordados: Tabela verdade, Estrutura Condicional</sub>
  
a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", o console.log imprima a seguinte mensagem:
  > Oba, mais um dia de aprendizado em JavaScript :D 
  
b. Se for algum dia de fim de semana:  
  > “FINALMENTE, descanso merecido”.

---

## Do pique do frevo caí como um raio
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218595053-988cfe41-c047-4291-912d-ccfa5bf7346e.png" width=400
</p>


#### 7. Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

 > Por favor, me veja uma feijoada **E** um suco de laranja”
 
Seria muito triste se você recebesse apenas a bebida ou só a comida, não é? 

Também não seria legal se recebêssemos a feijoada completa, mas a nossa bebida fosse um caldo de cana. **Porque nosso pedido era de que as duas condições fossem atendidas corretamente.**

Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. Quando o pedido vier certo, seu programa deve imprima a mensagem: **"Muito grata pelo almoço!"** caso não seja o pedido, imprima: **"Acho que houve um engano com meu pedido"**.

---

#### 8. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. 
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

Para isso, considere as seguintes informações: 
* Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!".
* Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera".
* Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .

Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.

---

#### 9. Defina 2 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior dos dois números
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

---

#### 10. Defina 3 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior de três números.
<sub>Conteúdos abordados: operadores aritméticos e estrutura condicional</sub>

---

#### 11. Utilize if/else para escrever um código que define três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional e  Operadores aritméticos</sub>

💡 > Dica: brinque com os valores, teste para números pares e ímpares.

---

#### 12. Siga as instruções abaixo:
<sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

a. Crie uma constante chamada "horarioAtual", que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
b. Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. 
c. Implemente condicionais para que: 
  * Se o horário for maior ou igual a 22, atribua "Não deveríamos comer nada, é hora de dormir" na variável "mensagem".
  * Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "mensagem".
  * Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem". 
  * Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem". 
  * Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado" na variável "mensagem". 
d. Por fim, dê um console.log na variável "mensagem".

---

#### 13. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
<sub>Conteúdos abordados: Tabela verdade, Estrutura Condicional</sub>

  Siga essas regras:
  ```
  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C 
  Porcentagem >= 60 -> D 
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F
  ```

> O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100.

---

## Me segura que senão eu caio
<p align="center">
  <img src="https://user-images.githubusercontent.com/7760933/218594766-16ebd087-6649-4e79-af7e-f8927e99edb7.png" width=400
</p>


#### 14. Utilize if/else para escrever um código que se inicie com duas constantes declaradas: uma para o custo de um produto e outra para o seu valor de venda. A partir desses valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
<sub>Conteúdos abordados: Estrutura Condicional, operadores aritméticos</sub>

> Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de entrada seja menor que zero. 
---

#### 15. tilize if/else para escrever um código que define três constantes com os valores dos três ângulos internos de um triângulo. O programa deve retornar true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
<sub>Conteúdos abordados: operadores aritméticos, estrutura Condicional</sub>

  > Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
  
  > Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

  
