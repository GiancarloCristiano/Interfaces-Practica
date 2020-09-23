"use strict";


//original.addEventListener("click", reestablecerImagen);
document.querySelector('#boton-jugar').addEventListener('click',function (e) {
  e.preventDefault();
  comenzarJuego();
});

let fichas = []


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
    error.removeAttribute("hidden");
  if (nombrej1 != nombrej2 && colorj1 != colorj2 ){
    let bloque2 = document.querySelector('#juego');
    bloque2.removeAttribute("hidden");
    let bloque1 = document.querySelector('#jugadores');
    bloque1.style.display = 'none';
    addFichas (colorj1, colorj2);
    //let jugador1 = new Jugador (nombrej1, colorj1);
    //let jugador2 = new Jugador (nombrej2, colorj2);
    //let j1 = new Jugador(nombrej1, colorj1,"red",21,80,70);
    //let j2 = new Jugador(nombrej2, colorj2, "yellow",21,800,70);
    //juego = new Juego(j1,j2);
    //juego.iniciarJuego();
  }
}


function addFichas(colorj1, colorj2) {
  let iX = 50;
  let iY = 50;
  let color = colorj1;
  for (let i = 0; i <= 10; i++){
    addFicha(color, iX, iY);
    iY+=98;
  }
  iX = 135;
  iY = 130;
  for (let i = 0; i < 10; i++){
    addFicha(color, iX, iY);
    iY+=100;
  }
  color = colorj2;
  iX = canvas.width - 50;
  iY = 50;
  for (let i = 0; i <= 10; i++){
    addFicha(color, iX, iY);
    iY+=98;
  }
  iX = canvas.width - 135;
  iY = 130;
  for (let i = 0; i < 10; i++){
    addFicha(color, iX, iY);
    iY+=100;
  }
}

function addFicha(color, iX, iY) {
    let posX = iX;
    let posY = iY;
    let img = new Image();
    img.src = "images/ficha.png";
    img.onload = function () {
        let ficha = new Ficha(posX, posY, color, context, 35, img);
        ficha.draw();
    }
      //fichas.push(ficha);
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


