//! DOM Y BOM

//DOM DOCUMENT OBJECT MODEL  a traves del DOM puedo acceder al html, o a todo lo visual de nuestro proyecto








//? BOM BROWSER OBJECT MODEL puedo acceder a toda la informacion de la barra de navegacion










//!FUNCIONES PARA MANEJAR EL TIEMPO

//todo:  Ejecuta una tarea  cada un determinado lapso de tiempo

function helloWorld() {
    console.log('Hola comisiion !!!');

}
//  setInterval( () => helloWorld(),4000)



//todo: setTIMEOUT EJECUTA UNA FUNCION PASADO UN DETERMINADO LAPSO DE TIEMPO
setTimeout(() => console.log('hola buenas noches!!!'), 6000);


//?EJERCICIO DEL TIEMPO, CREAR UN CONTADOR QUE DESPUES DE LOS 10 SEGUNDOS ME MUESTRE UN MSJ PARA EL DESPEGUE!!!

// let contador = 10;

// const contadorTiempo = setInterval( () => {
//     console.log('despegue en ', + contador)
//     contador--
// }, 1000)

// setTimeout( ()=>{
//     clearInterval(contadorTiempo);
//     console.log('DESPEGUEEEEEEEEEEEEEEE!!!!!!')
// }, 10000 )


function cambiarTexto () {

const h2Cambio = document.getElementById('h2-cambiar');
h2Cambio.innerText = 'El texto ha sido modificado!'
h2Cambio.style.backgroundColor='red'

}

//todo:  Cambiar de tema

function cambiarTema () {
   const elementoCambiado = document.getElementById('probando-tema');
if(elementoCambiado.classList.contains('light')){
    elementoCambiado.classList.add('dark');
    elementoCambiado.classList.remove('light')
}else{
    elementoCambiado.classList.add('light');
    elementoCambiado.classList.remove('dark')
}


}

//POR ID : document.getElementById('id')
//POR CLASE : document.getElementByClassName('clase')
//POR NOMBRE DE ETIQUETA : document.getElementByTagName('tag')
//POR SELECTOR : document.querySelector(.texto)
//POR SELECTOR : document.querySelectorAll(.texto)



//todo: Crear elementos cada vez que realizo un click

function agregarElemento() {

    const newElement = document.createElement('div'); //creamos el elemento
    newElement.classList.add('cuadrado')//le ponemos info al elemento, ej: la clase
    newElement.innerText = 'Soy un cuadrado!'// sigo cargando informacion
    const padreElemento = document.querySelector('.nuevo-elemento'); //buscamos al padre para ubiucarlo en el html
    padreElemento.appendChild(newElement)// adoptamos al elemento hijo



}