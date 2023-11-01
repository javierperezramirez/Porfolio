'use strict'

// CODIGO PARA MANEJAR EL MODO DIA/NOCHE
var modo = leerModoActual();
if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}
// FUNCION LEER MODO ACTUAL
function leerModoActual() {
    // Devolvera modo DIA si no hay modo guardado
    let modo = window.localStorage.getItem("modoGuardado");
    console.log('Modo Pantalla: ' + modo);
    if (!modo) {
        // Devolvera modo DIA si no hay modo guardado
        modo = "dia";
    }
    return modo;
}
// FUNCION PORNER EN MODO DIA
function ponerModoDia() {
    // Ponemos fondo de pantalla modo dia
    let todo = document.getElementById("todo");
    todo.style.backgroundImage = "url('Imagenes/bajoblanco1.jpg')";
}
// FUNCION PONER EN MODO NOCHE
function ponerModoNoche() {
    // Ponemos fondo de pantalla modo noche
    let todo = document.getElementById("todo");
    todo.style.backgroundImage = "url('Imagenes/bajonegro.jpg')";
}

// CODIGO PARA APLICAR EL COLOR Y TAMAÑO GUARDADOS EN LOCALSTORAGE
var color = leerColorActual()
document.documentElement.style.setProperty("--colorNormal", color);
var tamelegido = leerTamActual()
document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
var nombre = leerNombreActual()
document.getElementById("actualUsuario").innerHTML=nombre;

// FUNCION PARA LEER EL NOMBRE GUARDADO
function leerNombreActual() {
    // Devolvera el nombre guardado en sessionstorage
    let nombre = window.sessionStorage.getItem("nombreElegido");
    console.log('Nombre Leido: ' + nombre);
    if ((nombre==null)||(nombre=="")) {
        nombre="sin identificar";
    }
    return nombre;
}
// FUNCION PARA LEER EL COLOR GUARDADO
function leerColorActual() {
    // Devolvera el color guardado en localstorage
    let color = window.localStorage.getItem("colorElegido");
    console.log('Color Leido: ' + color);
    if (color == null) {
        // Devolvera el color rojo por defecto
        color = '#ff0000';
    }
    return color;
}
// FUNCION PARA LEER EL TAMAÑO GUARDADO
function leerTamActual() {
    // Devolvera el tamaño guardado en localstorage
    let tamelegido = window.localStorage.getItem("tamGuardado");
    console.log('Tamaño Leido: ' + tamelegido);
    if ('tamGuardado' == null) {
        // Devolvera el tamaño normal por defecto
        tamelegido = 1;
    }
    return tamelegido;
}

// METODO PARA EL FUNCIONAMIENTO DE LA VENTANA MODAL

// Obtener referencias a los elementos del DOM
var modal = document.getElementById('modal');
var modalLink = document.getElementById('modal-link');
var closeBtn = document.getElementsByClassName('close')[0];

// Abrir la ventana modal al hacer clic en el enlace
modalLink.onclick = function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  modal.style.display = 'block';
}

// Cerrar la ventana modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
  modal.style.display = 'none';
}
