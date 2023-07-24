//! a - CREAR UNA CLASE LIBROS
// 1-NUM DE LIBROS YA LEIDOS
// 2- LIBROS SIN LEER
// 3- SIGUIENTE LIBRO
// 4- LIBRO ACTUAL
// 5- ULTIMO LIBRO
// 6- ARRAY CON TODOS LOS LIBROS


class ListaLibros {
    constructor(duenio){
        this.duenio = duenio;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro =  null;
    }

agregarLibros(libro){
this.libros.push(libro);
if(libro.leido== true){
    this.librosYaLeidos.push(libro)
}else{
    this.librosNoLeidos.push(libro)
}

}

empezarLibro(libro) {
    this.libroActual = libro;
}


finalizarLibro(libro){
    this.ultimoLibro = this.libroActual;
    this.librosYaLeidos.push(libro);
    this.librosNoLeidos = this.librosNoLeidos.filter(i => i.titulo !=this.libroActual.titulo)
    this.libroActual = null
}

}




//! B CREAR UNA CLASE LIBRO
// 1- TITULO
// 2 - genero
// 3- AUTOR 
// 4-BOOLEANO LEIDO O NO

class Libro {
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;

    }
}

const libroLautaro = new ListaLibros('lautaro');

const principito = new Libro('el principito', 'fantasia', 'exupery', true)