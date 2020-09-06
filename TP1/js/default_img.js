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


