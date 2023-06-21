//todo: VARIABLES Y TIPOS DE DATOS QUE SE PUEDEN ALMACENAR
//QUE ES UNA VARIABLE ? SON CAJAS DONDE PODEMOS ALMACENAR DATOS TEMPORALMENTE


let nombre = 'nicole';
let edad = 28;

// console.log(edad)
// console.log('holaaa')

//!los 3 tipos de variables
//?VAR : ES LA FORMA TRADICIONAL PARA DECLARAR VARIABLES Y SU ALCANCE ES GLOBAL (NO SE UTILIZA, ES MALA PRACTICA)

//?LET : ES LA FORMA MAS UTILIZADA, SON VARIABLES A LAS QUE SE LES PUEDE CAMBIAR EL VALOR A LO LARGO DEL TIEMPO, y tiene un alcance local


 //?CONST:  SON VARIABLES CONSTANTES, A LAS QUE NO SE LES PUEDE MODIFICAR SU VALOR.

 //!STRINGS 

 let textos = 'Hola comision';
 let textos2 = "hola comision dos";

console.log(textos, textos2)

//todo TIPOS DE OPERADORES : 
//?ASIGNACION

const comision = '59i'

//?OPERADORES ARITMETICOS
//SUMA +, RESTA -, MULTIPLICACION *, DIVISION /, RESTO %

// console.log(15%10)

//?OPERADORES UNITARIOS
// ++ (INCREMENTO)
// let numero = 20;
// numero++;
// console.log(numero)
// -- (DECREMENTO)

// let numeroDos = 10;
// numeroDos--
// console.log(numeroDos)
// // / ! (NEGACION) 

// let femenino = true;
// console.log(femenino)
// !femenino;


//!OPERADORES RELACIONES
 30 == 15 //igual a  ==> false
  
30 != 30 // diferente ==> false

30 === 30 //estrictamente igual ==> true

30 !== '30'//estrictamente diferente ==> true

30 > 10 //  mayor que ==> true

30 < 10 // menor que => false

30 <= 30  //menor o igual ==> true

30 >= 30 //mayor o igual ==> true

//! OPERADORES LOGICOS

30 < 10 && 30 < 15 // ESPERA QUE LAS DOS CONDICIONES SE CUMPLAN

30 < 10 || 30 < 15 // AL MENOS UNA DE LAS CONDICIONES DEBE CUMPLIRSE


//!CONCATENANDO TiPOS DE DATOS

// let nombreUser = 'nicole';
// let apellidoUser = 'romero';

// console.log(nombreUser + apellidoUser);

// let primerNumero = 10;
// let segundoNumero = 15;

// console.log('la suma de los dos numeros es igual a : ' + (primerNumero+ segundoNumero))


//2.	Crea un programa que solicite al usuario su nombre y luego lo salude por su nombre.

// let datoUsuario = prompt('ingrese su nombre')

// alert('hola buenas noches ' + datoUsuario);

// console.log("El dijo: \"hola mundo\"");

// console.log("hola "+ "mundo ")

let nombreUsuario = 'Nicole'
let edadUsuario = 28;

console.log("hola tu nombre es nombre" + nombre + " y tu edad es: " + edad)
console.log(`Hola tu nombre es ${nombre} y tu edad es ${edad}`)

