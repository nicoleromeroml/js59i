//? DRY 
//!funciones declarativas:
// function hello(){
//     console.log('Hola mundo desde funcion declarativa!')
// }
// hello();
//!funciones anonimas
// const hello2 = function () {
//     console.log('Hola mundo desde funcion anonima!')
// }

// hello2();
//!arrow function
// const hello3 = () => {
//     console.log('hola mundo desde la funcion de flecha!')
// }
// hello3();



//TODO: BASE DE DATOS PARA ELIMINAR USUARIOS:

let database = ['matias', 'celeste', 'agustina', 'mario', 'joaquin', 'lucas', 'ivan'];

const deleteUser = () => {
   let nameUser = prompt('ingrese el usuario que desea eliminar').toLowerCase();

   let position = database.indexOf(nameUser);
if(database.includes(nameUser)){
    database.splice(position,1);
    alert('usuario eliminado correctamente!');
}else{
    alert('usuario no encontrado!')
}

}
//TODO: BASE DE DATOS PARA EDITAR USUARIOS:

// const updateUser  = () => {
//     let nameUser = prompt('ingrese el usuario que desea eliminar').toLowerCase();
//     let update = prompt('que usuaerio queres agregar').toLowerCase();
//    let position = database.indexOf(nameUser);

//    if(database.includes(nameUser)){
//     database.splice(position,1,update );
//     alert('usuario editado correctamente');

//    }else{
//     alert('usuario no encontrado!')

//    }
// }

//! LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

// const hi = nombre => alert('Hola ' + nombre);
// const bye = nombre => alert('Chau ' + nombre);

// function userRegister(saludo) {
//    const name = prompt('como es tu nombre?');
//    saludo(name)
// }
// userRegister(hi);
// userRegister(bye);

//!METODOS FILTER, FIND, MAP & FOREACH

const ageDataBase = [23, 14, 45, 37, 25, 18, 16];


function mayoresDe25 (edad) {
    if(edad >= 25){
        return edad;
        // console.log(edad)
    }
}

//todo: crea un nuevo array con todos los elementos que cumplen con la condicion dada en la funcion.
const respuestMayores2 = ageDataBase.filter(mayoresDe25) // FORMA 1
const respuestMayores = ageDataBase.filter(edad => edad >= 25) //FORMA 2
// console.log(respuestMayores)
// console.warn(respuestMayores2)



//todo: devuelve al PRIMER ELEMENTO que cumpla con la condicion especificada.
const respuestMayores3 = ageDataBase.find( fulanito => fulanito >= 25);
// console.log(respuestMayores3)

//todo MAP ejecuta una accion sobre cada uno de los elementos, los modifica y los guarda.
const en20anios = ageDataBase.map(pepito => pepito +20);
// console.log(en20anios)



//todo FOREACH no devuelve nada, tampoco modifica el array original, pide prestado, hace algo y vuelve a guardar.
const en20anioss = ageDataBase.forEach(age => console.log(age +20));