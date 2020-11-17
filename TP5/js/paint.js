"use strict";
window.addEventListener("load", () => {
  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  let pintado = false;
  let borrado = false;
  let pencil = document.querySelector("#btn-pencil");
  let eraser = document.querySelector("#btn-eraser");
  let balde = document.querySelector("#btn-fill");

  //EventListeners
  pencil.addEventListener("click", habilitarLapiz);
  eraser.addEventListener("click", habilitarGoma);
  balde.addEventListener("click", habilitarRelleno);

  //funciones
  function startPosition(e) {
    pintado = true;
  }

  function finishPosition() {
    pintado = false;
    ctx.beginPath();
  }

  function dibujar(e) {
    if (!pintado) return;
    if (!borrado)
      ctx.strokeStyle = document.querySelector("#color-picker").value;
    ctx.lineWidth = document.querySelector("#range-size").value;
    ctx.lineTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
  }

  function habilitarLapiz() {
    ctx.strokeStyle = document.querySelector("#color-picker").value;
    ctx.lineCap = "round";
    borrado = false;
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", dibujar);
  }

  function habilitarGoma() {
    ctx.strokeStyle = "white";
    ctx.lineCap = "round";
    borrado = true;
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", dibujar);
  }

  function habilitarRelleno() {
    ctx.strokeStyle = document.querySelector("#color-picker").value;
    canvas.addEventListener("click", canvasFill);
  }

  function canvasFill() {
    ctx.fillStyle = document.querySelector("#color-picker").value; // canvas background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});
