// let numero = 12;

// if (numero < 10) {
//     console.log(`el numero ${numero} es menor`)
// } else {
//     if (numero > 10) {
//         console.log(`el numero ${numero} es mayor`)
//     }
//     else {
//         console.log(`el numero ${numero} es igual`)
//     }
// }

//if (condicion){
// lo que pasa si se cumple dicha condicion
//} else{
//lo que pasaria en bcaso que la condicion no se cumpla
//}

//! EJERCICIO DE COMPARACION DE NUMEROS : pedimos dos numeros al usuario y comparamos si el 1er num es mayor al 2do num
// let numberUser = parseInt(prompt('Ingrese el primer numero'));
// let  numbeUser2 = parseInt(prompt('Ingrese el segundo Numero'))


// if(numberUser > numbeUser2){
//     console.log('el numero es mayor')
// }else if (numberUser < numbeUser2){
//     console.log('el numero es menor')
// }else{
//     console.log('es numero es igual')
// }

//todo PEDIT UN NUMERO AL USUARIO Y VERIFICAR SI ES PAR O IMPAR
//  let numero = parseInt(prompt('ingrese cualquier numero'));

//  if(numero%2 == 0){
// console.log('el numero es par')
//  }else{
//     console.log('el numero es impar')
//  }


//! MUSICA POR EDAD De acuerdo a la edad del usuario le muestro una alerta con la musca que corresponda a su edad

// let edad = prompt('ingrese su edad');

// if(edad >=18 && edad<=30){
//     console.log('el tema para tu edad es: OJOS BONITOS ')
// }else if (edad >30 && edad<=60){
//     console.log('el tema para tu edad es : RICARDO ARJONA')
// }else if(edad >60 && edad<98){
//     console.log('el tema es MUSICA CLASICA O TANGO')
// }else{
//     console.log('no tenes edad')
// }



//!CEMENTERIO INDIO EMBRUJADO
//todo PREGUNTAR AL USUARIO SI TRAJO ANTEOJOS, EN CASO QUE DIGA "SI" MOSTRARLE EL MSJ QUE NO COMPRE, EN CASO QUE DIGA "NO" MOSTRAR EL MSJ QUE DIGA, COMPRA TRANQUILO

// let pregunta = prompt("Traes antojos??").toLowerCase()

// if(pregunta == "si"){
//     console.log('corre no te conviene!!!')
// }else if(pregunta == 'no'){
//     console.log('compra tranquilo pa\'')
// }
// else{
//    alert('Solo se admiten respuestas entre "SI Y NO" ')
// }



//todo PROVINCIAS COPADAS!!!

// if(provincias == "tucuman"){
//     alert('altas empanadas!!!!')
// }else if (provincias == "santiago"){
//     console.log('alta siesta primoo!!!!')
// }else if(provincias == "cordoba"){
//     console.log('aguante el cuarteto y el fernet!!!')
// }else if (provincias == 'jujuy'){
//     console.log('soltame carnaval!!!')
// }else{
//     console.log('provincia irrelevante')
// }

// let provincias = prompt('De que provincias sos?').toLowerCase()

// switch (provincias) {
//     case 'tucuman': //true o false
//         alert('altas empanadas!!!!')
//         break;
//     case 'santiago' :
//     console.log('alta siesta primoo!!!!')
//     break
//     case 'jujuy' :
//         console.log('soltame carnaval')
// break
//     default:
//         console.log('PROVINCIA IRRELEVANTE')
//         break;
// }

//! El usuario ingresa 3 notas, debemos calcular el promedio y de acuerdo al resultado informarle si esta aprobado o desaprobado;

// const nota1 = Number(prompt('ingrese la nota del 1er trimestre'));
// const nota2 = Number(prompt('ingrese la nota del 2do trimestre'));
// const nota3 = Number(prompt('ingrese la nota del 3er trimestre'));
// const promedio = (nota1 + nota2 + nota3) / 3;
// console.log(promedio)

// if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
//     alert('SOLO SE ADMITEN NUMEROS')
// } else {
//     if (promedio >= 6) {
//         alert('Estas aprobado🙌🔥')
//     } else {
//         alert('Estas desaprobado!!! segui participando 😂')
//     }
// }

//Que dia es hoy ??

let day = new Date().getDay();

switch (day) {
    case 1:
        console.log('Hoy es lunes')
        break;
    case 2:
        console.log('Hoy es martes')
        break;
    case 3:
        console.error('Hoy es Miercoles')
        break;
    case 4:
        console.log('Hoy es jueves')
        break;

 
}






