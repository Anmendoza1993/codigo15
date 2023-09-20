const personas = ["Pablo", "Juan", "Angel", "Marco", "Pepe"];
console.log(personas[3]);

// push. para agregar al ultimo de la lista
personas.push("Manuel");

// para conta la cantidad de elementos
console.log(personas.length);
console.log(personas);

// pop: Eliminar el ultimo elemento del array y retornar el elimento eliminado
const eliminad = personas.pop();
console.log("Personas despues del Pop", personas, eliminad);

// unshift: Agrega un elemento al inicio
personas.unshift("Primer Elemento");
console.log("Persona Unshift", personas);

// shift: Elimina el primer elemento
personas.shift("Personas Shift", personas);

// FOR .................. i ++ es = i+1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const producto = 5;
const resultados = [];
const resultados2 = [];


for (let i = 0; i < numeros.length; i++) {
  const operacion = numeros[i] * producto;
  resultados.push(operacion);
}

console.log("calculadora", resultados);

for (const numero of numeros) {
  resultados2.push(numero * producto);
}
console.log("for of", resultados2);

//  para contar vocales y palabras
const palabra = "monitor"

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra === vocal) {
      contador++ 
    }
  }
}

for (const letra of palabra) {
  if (!"aeiou".includes(letra)) {
    contador2++
  }
}

console.log("contador", contador)
console.log("contador2", contador2)

// Para sumar pares e impares

const numeros2 = [1, 2, 13, 23, 24, 89, 104]

// Quiero un algoritmo que diga la suma de los numeros pares e impares

// Paso 1: crear 2 variables
let sumaPar = 0
let sumaImpar = 0

// Paso 2: for of
for (const numerito of numeros2) {
  if (numerito % 2 === 0) {
    sumaPar += numerito
  } else {
    sumaImpar += numerito
  }
}

console.log("Suma Par", sumaPar)
console.log("Suma Impar", sumaImpar)


// Quiero hallar el numero mayor de la lista numeros
const numeros3 = [2, 5, 20, 21, 1, -5]

let mayor = numeros[0]

for (const numero of numeros3) {
  if (numero > mayor) {
    mayor = numero
  }
}

console.log("Numero mayor", mayor)

const personas5 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Gonzales",
      age: 25
    }
  ]
  
  // Reto solo quiero obtener los edades de las personas y guardarlos en un array
  const ages = personas5.map((persona) => persona.age * 10)
  // ahora quier las edades pero multiplicas x 10
  // '[21, 22, 25]'
  // '[210, 220, 250]'
  console.log("Solo Edades", ages)


  