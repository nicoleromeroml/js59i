//? Array son lista ordenada de elementos, que pueden ir desde datos como number, string, booleano, arreglo.

// let array = ['nicole', true, 'matias', 28, ['desarrollador ', 'plomero']];
// console.log(array.length)
// console.log(array[4])

let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
//!METODO PARA AGREGAR UN ELEMENTO AL FINAL DE ARRAY
// dias.push('feriadol')
// console.log(dias)

//!ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Y LO DEVUELVE EN CASO QUE LO ESPECIFIQUEMOS
// let diaElimiando = dias.pop()
// alert(diaElimiando)
// alert(dias)

//!Agrega un elemento al inicio del array
// dias.unshift('Domingol');
// console.log(dias)

//!ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y LO DEVIUELVE
// console.log(dias.shift())
// console.log(dias)

//!Devuelve la posicion del elemento que se le indique
console.log(dias.indexOf('martes'))

//!Invierte el orden del arreglo
// console.log(dias.reverse());



let diasDos = ['feriadol', 'domingol']
//!Concatena dos arreglos debemos pasar el segundo arreglo como parametro
console.log(dias.concat(diasDos))


//!Devuelve true en caso que contenga al elemento indicado por parametro
console.log(dias.includes('dominguito'))


//!Devuelve todos los elemento con el separador especificado por parametro
console.log(dias.join(' \n-'))

//!Ordena el Array alfabeticamente
// console.log(dias.sort())

dias.splice(1,2, 'feriadol')
console.log(dias)



