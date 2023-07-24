let persona = {
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


//HERENCIA 

class Person {
    constructor(name, age, provincia){
        this.name= name;
        this.age = age;
        this.provincia = provincia;
    }
    saludar(){
        console.log('Hola soy ' + this.name)
    }
}
class Estudiante extends Person {
    constructor(name,age, comision){
        super(name, age);
        this.comision = comision;
    }
}
let ivan = new Estudiante('ivan', 30, 'comision 59i'); //todo INSTANCIA creamos el objeto con sus respectivos datos.

class SuperHeroe extends Person {
    constructor(name, age, power, provincia){
        super(name, age, provincia);
        this.power = power;
    }
}
let superman = new SuperHeroe('Superman', 40, 'volar');
let ironman = new SuperHeroe('Ironman', 45, 'millonario', 'tucuman');
