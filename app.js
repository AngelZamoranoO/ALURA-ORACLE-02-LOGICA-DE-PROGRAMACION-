// con el famoso DOM document objet model puedo tomar valores de las etiqutas en html para poder modificar datos

// vamos con el evento onclick de la primera funciona
// vamos a agregar una funcion desde onclick edesde el html
let numeroSecreto;
let intentos;
function asignarTextoElemento(elemento , texto) {
    let elementoHTML = document.querySelector(elemento); // selecciono el h1 
    elementoHTML.innerHTML = texto; // cambio el texto del tag h1 para que pueda visualizar
}

function intentoDeusuario(){// la funcion esta siendo llamada desde html
    return;
}


console.log(numeroSecreto);

function generarNumeroSecreto() { // se genera la funcion de numero aleatorio
     return Math.floor(Math.random() * 10) + 1;
}

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector('input'); // selecciomos el tag input para captura del dato
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // selecciomos el tag input para captura del dato
    console.log(numeroSecreto);
    // console.log(typeOf(numeroDeUsuario));
    // console.log(numeroDeUsuario === numeroSecreto); // el triple === significa que es de igual valor y tipo
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `); // si el usuario acierta el texto se cambia
        document.getElementById('reinciar').removeAttribute('disable'); // funcion podemos eliminar el atributo disable
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){ // se crae la funcion para limpiar la caja para podamos ingresar otro numero con dom
    document.querySelector('#valorUsuario').value = ''; // limpiamos el valor del input
    // para llamar el id desde un queryselector se de poner el # antes del id
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!')
    asignarTextoElemento('p', 'Indica un numero del 1 al 10')
    numeroSecreto = generarNumeroSecreto(); // una variable que almacena el numero secreto
    intentos = 1;
}

function reinciarJuego() {
    // limpiar caja input
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar el numero aleatorio
    //inicializar los intentos
    mensajesIniciales();
    // desabilitar el boton del juego
    document.querySelector('#reinciar').setAttribute('disable','true')
    

}
//manejo de funcion para que pueda optimizar el codigo

