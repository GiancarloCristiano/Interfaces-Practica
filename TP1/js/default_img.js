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
    canvasImg.width=canvas.width;
    canvasImg.height=canvas.height;
    canvasImg.ctx.drawImage(img, 0,0);
}

function setOrigin(canvasImg){
    myDrawImageMethod(canvasImg.origin,canvasImg);
    canvasImg.imageData=canvasImg.ctx.getImageData(0,0,canvasImg.width,canvasImg.height);
}

/* 
if (imagenNueva)
    setImagenCargada();


function setImagenCargada(){ */
    let canvas2 = document.getElementById("canvas");
    let canvasImg2 = new CanvasImg2(canvas2);
    var img2 = new Image();
    let content2 = canvas.getContext('2d');
    img2.crossOrigin = "Anonymous";
    img2.src=content2;

    if (imagenNueva){
        myDrawImageMethod2(this,canvasImg2);
        canvasImg2.origin=this;
        canvasImg2.imageData=canvasImg2.ctx.getImageData(0,0,canvasImg2.width,canvasImg2.height);
    }
    
    function myDrawImageMethod2(img2,canvasImg2){
        canvasImg2.width=canvas.width;
        canvasImg2.height=canvas.height;
        canvasImg2.ctx.drawImage(img2, 0,0);
    }
    
    function setOrigin2(canvasImg2){
        myDrawImageMethod2(canvasImg2.origin,canvasImg2);
        canvasImg2.imageData=canvasImg2.ctx.getImageData(0,0,canvasImg2.width,canvasImg2.height);
    }

