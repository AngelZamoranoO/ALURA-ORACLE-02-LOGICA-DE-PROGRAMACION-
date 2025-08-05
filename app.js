// con el famoso DOM document objet model puedo tomar valores de las etiqutas en html para poder modificar datos

// vamos con el evento onclick de la primera funciona
// vamos a agregar una funcion desde onclick edesde el html

function asignarTextoElemento(elemento , texto) {
    let elementoHTML = document.querySelector(elemento); // selecciono el h1 
    elementoHTML.innerHTML = texto; // cambio el texto del tag h1 para que pueda visualizar
}

function intentoDeusuario(){// la funcion esta siendo llamada desde html
    return;
}

let numeroSecreto = generarNumeroSecreto(); // una variable que almacena el numero secreto

console.log(numeroSecreto);

function generarNumeroSecreto() { // se genera la funcion de numero aleatorio
     return Math.floor(Math.random() * 10) + 1;
}

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector('input'); // selecciomos el tag input para captura del dato
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // selecciomos el tag input para captura del dato
    console.log(numeroSecreto);
    console.log(typeOf(numeroDeUsuario));
    console.log(numeroDeUsuario === numeroSecreto); // el triple === significa que es de igual valor y tipo
    return;
}

//manejo de funcion para que pueda optimizar el codigo
asignarTextoElemento('h1','Juego del numero secreto!')
asignarTextoElemento('p', 'Indica un numero del 1 al 10')
