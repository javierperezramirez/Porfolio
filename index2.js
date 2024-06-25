
/*----------------------------------- MODO DIA/NOCHE de CONTACTOS.HTML ----------------------------------*/
let solecito2 = document.getElementById("solecito2");
let lunera2 = document.getElementById("lunera2");
let imagen2 = document.getElementById("imagen22");
let cabecera2 = document.getElementById("cabecera__central2");
let ban22 = document.getElementById("banner22");
let ban32 = document.getElementById("banner32");
// let ban42 = document.getElementById("banner42");
// let ban62 = document.getElementById("banner62");
let foot2 = document.getElementById("footer2");

// // Configura la pagina incial segun el modo leido en localStorage
let valorModo2 = localStorage.getItem("modo");
console.log(valorModo2);
if (valorModo2 === null){
    cabecera2.classList.add("modoNoche");
    ban22.classList.add("modoNoche");
    ban32.classList.add("modoNoche");
    // ban42.classList.add("modoNoche");
    // ban62.classList.add("modoNoche");
    foot2.classList.add("modoNoche");
    cabecera2.classList.remove("modoDia");
    ban22.classList.remove("modoDia");
    ban32.classList.remove("modoDia");
    // ban42.classList.remove("modoDia");
    // ban62.classList.remove("modoDia");
    foot2.classList.remove("modoDia");
    lunera2.style.left = "-5vw";
    solecito2.style.left = "11vw";
    localStorage.setItem("modo", "noche");
}else if (valorModo2 === "noche"){
    cabecera2.classList.add("modoNoche");
    ban22.classList.add("modoNoche");
    ban32.classList.add("modoNoche");
    // ban42.classList.add("modoNoche");
    // ban62.classList.add("modoNoche");
    foot2.classList.add("modoNoche");
    cabecera2.classList.remove("modoDia");
    ban22.classList.remove("modoDia");
    ban32.classList.remove("modoDia");
    // ban42.classList.remove("modoDia");
    // ban62.classList.remove("modoDia");
    foot2.classList.remove("modoDia");
    lunera2.style.left = "-5vw";
    solecito2.style.left = "11vw";
}else if (valorModo2 === "dia"){
    cabecera2.classList.add("modoDia");
    ban22.classList.add("modoDia");
    ban32.classList.add("modoDia");
    // ban42.classList.add("modoDia");
    // ban62.classList.add("modoDia");
    foot2.classList.add("modoDia");
    cabecera2.classList.remove("modoNoche");
    ban22.classList.remove("modoNoche");
    ban32.classList.remove("modoNoche");
    // ban42.classList.remove("modoNoche");
    // ban62.classList.remove("modoNoche");
    foot2.classList.remove("modoNoche");
    solecito2.style.left = "-5vw";
    lunera2.style.left = "11vw";
}

imagen2.addEventListener("click", cambiaModo);
// // Reconfigura la pagina al nuevo modo cuando pulsemos el boton y actualiza el localStorage
function cambiaModo(){
    valorModo2 = localStorage.getItem("modo");
    if (valorModo2 === "dia"){
        cabecera2.classList.add("modoNoche");
        ban22.classList.add("modoNoche");
        ban32.classList.add("modoNoche");
        // ban42.classList.add("modoNoche");
        // ban62.classList.add("modoNoche");
        foot2.classList.add("modoNoche");
        cabecera2.classList.remove("modoDia");
        ban22.classList.remove("modoDia");
        ban32.classList.remove("modoDia");
        // ban42.classList.remove("modoDia");
        // ban62.classList.remove("modoDia");
        foot2.classList.remove("modoDia");
        // Quitamos la luna
        lunera2.style.left = "-5vw";
        // Ponemos el sol
        solecito2.style.left = "11vw";
        // Guardamos en localStorage el modo "noche"
        localStorage.setItem("modo", "noche");
    }else if (valorModo2 === "noche"){
        cabecera2.classList.add("modoDia");
        ban22.classList.add("modoDia");
        ban32.classList.add("modoDia");
        // ban42.classList.add("modoDia");
        // ban62.classList.add("modoDia");
        foot2.classList.add("modoDia");
        cabecera2.classList.remove("modoNoche");
        ban22.classList.remove("modoNoche");
        ban32.classList.remove("modoNoche");
        // ban42.classList.remove("modoNoche");
        // ban62.classList.remove("modoNoche");
        foot2.classList.remove("modoNoche");
        // Quitamos el sol
        solecito2.style.left = "-5vw";
        // Ponemos la luna
        lunera2.style.left = "11vw";
        // Guardamos en localStorage el modo "dia"
        localStorage.setItem("modo", "dia");
    }
}
/*-------------------------------FORMULARIO------------------------------------*/
let botonEnviar = document.getElementById("botonEnviar");
let inputs = document.querySelectorAll("div input");
let impresora = document.getElementById("impresora");

let eR = [
    /^[a-zA-Z][a-z A-Z]{2,30}[a-zA-Z]$/, // Nombre
    /^[a-zA-Z0-9._%+-]{1,20}\@[a-zA-Z0-9.-]{1,20}\.[a-zA-Z]{2,}$/, // Email
    /^[0-9]{1,3}$/, // Edad
    /^[a-zA-Z][a-z A-Z]{2,30}[a-zA-Z]$/ // Pais
];
const nuevoParrafo = document.createElement('h2');
nuevoParrafo.textContent = "Gracias por suscribirte!!!"
nuevoParrafo.style.color = "#FFB303";
let contador = 0;
botonEnviar.addEventListener("click",comprobar);
console.log(inputs);
function comprobar(){
    contador = 0;
    for (let i=0;i<inputs.length;i++){
        let expresion=eR[i];
        if(expresion.test(inputs[i].value)){
            // alert ("Campo ["+i+"]: CORRECTO!!!");
            inputs[i].classList.add("campoCorrecto");
            inputs[i].classList.remove("campoIncorrecto");
            contador+=1;
        }else{
            // alert ("Campo ["+i+"]: NO es correcto...");
            inputs[i].classList.add("campoIncorrecto");
            inputs[i].classList.remove("campoCorrecto");
            contador-=1;
        }
    }
    if(contador == 4){
        impresora.appendChild(nuevoParrafo);
    }else{
        impresora.replaceChild(nuevoParrafo);
    }
}
/*-------------------------------EL TIEMPO------------------------------------*/
let eltiempo = document.getElementById("eltiempo");
const nuevoParrafo2 = document.createElement('p');

let id_provincia;
async function obtenerClimaMalaga(){
    try{
        const respuesta = await fetch("https://www.el-tiempo.net/api/json/v2/provincias");
        const datos_provincia = await respuesta.json();

        for(let i=0; i<datos_provincia.provincias.length; i++){
            if (datos_provincia.provincias[i].NOMBRE_PROVINCIA === "Málaga"){
                id_provincia = datos_provincia.provincias[i].CODPROV;
                return (id_provincia);
            }
        }
    }catch (error){
        console.log("Error al obtener el clima:", error);
        throw error;
    }
}
const mostrarDatosClima = async ()=>{
    let datos = await obtenerClimaMalaga();
    const respuesta = await fetch("https://www.el-tiempo.net/api/json/v2/provincias/"+datos);
    const datos_provincia = await respuesta.json();
    nuevoParrafo2.textContent = "Max: "+datos_provincia.ciudades[0].temperatures.max+"º - Min: "
    +datos_provincia.ciudades[0].temperatures.min+"º";
    eltiempo.appendChild(nuevoParrafo2);
}
document.addEventListener("mousemove",mostrarDatosClima);