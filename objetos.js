//FORMA DE CREAR OBJETOS CON NOTACION LITERAL

let person = {
    name: 'matias',
    age: 30,
    location: 'San miguel de tucuman',
    hobbies : ['andar en bici', 'programar'],
    pet: [
        {
            name: 'firulais',
            type: 'dog'
        },
        {
            name: 'blaco',
            type: 'cat'
        }
    ],
    children: false,
    saludar: function () {
       alert('Hola chicos soy Matias!')
    }
}

let persona2 = {
    name: 'messi',
    age: 36,
    dni: 25677656,
    children: [
        {
            name: 'thiago',
            age: 10
        },{
            name: 'mateo',
            age: 7
        },{
            name: 'ciro',
            age: 4,
            pet: ['toto', 'coco']
        }
    ]

}

//TODO: CREANDO OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS


function Team (name, colors, people){
    this.name = name;
    this.colors = colors;
    this.people = people;
}
let sanMartin = new Team('Sam Martin de Tucuman', ['rojo', 'blanco'], 70000) //instanciando
let Atletico = new Team('Atletico Tucuman', ['celeste', 'blanco'], 80000) //instanciando
// console.log(Atletico)
// console.log(Team)


//todo: CREANDO OBJETOS A PARTIR DE CLASES

class Country{
    constructor(name, people){
        this.name = name;
        this.people = people;
    }

}
const argentina = new Country('Argentina', 40000000); //instanciando
const brasil = new Country('Brasil', 8000000)//instanciando
console.log(argentina);


//! MANEJANDO OBJETOS, Y TIPOS DE DATOS ALMACENDOS

let productos = [
    {id:1, nombre: 'Fideo', descripcion: 'fideos tirabuzon rivoli', precio: 200, categoria: ['familiar', 'alimentos']},
    {
        id:2, nombre: 'arroz', descripcion: 'arroz largo 53', precio: 200, categoria: ['familia', 'comestibles']
    }
]

//todo : peliculas o series

const series = [{
    nombre: 'friends',
    temporadas: 10,
    description: 'grupo de amigos que se divierten y la pasan bien', 
    mostrarDesc: function (){
        alert(`La serie se llama ${this.nombre}, un resumen breve es: ${this.description}`)}
    },
    {

        nombre: 'the crown',
        temporadas: 5,
        description: 'Las verdades de la Reina Isabel', 
        mostrarDesc: function (){
            alert(`La serie se llama ${this.nombre}, un resumen breve es: ${this.description}`)
    }
    
}]

// forEach
series.forEach(serie => serie.mostrarDesc())

// console.log(productos.nombre)
// console.log(productos[0].nombre)
// console.log(productos[0].descripcion)
