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

/*
Tipo de Función	Ejemplo de Código	Uso
Sin retorno y sin parámetros	function saludo() { ... }	Ejecución de un bloque de código simple.
Sin retorno y con parámetros	function saludar(nombre) { ... }	Ejecución de un bloque de código con argumentos.
Con retorno y sin parámetros	function generarNumeroAleatorio() { ... }	Cálculo y retorno de un valor específico.
Con retorno y con parámetros	function sumar(a, b) { ... }	Cálculo y retorno basado en argumentos.
Función anónima	let saludo = function() { ... };	Definición de una función sin nombre localmente.
Función flecha	let cuadrado = x => x * x;	Definición concisa de funciones cortas.
*/

// DESAFIOS
// 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function muestraSaludo() {
    console.log("¡Hola, mundo!");
}
muestraSaludo();
// 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function muestraSaludoNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}
muestraSaludoNombre('Angel');
// 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero) {
    let dobleNumero = numero + numero;
    return dobleNumero;
}
dobleNumero(2);
// 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioNumeros(a, b, c) {
    let promedio = (a + b + c) / 3;
    return promedio;
}
promedioNumeros(1, 2, 3);
// 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a , b) {
    if(a > b) {
        return `Numero Mayor ${a}`;
    } else {
        return `Numero Mayor ${b}`;
    }    
}
console.log(numeroMayor(5, 10));
// 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let cuadrado = (x) => {
    return x*x;
}
console.log(cuadrado(5));
