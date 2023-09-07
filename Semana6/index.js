const nombre = "Ivan";
const apellido = "Leon";
const dni = "99999999";

const datos= nombre +" "+apellido+" "+dni;
const datos2= `datos: ${nombre} ${apellido} ${dni} `


console.log("concatenacion", datos);
console.log("tempate string", datos2);


// Formas de console 
console.log("Info");
console.error("Error en consola");
console.warn("Warning en consola");

// Operadores matematicos 
console.log("Suma 1", 2 + 2);
console.log("Suma 2", 2 + "2");
console.log("Resta 1", 20 - 10);
console.log("Resta 2", 20 - "5");
console.log("Dvision 1", 1300 / 5);
console.log("Multiplicacion", 23 * 6);
console.log("Residuo MOOD", 40 % 5);
console.log("Residuo MOOD", 40 % 3);
console.log("Raiz cuadrada", Math.sqrt(100));
console.log("Potencia", Math.pow(4, 0.5));
console.log("Potencia", 4 ** 2);
console.log("Pi", Math.PI);

// operadores de comparacion retonan un boolean (true/false) 
// Igualdad 
// Doble igual solo compara el valor 
console.log(2 == "2");
// Triple igual compara el valor y el dato 
console.log(2=== "2");
// Diferencia 
console.log("Diferente",2 != "2");
console.log("Diferente",2 !== "2");
// mayor Menor 
console.log(100>10);
console.log(10<100);
console.log(10<100);
console.log(100<10);
console.log(101>=10);
console.log(101<=100);


console.log("===== Condicionales ======")
// condicionales 
let edad = 15

if (edad>=18){
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

const numero= 12;  //  prompt("Escribe un numero");
console.log(typeof Number(numero));
// Podemos converti la variable a numero? 
if (Number(numero) %2 ===0){
    console.log("El numero es par")
} else{
    console.log("El numero es impar")
}

// and = y = && 
if (numero > 10 && numero < 20 && typeof numero === "number"){
    console.log("Este numero esta entre 10 y 20")
}else{
    console.log("No cumple las condiciones")
}

// or = ó = || 
if (numero > 10 || numero < 20 || typeof numero === "number"){
    console.log("Este numero cumple con alguna condicion")
} else{
    console.log("No cumple las condiciones")
}

console.log("===== Fecha ======")
const fecha = new Date()
// console.log(fecha.getHours())
const hora = fecha.getHours()

if (hora<12){
    console.log("Buenos dias");
}   else if (hora < 18){
    console.log("Buenas tardes");
} else if (hora < 20){
    console.log("Buenas tardes en Argentina");
} else{
    console.log("Buenas noches");
}

