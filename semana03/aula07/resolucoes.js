for (let contador = 0; contador < 9; contador++) {
  console.log(contador);
}

// contador++ => contador = contador + 1
// contador+=2 => contador = contador + 2
// contador+=10 => contador = contador + 10

// contador-- => contador = contador - 1
// contador-=3 => contador = contador - 3

// contador*=2 => contador = contador * 2

// modificar para listar de 5 a 10
for (let contador = 5; contador < 11; contador++) {
  // console.log(contador);
}
for (let contador = 5; contador <= 10; contador++) {
  // console.log(contador);
}

for (let contador = 0; contador <= 10; contador++) {
  if (contador > 4 && contador < 11) {
    console.log(contador);
  } else {
    console.log("ops, esse numero não vale: " + contador);
  }
}
