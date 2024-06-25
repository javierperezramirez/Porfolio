/*--------------------- SLIDES EN BANNER 1 ----------------------*/
let slides = document.querySelectorAll(".banner1__slide");
let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");

anterior.addEventListener("click", nextSlide);
siguiente.addEventListener("click", nextSlide);

slides[0].classList.add("active");
var index = 0;

function nextSlide(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
    console.log("Numero de index: ",index);
}

let cambioAutomatico;

document.addEventListener("mouseover", cambiaJuegos);
document.addEventListener("mouseout", paraJuegos);

function cambiaJuegos(){
    cambioAutomatico = setInterval(nextSlide,5000);
}
function paraJuegos(){
    clearInterval(cambioAutomatico);
}
/*------------------------------------ MODO DIA/NOCHE de INDEX.HTML -----------------------------------*/
let solecito = document.getElementById("solecito");
let lunera = document.getElementById("lunera");
let imagen = document.getElementById("imagen");
let cabecera = document.getElementById("cabecera__central");
let ban2 = document.getElementById("banner2");
let ban3 = document.getElementById("banner3");
let ban4 = document.getElementById("banner4");
let ban6 = document.getElementById("banner6");
let foot = document.getElementById("footer");

// Configura la pagina incial segun el modo leido en localStorage
let valorModo = localStorage.getItem("modo");
console.log(valorModo);
if (valorModo === null){
    cabecera.classList.add("modoNoche");
    ban2.classList.add("modoNoche");
    ban3.classList.add("modoNoche");
    ban4.classList.add("modoNoche");
    ban6.classList.add("modoNoche");
    foot.classList.add("modoNoche");
    cabecera.classList.remove("modoDia");
    ban2.classList.remove("modoDia");
    ban3.classList.remove("modoDia");
    ban4.classList.remove("modoDia");
    ban6.classList.remove("modoDia");
    foot.classList.remove("modoDia");
    lunera.style.left = "-5vw";
    solecito.style.left = "11vw";
    localStorage.setItem("modo", "noche");
}else if (valorModo === "noche"){
    cabecera.classList.add("modoNoche");
    ban2.classList.add("modoNoche");
    ban3.classList.add("modoNoche");
    ban4.classList.add("modoNoche");
    ban6.classList.add("modoNoche");
    foot.classList.add("modoNoche");
    cabecera.classList.remove("modoDia");
    ban2.classList.remove("modoDia");
    ban3.classList.remove("modoDia");
    ban4.classList.remove("modoDia");
    ban6.classList.remove("modoDia");
    foot.classList.remove("modoDia");
    lunera.style.left = "-5vw";
    solecito.style.left = "11vw";
}else if (valorModo === "dia"){
    cabecera.classList.add("modoDia");
    ban2.classList.add("modoDia");
    ban3.classList.add("modoDia");
    ban4.classList.add("modoDia");
    ban6.classList.add("modoDia");
    foot.classList.add("modoDia");
    cabecera.classList.remove("modoNoche");
    ban2.classList.remove("modoNoche");
    ban3.classList.remove("modoNoche");
    ban4.classList.remove("modoNoche");
    ban6.classList.remove("modoNoche");
    foot.classList.remove("modoNoche");
    solecito.style.left = "-5vw";
    lunera.style.left = "11vw";
}

imagen.addEventListener("click", cambiaModo);
// Reconfigura la pagina al nuevo modo cuando pulsemos el boton y actualiza el localStorage
function cambiaModo(){
    valorModo = localStorage.getItem("modo");
    if (valorModo === "dia"){
        cabecera.classList.add("modoNoche");
        ban2.classList.add("modoNoche");
        ban3.classList.add("modoNoche");
        ban4.classList.add("modoNoche");
        ban6.classList.add("modoNoche");
        foot.classList.add("modoNoche");
        cabecera.classList.remove("modoDia");
        ban2.classList.remove("modoDia");
        ban3.classList.remove("modoDia");
        ban4.classList.remove("modoDia");
        ban6.classList.remove("modoDia");
        foot.classList.remove("modoDia");
        // Quitamos la luna
        lunera.style.left = "-5vw";
        // Ponemos el sol
        solecito.style.left = "11vw";
        // Guardamos en localStorage el modo "noche"
        localStorage.setItem("modo", "noche");
    }else if (valorModo === "noche"){
        cabecera.classList.add("modoDia");
        ban2.classList.add("modoDia");
        ban3.classList.add("modoDia");
        ban4.classList.add("modoDia");
        ban6.classList.add("modoDia");
        foot.classList.add("modoDia");
        cabecera.classList.remove("modoNoche");
        ban2.classList.remove("modoNoche");
        ban3.classList.remove("modoNoche");
        ban4.classList.remove("modoNoche");
        ban6.classList.remove("modoNoche");
        foot.classList.remove("modoNoche");
        // Quitamos el sol
        solecito.style.left = "-5vw";
        // Ponemos la luna
        lunera.style.left = "11vw";
        // Guardamos en localStorage el modo "dia"
        localStorage.setItem("modo", "dia");
    }
}
/*------------------------------- IMAGENES ----------------------------*/
let img1 = document.getElementById("imagen1");
let img2 = document.getElementById("imagen2");
let img3 = document.getElementById("imagen3");
let cor1 = document.getElementById("corazon1");
let cor2 = document.getElementById("corazon2");
let cor3 = document.getElementById("corazon3");

img1.addEventListener("mouseover", aparece1);
cor1.addEventListener("mouseover", aparece1);
img1.addEventListener("mouseleave", desaparece1);
img2.addEventListener("mouseover", aparece2);
cor2.addEventListener("mouseover", aparece2);
img2.addEventListener("mouseleave", desaparece2);
img3.addEventListener("mouseover", aparece3);
cor3.addEventListener("mouseover", aparece3);
img3.addEventListener("mouseleave", desaparece3);

function aparece1(){
    cor1.style.opacity = "1";
    cor1.style.transition = "all 0.5s linear";
}
function desaparece1(){
    cor1.style.opacity = "0";
    cor1.style.transition = "all 0.5s linear";
}

function aparece2(){
    cor2.style.opacity = "1";
    cor2.style.transition = "all 0.5s linear";
}
function desaparece2(){
    cor2.style.opacity = "0";
    cor2.style.transition = "all 0.5s linear";
}

function aparece3(){
    cor3.style.opacity = "1";
    cor3.style.transition = "all 0.5s linear";
}
function desaparece3(){
    cor3.style.opacity = "0";
    cor3.style.transition = "all 0.5s linear";
}
/*------------------------------- IMAGENES ----------------------------*/
let imagenes = document.querySelectorAll(".imagen_tarjeta");

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
/*------------------------------- TARJETAS ------------------------------------*/
let tarjetas = document.querySelectorAll(".imagen_tarjeta");
let contenedores = document.querySelectorAll(".banner4__contenedor__tarjeta");
let impresora2 = document.getElementById("impresora2");

let tarjeta1=0;
let tarjeta2=0;
let tarjeta3=0;
let tarjeta4=0;

let numeroAzar = Math.floor(Math.random()*4);
switch (numeroAzar){
    case 0:
        tarjeta1=1;
        break;
    case 1:
        tarjeta2=1;
        break;
    case 2:
        tarjeta3=1;
        break;
    case 3:
        tarjeta4=1;
        break;
}
console.log(numeroAzar);

tarjetas[0].addEventListener("click", ()=>{comprobacion(tarjetas[0])});
tarjetas[1].addEventListener("click", ()=>{comprobacion(tarjetas[1])});
tarjetas[2].addEventListener("click", ()=>{comprobacion(tarjetas[2])});
tarjetas[3].addEventListener("click", ()=>{comprobacion(tarjetas[3])});

const nuevoParrafo = document.createElement('h2');
nuevoParrafo.textContent = "Gracias por suscribirte!!!"
nuevoParrafo.style.color = "#FFB303";

function comprobacion(tarj){
    if (tarj===tarjetas[0]&&tarjeta1==1){
        nuevoParrafo.textContent = "ENHORABUENA!!!";
        contenedores[0].classList.add("premio");
        tarjetas[1].style.opacity = "0.1";
        tarjetas[2].style.opacity = "0.1";
        tarjetas[3].style.opacity = "0.1";
        impresora2.appendChild(nuevoParrafo);
    }else if (tarj===tarjetas[1]&&tarjeta2==1){
        nuevoParrafo.textContent = "ENHORABUENA!!!";
        contenedores[1].classList.add("premio");
        tarjetas[0].style.opacity = "0.1";
        tarjetas[2].style.opacity = "0.1";
        tarjetas[3].style.opacity = "0.1";
        impresora2.appendChild(nuevoParrafo);
    }else if (tarj===tarjetas[2]&&tarjeta3==1){
        nuevoParrafo.textContent = "ENHORABUENA!!!";
        contenedores[2].classList.add("premio");
        tarjetas[0].style.opacity = "0.1";
        tarjetas[1].style.opacity = "0.1";
        tarjetas[3].style.opacity = "0.1";
        impresora2.appendChild(nuevoParrafo);
    }else if (tarj===tarjetas[3]&&tarjeta4==1){
        nuevoParrafo.textContent = "ENHORABUENA!!!";
        contenedores[3].classList.add("premio");
        tarjetas[0].style.opacity = "0.1";
        tarjetas[1].style.opacity = "0.1";
        tarjetas[2].style.opacity = "0.1";
        impresora2.appendChild(nuevoParrafo);
    }else{
        nuevoParrafo.textContent = "Mas suerte la proxima vez...";
        tarj.style.opacity = "0.1";
        impresora2.appendChild(nuevoParrafo);
    }   
}