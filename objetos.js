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
console.log(Team)


//todo: CREANDO OBJETOS A PARTIR DE CLASES

class Country{
    constructor(name, people){
        this.name = name;
        this.people = people;
    }
}
const argentina = new Country('Argentina', 40000000); //instanciando
const brasil = new Country('Brasil', 8000000)//instanciando
console.log(argentina)

