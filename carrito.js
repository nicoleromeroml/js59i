let products = ['gaseosa', 'agua', 'cerveza', 'vino', 'fernet', 'gin', 'vodka'];
let carrito = [];

const agregarproducto = () => {
   const productoAgregado = prompt('Que producto desea llevar?').toLowerCase()
   if(products.includes(productoAgregado)){
    carrito.push(productoAgregado);
    alert('producto agregado!')
   }else{
    alert('No vendemos ese producto, volve la proxima!')
   }
}

const mostrarCarrito = () => {
    alert('tus productos selecionados son: ' + carrito.join('\n ')) 
}

const buscarUnProducto = () => {
    const producABuscar = prompt('ingrese el producto que desea buscar').toLowerCase()
    const productoEncontrado = carrito.find(producto => producto == producABuscar )
    alert(productoEncontrado)

}
const buscarCoincidencias = () => {
    const buscar = prompt('buscar coincidencias').toLowerCase();
    const resultado = products.filter(producto => producto.includes(buscar));
    alert(resultado)

}