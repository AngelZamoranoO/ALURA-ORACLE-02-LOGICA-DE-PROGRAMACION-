

// DESAFIO

// 1 Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto:
//  "Hora del Desafío".
let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora del Desafío';
// 2 Crea una función que muestre en la consola el mensaje
//  "El botón fue clicado" siempre que se presione el botón "Console".
function mensajeConsola() {
    alert('El boton fue clicado');   
}

// 3 Crea una función que se ejecute cuando se haga clic en el botón "prompt",
//  preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta 
// con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mensaje(params) {
    let ciudad = prompt('¿Cuál es tu ciudad de Brasil?');
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

// 4 Crea una función que muestre una alerta con el 
// mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alerta() {
    alert("Yo amo JS");
}

// 5 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(){
    let num1 = parseInt(prompt('Ingrese el primer número'));
    let num2 = parseInt(prompt('Ingrese el segundo número'));
    alert(num1 + num2);
}