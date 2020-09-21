"use strict";


//original.addEventListener("click", reestablecerImagen);
document.querySelector('#boton-jugar').addEventListener('click',function (e) {
  e.preventDefault();
  comenzarJuego();
});

function comenzarJuego() {
  let nombrej1 = document.querySelector('#nombre-j1').value;
  let colorj1 = document.querySelector('#color-j1').value;
  let nombrej2 = document.querySelector('#nombre-j2').value;
  let colorj2 = document.querySelector('#color-j2').value;
  let error = document.querySelector('#error');
  if (nombrej1 == "")
    nombrej1 = "Jugador 1";
  if (nombrej2 == "")
    nombrej2 = "Jugador 2";
  else
    error.removeAttribute("hidden");
  if (nombrej1 != nombrej2 && colorj1 != colorj2){
    let bloque2 = document.querySelector('#juego');
    bloque2.style.display = 'inline';
    let bloque1 = document.querySelector('#jugadores');
    bloque1.style.display = 'none';
    //let j1 = new Jugador(nombrej1, colorj1,"red",21,80,70);
    //let j2 = new Jugador(nombrej2, colorj2, "yellow",21,800,70);
    //juego = new Juego(j1,j2);
    //juego.iniciarJuego();
  }
}



let src = "images/fondo.png";
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let img = new Image();
img.src = src;
img.crossorigin = "anonymous";

img.onload = function () {
  let width = canvas.width;
  let imgWidth = img.naturalWidth;
  let imgHeight = img.naturalHeight;
  let aspectRatio = imgWidth / imgHeight;
  let height = width / aspectRatio;
  canvas.height = height;
  context.drawImage(img, 0, 0, width, height);
};


