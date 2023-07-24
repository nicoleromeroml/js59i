//todo: Escribe un programa que cree un objeto CUENTA con las siguientes propiedades:
//? Una propiedad titular.
//?Una propiedad saldo, teniendo como valor inicial 0;
//? Un Metodo ingresar() que permita ingresar dinero a la cuenta, pasando la cantidad como parametro.
//? Un metodo extraer() que me permita retirar dinero, la cantidad pasada como parametro.
//? un metodo() informar() que retorne la informacion del estado de cuenta.

class Cuenta {
    constructor(titular){
        this.id = parseInt(Math.random() *10000);
        this.titular = titular;
        this.saldo = 0;


    }
  ingresar(monto){
    if(monto > 0){
        this.saldo = this.saldo + monto;
        console.log(`tu saldo actual es: ${this.saldo}`)
    }else if(isNaN(monto)){
        console.log('solo se admiten numeros')
    }else{
        console.log('Ingrese un monto valido o mayor a 0')
    }
  }
  extraer(monto){
    if(monto <= this.saldo  && monto > 0){
        this.saldo = this.saldo - monto;
        console.log(`tu nuevo saldo es: ${this.saldo}`)
    }else if(isNaN(monto)){
        console.log('solo se admiten numeros')
    }else{
        console.log('saldo insufuciente, o monto invalido')
    }
  }
  informar(){
console.log(`La cuenta numero ${this.id} a nombre de ${this.titular} tiene un salde de: $ ${this.saldo}`)
  }



}
const cuentaLautaro = new Cuenta('lautaro');
const cuentaAgustina = new Cuenta('agustina');

