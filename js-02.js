let dato = 'pablito clavo un clavito';
let contrasena = '                      12345                     '
console.log(dato.length); //mostrarme la longitud de un elemento, ES UNA PROIPIEDAD
console.log(dato.toUpperCase()) // pasar toda la cadena a mayuscula, ES UN METODOS
console.log(dato.toLowerCase()) // pasar toda la cadena a minuscula, ES UN METODOS
//console.log((dato.charAt(0))) // Devuelve un elemento de una determinada posicion, que debo indicarle a traves de; parametro
//console.log(dato.substring(7))
// Devuelve una parte de la cadena segun se le indique en el parametro, debemos indicar desde donde y hasta donde queremos cortar
//console.log(contrasena.trim()) // Elimina los espacios en blanco

console.log(dato.includes('ana')) // Verificamos si el texto que buscamos coincide o se encuentra dentro de la variable

//! Ejercicio1 en clases: Recibir el apellido del usuario, y mostrar por consola la última letra

//1- Recibir el apellido del usuario
//2- Mostrar por consola la ultima letra

// let nameUser = prompt('Ingrese su nombre');
// console.log(nameUser.substring(nameUser.length-1))

//! EJERCICIO2 Recibir el nombre del usuario, y mostrar por consola el nombre con la primera letra en mayúscula

//1-Pedir al usuario su nombre
//2-Mostrar por consola el nombre con la primera letra en mayuscula

// const nombre = prompt('Ingrese su nombre');
// const resultado = nombre.charAt(0).toUpperCase();
// const resultado2 = nombre.substring(1).toLowerCase();
// console.log(resultado + resultado2);


//let numero = 37.65;

//console.log(Math.round(numero)); //redondeo
//console.log(Math.floor(numero)); //truncamiento

//todo ENCONTRAR MAXIMOS Y MINIMOS

let maximo = Math.min(1,14,45,78,36);
console.log(`El numero mayor es ${maximo}`)
console.log(`El numero menor es ${maximo}`)

//TODO portencias y raices
//console.log(Math.pow(3,2)) // cuadrado
//console.log(Math.pow(3,3)) //cubo
//console.log(Math.sqrt(9)) //raiz cuadrada
//console.log(Math.cbrt(27)) //raiz cubica

//let ateatorio = Math.round(Math.random() * 100)
//console.log(ateatorio)

//let numeroDos = 12.657890987656789

//console.log(parseInt(numeroDos)) //CONVIERTE EL STRING EN NUMERO PERO SOLO LOS ENTEROS
//console.log(Number(numeroDos)) //NO RECONOCE LETRA, SOLO NUMEROS
//console.log(parseFloat(numeroDos)) //CONVIERTE EL STRING A NUMERO Y RECONOCE DECIMALES

//  console.log(numeroDos.toFixed(2))
 
let numero3 = parseInt(prompt('ingrese un numero'));

if(numero3%2 == 0){
    alert(`el numero ${numero3} es par`)
}else{
    alert(`el numero ${numero3} es impar`)
}









