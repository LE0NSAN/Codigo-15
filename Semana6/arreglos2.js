// const nombres = ["Pepe", "Juan", "Maria", "Mercedes", "Juan", "Maria"]

// const busqueda = nombres.findIndex((nombre)=> nombre === "Carlos");
// const busqueda2 = nombres.find((nombre)=> nombre === "Carlos");

// console.log(busqueda);
// console.log(busqueda2);

// const numeros = [2,4,6,8,10]
// // Si todos los numeros son pares 
// let par = true

// // Si todos los numeros son pares
// for (const numero of numeros) {
//   if (numero % 2 !== 0) {
//     par = false
//   } 
// }

// console.log("resultado", par)
// const todoEsPar = numeros.every((numero) => numero % 2 === 0)
// console.log("resultado con every",todoEsPar)

////////////////////////////////
/*
  Escribe un programa que muestre por consola (con un console) los
  números de 1 a 100 (ambos incluidos y con un salto de línea entre
  cada impresión), sustituyendo los siguientes:
  - Múltiplos de 3 por la palabra "fizz".
  - Múltiplos de 5 por la palabra "buzz".
  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*
1
2
fizz
4
buzz
6
7
8
fizz
buzz
11
fizz
13
14
fizbuzz
*/

// const relacion =[];

// Solucion 1 
// for (let i = 1; i <=100; i++){
//     if(i % 15 ===0){
//         console.log("FizzBuzz")
//     }  else  if(i % 3 ===0){
//         console.log("Fizz")
//     } else if (i % 5 ===0){
//         console.log("Buzz")
//     } else{
//         console.log(i)
//     }  
// }

//Solucion 2

// function validateFizzBuzz(numero){
//     const m3 = numero % 3 === 0;
//     const m5 = numero % 5 === 0;
//     const m15 = numero % 15 === 0;

//     const respuesta = m15 ? "Fizzbuzz" : m3 ? "Fizz" : m5 ? "Buzz" : numero;
//     return respuesta;
// }

// for (let i = 1; i <=100; i++){
//     console.log(validateFizzBuzz(i));
// }

////////////////////
// Problema 2 JS 

/*
Escribe un programa que reciba un texto y transforme lenguaje natural a
"lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 se caracteriza por sustituir caracteres alfanuméricos.
- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
  con el alfabeto y los números en "leet".
  (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
//   const alfabeto = {
//     a: "4",
//     b: "I3",
//     c: "[",
//     d: ")",
//     e: "3",
//     f: "|=",
//     g: "&",
//     h: "#",
//     i: "1",
//     j: ",_|",
//     k: ">|",
//     l: "1",
//     m: "/\\/\\",
//     n: "^/",
//     o: "0",
//     p: "|*",
//     q: "(_,)",
//     r: "I2",
//     s: "5",
//     t: "7",
//     u: "(_)",
//     v: "\\/",
//     w: "\\/\\/",
//     x: "><",
//     y: "j",
//     z: "2",
//     1: "L",
//     2: "R",
//     3: "E",
//     4: "A",
//     5: "S",
//     6: "b",
//     7: "T",
//     8: "B",
//     9: "g",
//     0: "o",
//   };
  
//   // casa = [454

//   //Solucion 1
//   function converStringHacker(word) {
//     let resultado = "";
  
//     for (const letter of word) {
//       resultado += alfabeto[letter.toLowerCase()] ?? " ";
//     }
  
//     return resultado;
//   }
  
//   console.log(converStringHacker("hola mundo"));

//  //Solucion 2
//  function converStringHacker(word) {
//     return word
//       .toLowerCase()
//       .split("")
//       .map((w) => alfabeto[w] ?? " ")
//       .join("");
//   }
  
//   console.log(converStringHacker("hola mundo"));

////////////////////////////////
// Problema 3

/**
¿ES UN ANAGRAMA?
Enunciado: Escribe una función que reciba dos palabras (String) y 
retorne verdadero o falso (Bool) según sean o no anagramas.
Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
NO hace falta comprobar que ambas palabras existan.

Dos palabras exactamente iguales no son anagrama.
*/

// // 1 toLowerCase() => RomA : roma
// // 2 split("") => roma: ['r', 'o', 'm', 'a']
// // 3 sort() => ['r', 'o', 'm', 'a'] : ['a', 'm', 'o', 'r']
// // 4 join("") => ['a', 'm', 'o', 'r'] : 'amor'

// const sortText = (word) => word.toLowerCase().split("").sort().join("");

// function isAnagram(text1, text2) {
//   if (text1.toLowerCase() === text2.toLowerCase()) return false;

//   return sortText(text1) === sortText(text2);
// }

// console.log(isAnagram("Hola", "hola")); // false
// console.log(isAnagram("RomA", "orma")); // true
// /**
//  * roma => amor
//  * orma => amor
//  * 
//  * Si despues de ordenar ambas palabras estan son iguales entonces es un anagrama
//  */
// console.log(isAnagram("rome", "orma")); // false


////////////////////////////////
// Problema 4 



function isPrime(number) {
    if (number === 1) return "no es primo";
  
    let cont = 0;
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) cont++;
    }
  
    return cont === 2 ? "es primo" : "no es primo";
  }
  
  for (let i = 1; i <= 1000; i++) {
    console.log(i, isPrime(i));
  }