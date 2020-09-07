"use strict";
window.addEventListener("load", () => {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    let painting = false;
    let pencil = document.querySelector("#btn-pencil");
    let eraser = document.querySelector("#btn-eraser");
    let bucket = document.querySelector("#btn-fill");
    let erase = false;

    //EventListeners
    pencil.addEventListener("click", enablePencil);
    eraser.addEventListener("click", enableEraser);
    bucket.addEventListener("click", enableBucket);

    //funciones
    function startPosition(e) {
        painting = true;
        //draw(e);
    }

    function finishPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        if (!erase) ctx.strokeStyle = document.querySelector("#color-picker").value;
        ctx.lineWidth = document.querySelector("#range-size").value;
        ctx.lineTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
    }

    function enablePencil() {
        ctx.strokeStyle = document.querySelector("#color-picker").value;
        ctx.lineCap = "round";
        erase = false;
        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", finishPosition);
        canvas.addEventListener("mousemove", draw);
    }

    function enableEraser() {
        ctx.strokeStyle = "white";
        ctx.lineCap = "round";
        erase = true;
        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", finishPosition);
        canvas.addEventListener("mousemove", draw);
    }
   
    
    // clear canvas
    function enableBucket(){
        ctx.strokeStyle = document.querySelector("#color-picker").value;
        canvas.addEventListener("click", canvasFill);
    }

    function canvasFill() {
        ctx.fillStyle = document.querySelector("#color-picker").value; // canvas background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    

});