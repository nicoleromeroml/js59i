class Product {
    constructor(name, price, productId, descrip, imagen){
        //ESPECIFICO CADA PROPIEDAD QUE TENDRA EL PRODUCTO
        this.name = name;
        this.price = price;
        this.productId = productId;
        this.descrip = descrip;
        this.imagen = imagen
    }
}
let products = [
    //INSTANCIAR EL PRODUCTO
    new Product('samsumg', 60000, 'ee12sam323', 'Telefono samsung tactil 4gb', 'https://images.fravega.com/f1000/f741c5dc03f09eebef57e56dcc86c8f9.jpg'),
    new Product('Motorola', 65000, 'moto549948jfhgf', 'Motorola g24 8gb ', 'https://castillo.com.ar/Image/0/500_500-12382702-1.png'),
    new Product('Iphone', 200000, 'iph746464ghghhg', 'Iphone 14 pro max camara 64px', 'https://www.mink.com.ar/qloud/ryr/fotos/21470-0.jpg')
]

//forEach es un metodo para recorrer arreglos.
products?.forEach(
    product => {
        //crear el elemento
        const newProductCard = document.createElement('div')
        newProductCard.id = product.productId;
        //le agregamos la inoformacion
        newProductCard.classList.add('card', 'm-2');
        newProductCard.style.width='18rem';
        newProductCard.innerHTML = `
        <img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.descrip}</p>
          <spam href="" class="text-danger "> <strong>$ ${product.price}</strong> </spam>
          <br>
          <button class="btn btn-primary my-4" onclick="agregarCarrito(${product.productId})">Agregar al carrito</button>
          <button class="btn btn-danger">🤍</button>
        </div>
        `
        //buscamos al padre en el html
        const padreContainer = document.querySelector('main');
        padreContainer.appendChild(newProductCard);
    }
)
// let carrito = []
const cartFromLS = JSON.parse(localStorage.getItem('carrito'))
let carrito;
if(cartFromLS){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    carrito= []
}
// let carrito = JSON.parse(localStorage.getItem('carrito'))




    function agregarCarrito(productId) {

        let product = products.find(product => product.productId == productId.id)
        console.log(product)
        carrito.push(product)

        localStorage.setItem('carrito', JSON.stringify(carrito))
        //crear el elemento
        const newProductCads = document.createElement('div');
        newProductCads.id = product.productId;
        //agregamos la informacion
        newProductCads.classList.add('card', 'mx-2')
        newProductCads.style.width = '18rem'
        newProductCads.innerHTML = `
        <img src=${product.imagen} class="card card-img-top " alt=${product.name}>
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.descrip}</p>
        <spam href="" class="text-danger "> <strong> $${product.price}</strong> </spam>
        <button class="btn btn-danger" onclick=""> X </button>
        <br>

      </div>
        `
        //buscar al padre 
const padreContainer = document.querySelector('#cart-body')
        //adoptar al hijo
        padreContainer.appendChild(newProductCads)
   
    
    }







//! CRUD   CREATE, READ, UPDATE, DELETE