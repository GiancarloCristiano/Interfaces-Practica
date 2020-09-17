"use strict";

//BLOQUE PARA CARGAR LA IMAGEN

//let white = document.querySelector('#btn-clear');


//original.addEventListener("click", reestablecerImagen); 


    




let src = 'images/fondo.png'
let canvas = document.querySelector('#canvas');
    let context = canvas.getContext('2d');


    let img = new Image();
    img.src = src;
    img.crossorigin = 'anonymous';

    img.onload = function() {
      let width = canvas.width;
      let imgWidth = img.naturalWidth;
      let imgHeight = img.naturalHeight;
      let aspectRatio = imgWidth / imgHeight;
      let height = width / aspectRatio;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
    };
    

