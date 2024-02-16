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

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("boton");
const resultadoContainer = document.querySelector(".resultadoContainer"); 

btn.addEventListener("click", function () {

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  let hexColor = "#";

  // Generate a random hex color
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  
  resultadoContainer.style.borderColor = hexColor;
  resultadoContainer.style.backgroundColor = hexColor;

 
  resultadoContainer.classList.add("rotate"); // Add a class for animation

  // Remove the animation class after rotation duration is over
  setTimeout(() => {
    resultadoContainer.classList.remove("rotate");
  }, 1000); // Adjust duration as needed (in milliseconds)
});
 