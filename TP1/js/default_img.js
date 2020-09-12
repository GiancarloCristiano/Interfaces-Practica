"use strict";

//imagen 1
var url1 = "https://i.imgur.com/mpAwugs.jpg";
let canvas1 = document.getElementById("canvas");
let canvasImg1 = new CanvasImg(canvas1);
var img1 = new Image();

img1.crossOrigin = "Anonymous";
img1.src=url1;
img1.onload = function () {
    myDrawImageMethod(this,canvasImg1);
    canvasImg1.origin=this;
    canvasImg1.imageData=canvasImg1.ctx.getImageData(0,0,canvasImg1.width,canvasImg1.height);
}

function myDrawImageMethod(img,canvasImg){
    canvasImg.canvas.width=img.naturalWidth;
    canvasImg.canvas.height=img.naturalHeight;
    canvasImg.width=canvasImg.canvas.width;
    canvasImg.height=canvasImg.canvas.height;
    canvasImg.ctx.drawImage(img, 0,0);
}

function setOrigin(canvasImg){
    myDrawImageMethod(canvasImg.origin,canvasImg);
    canvasImg.imageData=canvasImg.ctx.getImageData(0,0,canvasImg.width,canvasImg.height);
}

if (imagenNueva){
    guardarImagenOriginal();
    /* let canvas1 = document.getElementById("canvas");
    let bup = new CanvasImg(canvas1);
    bup.origin=this;
    bup.imageData = bup.ctx.getImageData(0,0,bup.width,bup.height);
    setOrigin (bup); */
    imagenNueva = false;
}


function guardarImagenOriginal(){
    imagenOriginal = []
    for(let i = 0; i<canvas.width; i++){
        for(let j = 0; j<canvas.height; j++){
            imagenOriginal[imagenOriginal.length] = getRed(i,j)
            imagenOriginal[imagenOriginal.length] = getGreen(i,j)
            imagenOriginal[imagenOriginal.length] = getBlue(i,j)
            imagenOriginal[imagenOriginal.length] = getAlpha(i,j)
        }
    }
}

function restablecerImagen(){
    let pos = 0;
    for(let i = 0; i<canvas.width; i++){
        for(let j = 0; j<canvas.height; j++){
            setPixel(imageData,i,j,imagenOriginal[pos],imagenOriginal[pos+1],imagenOriginal[pos+2],imagenOriginal[pos+3])
            pos +=4
        }
    }
    ctx.putImageData(imageData,0,0)
}