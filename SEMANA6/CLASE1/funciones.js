// Bloque de codigo que hará algo

// Recomendaciones:
// El nombre de la función sea un verbo infinitivo (ar, er, ir, etc)

// Recibir
// numero1 = n1
// numero2 = n2
// operador = + - * /

function calcular(n1, n2, operador) {
  // console.log("N1:", n1);
  // console.log("N2:", n2);
  // console.log("Operador:", operador);

  if (operador === "+") return n1 + n2;
  if (operador === "-") return n1 - n2;
  if (operador === "*") return n1 * n2;

  if (operador === "*") {
    if (n2 === 0) return "No es posible dividir entre cero";
    return n1 / n2;
  }
  return "Operador no válido";
}

// Siempre debemos llamas a la funcion
console.log(calcular(1, 1   , "+"));
console.log(calcular(5, 4, "*"));
