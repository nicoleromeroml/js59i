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

let edad = prompt('ingrese su edad');

if(edad >=18 && edad<=30){
    console.log('el tema para tu edad es: OJOS BONITOS ')
}else if (edad >30 && edad<=60){
    console.log('el tema para tu edad es : RICARDO ARJONA')
}else if(edad >60 && edad<98){
    console.log('el tema es MUSICA CLASICA O TANGO')
}else{
    console.log('no tenes edad')
}
