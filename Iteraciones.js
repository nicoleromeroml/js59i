// let i = 1;

// while (i < 10) {
//     console.log('Hola comsion');
//     i = i + 1
// }


// let numero = prompt('ingrese un numero');
// let contador = 0;

// while (contador < numero) {
//     console.log(contador)
//     contador++
// }

// while (contador > numero) {
//     console.log(contador)
//     contador--
// }


//!CICLO FOR
//inicializamos la variable, la condicion,la incrementacion.

// for(let i=0; i<=20; i ++){
//     console.log(`soy la vuelta numero ${i} del index`);
//     }


//! EJERCICIO REPASO : Creamos una aplicación que tiene un denso prompt que solo lo podrá sacar alguien que sea rey y que se llame Arturo

// let nameUser;
// let isKing = false;

// while(nameUser !== 'arturo' && isKing !== true){
//     nameUser = prompt('ingrese su nombre');
//     if(nameUser == 'arturo'){
//         isKing = confirm('sos soy rey?')
//         if(isKing == false){
//             alert('no sos rey pa')
//         }
//     }
// }

// console.log('Grande rey!!!')


//todo : EL USUARIO INGRESA EL NUMERO DE LA TABLA QUE DESEA OBTENER: Y LE DEVOLVEMOS LA TABLA QUE SOLICITO.

let numeroTabla = prompt('Indique el numero de tabla que desea');

for(let contador=1; contador<=10; contador++){
    console.log(`${numeroTabla} X ${contador} = ${numeroTabla * contador}`)
}