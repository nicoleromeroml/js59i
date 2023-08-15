class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password
    }
}

const users = [
    new User(1, 'nicole romero', 'nicole@gmail.com', '123456'),
    new User(2, 'matias torres', 'matias@gmail.com', '123456')
]

// let users; 
// if(localStorage.getItem('users')) {
// users = JSON.parse(localStorage.getItem('users'))
// }else{
     
//     const users = [
//         new User(1, 'nicole romero', 'nicole@gmail.com', '123456'),
//         new User(2, 'matias torres', 'matias@gmail.com', '123456')
//     ]
// }




function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)
    const userFound = users.find(user => user.email == email);
    if (userFound) {
        const isOk = userFound.password == password;
        if (isOk) {

            alertMessage('Entro correctamente');
            window.location.assign(window.location.origin + '/carrito2.html')
        } else {
            alertMessage('clave incorrecta') 
        }
    } else {
        alertMessage('usuario incorrecto')
    }
    document.querySelector('form').reset()
}


function alertMessage (message) {
    //creando el elemento
    let alertMessage = document.createElement('div');
    //agregando estilos
    alertMessage.classList.add('alert', 'alert-danger', 'mt-5');
    alertMessage.setAttribute('role', 'alert');
    //agregamos la informacion
    alertMessage.innerText = message;
    //buscamos al padre
    let container = document.querySelector('form');
    //adoptamos al hijo
    container.appendChild(alertMessage);



}