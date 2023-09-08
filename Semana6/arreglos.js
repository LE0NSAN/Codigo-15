const personas =["Pablo", "Juan", "Pedro", "Maria", "Lucia"];
console.log(personas[3]);

// Agrega un elemento al final de la lista 
personas.push("Alejandro");

// Cuenta la cantidad de elementos en el array 
console.log(personas.length);

// Pop: elimina el ultimo elemento del Array 
const eliminado=personas.pop();
console.log("Personas despues del POP", personas, eliminado);

// unShift: Agrega un elemento al inicio del array 
personas.unshift("Primero elemento");
console.log("Personas unshift", personas);

// Shift: Elimina el primer elemento del array
personas.shift(); 
console.log("Personas shift", personas);

//For
const numeros=[1,2,3,4,5,6,7,8,9,10];
const producto=5;
const resultado=[];
const resultado2=[];

for(let i = 0; i < numeros.length; i++){
    const operacion = numeros[i] * producto;
    resultado.push(operacion);
}
console.log("Calculadora", resultado);

//For of
for (const numero of numeros){ 
    resultado2.push(numero * producto);
}
console.log("For of", resultado2);

// FOR OF
const numeros3 = [2, 5, 20, 21, 1, -5]

// Quiero hallar el numero mayor de la lista numeros
let mayor = numeros3[0] // 2

for (const numero of numeros3) {
  if (numero > mayor) {
    mayor = numero
  }
}

console.log(mayor)

const numeros5 = [1, 2, 13, 23, 24, 89, 104]

// Quiero un algoritmo que diga la suma de los numeros pares e impares

// Paso 1: crear 2 variables
let sumaPar = 0
let sumaImpar = 0

// Paso 2: for of
for (const numerito of numeros5) {
  if (numerito % 2 === 0) {
    sumaPar += numerito
  } else {
    sumaImpar += numerito
  }
}

console.log("Suma Par", sumaPar)
console.log("Suma Impar", sumaImpar)


//Contador de letras
const palabra = "monitor"

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra !== vocal) {
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


// map
// forEach

// Map retorna un array y ForEach solo itera

// Ejemplo de calculadora
const numeros7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map Retorna el array donde a cada elemento de numeros lo ha
// multiplicado * 
const resultado7 = numeros7.map(function (numerito2) {
  return numerito2 * 5
})

console.log(resultado7)


const personas4 = [
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
  
  // Reto solo quiero obtener los nombres de las personas y guardarlos en un array
  const nombres = personas4.map((persona) => persona.name)
  
  console.log(nombres)


  function calcular(n1, n2) {
    return n1 + n2
  }
  
  const calcular2 = (n1, n2) => {
    return n1 + n2
  }
  
  // Si solo tenemos una linea dentro de la funcion esta puede abreviarse
  const calcular3 = (n1, n2) => n1 + n2
  
  const division = (n1, n2) => {
    if (n2 === 0) return "No valido"
    return n1 / n2
  }
  
  calcular2(1, 2)
  calcular2(2, 3)


  //Nivel 1
  const esPar=(num1) =>{
    if(num1 % 2 === 0){
        return true
    } else{
        return false
    }
  }

  const nombre = undefined
  const edad = 18
  console.log(nombre ?? "Nombre no encontrado") // Nulish coelscing operator ??
  console.log(nombre ? nombre : "Nombre no encontrado") //Sintaxis de un Operador ternario
  console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")

/////////////////////////////////////////

// Crear una funcion que reciba un numero es indique si es par, esta retorna true si no false

// Nivel 1
// const esPar = (numero) => {
//     if (numero % 2 === 0) {
//       return true
//     } else {
//       return false
//     }
//   }
  
//   // Nivel 2
//   const esParSilvia = (numero) => {
//     if (numero % 2 === 0) return true
//     return false  
//   }
  
//   const nombre = undefined
//   const edad = 18
//   // Nulish coelscing operator ??
//   console.log(nombre ?? "Nombre no encontrado")
//   // Operador ternario true ? si : no
//   console.log(nombre ? nombre : "Nombre no encontrado")
//   console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")
  
//   const esParJose = (num) => num % 2 === 0 ? true : false
  
//   const esParRel = numero => numero % 2 === 0
//   esParRel(20)

//////////////////////////////////////

const personas01 = [
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
  const ages = personas01.map((persona) => persona.age * 10)
  // ahora quier las edades pero multiplicas x 10
  // '[21, 22, 25]'
  // '[210, 220, 250]'
  console.log(ages)

//ForEach solo itera a diferencia de map que devuelve un array
  const numerosa = [1, 3, 5, 7, 9]

  numerosa.forEach((numero) => {
    console.log(numero)
  })


  // filter
// find
const numerosab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtras los numeros que sea multiplo de 3
// filter: retorna un array con el filtro
const numerosFiltrados = numerosab.filter((numer) => numer % 3 === 0)

const numerosFiltrados2 = numerosab.filter((numer) => {
  return numer % 3 === 0
})

const numerosFiltrados3 = numerosab.filter(function(numer) {
  if(numer % 3 === 0) {
    return numer
  }
})

console.log(numerosFiltrados)
console.log(numerosFiltrados2)
console.log(numerosFiltrados3)

const personasac=[
    {
        name:"Pedro",
        lastname: "Perez",
        age: 21,
    },
    {
        name:"Juan",
        lastname: "Zapata",
        age: 22,
    },
    {
        name:"Maria",
        lastname: "Gonzales",
        age: 25,
    }
]

const edadFiltro = personasac.filter((edadf) => edadf.age > 21 && edadf.lastname.includes("t"))
console.log(edadFiltro)

// Filter devuelve un Array
// Find devuelve un objeto (la primera coincidencia)

