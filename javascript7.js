'use strict'

// creamos una variable para contar las veces que pinta
var contador=0;
// creamos un array para el tablero
var tablero = [['0','0','0'],['0','0','0'],['0','0','0']];
// creamos una funcion que pinte el cuadro con un hover (activo)
function hoverino(identificador) {
    let id='c'+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(50, 50, 50, 0.8)';

}
// creamos una funcion generica para dibujar el simbolo
function pintar(identificador) {

    // ponemos un if para limitar a 3 los dibujos
    if (contador<3) {
        let id='c'+identificador;
        let cuadro=document.getElementById(id);
        cuadro.style.color='black';
        cuadro.innerHTML="☻";
        contador+=1;
        tablero[identificador]='1';
        compruebaArray();
    } else {
        alert("Juego finalizado, reincie la pagina para volver a jugar!!!");
    }
}
// creamos una funcion que pinta el cuadro con un hover (inactivo)
function hoverinoff(identificador) {
    let id='c'+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(200, 200, 200, 0.6)';
}
function compruebaArray() {
    if ((tablero[0]=='1')&&(tablero[1]=='1')&&(tablero[2]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[3]=='1')&&(tablero[4]=='1')&&(tablero[5]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[6]=='1')&&(tablero[7]=='1')&&(tablero[8]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[0]=='1')&&(tablero[3]=='1')&&(tablero[6]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[1]=='1')&&(tablero[4]=='1')&&(tablero[7]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[2]=='1')&&(tablero[5]=='1')&&(tablero[8]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[0]=='1')&&(tablero[4]=='1')&&(tablero[8]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if ((tablero[2]=='1')&&(tablero[4]=='1')&&(tablero[6]=='1')) {
        alert("Ha puesto TRES EN RAYA !!!!!");
    } else if (contador==3) {
        alert("Ohhhhh, no ha puesto tres en raya....");
    }

}
// CODIGO PARA MANEJAR EL MODO DIA/NOCHE, EL COLOR, LA FUENTE Y EL NOMBRE

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
