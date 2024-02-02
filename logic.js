let logo = document.createElement("img");
logo.src="logo.webp";
let containerLogo = document.getElementById("logo");
containerLogo.appendChild(logo);


let title = document.createElement("h2");
title.textContent ="Resultados aleatorios";
let containerTitle2 = document.getElementById("title");
containerTitle2.appendChild(title);



function generarNumeroAleatorio(min, max){
    const opciones = ["1", "2", "X"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    const numeroAleatorio = generarNumeroAleatorio(1,3);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `${numeroAleatorio}`;
});






 