let bloque1 = document.querySelector("#jugadores");
let bloque2 = document.querySelector("#juego");
let getj1 = document.querySelector("#get-j1");
let getj2 = document.querySelector("#get-j2");
let versus = document.querySelector("#versus");
let spanTurno = document.querySelector("#span-turno");
let botonSonidos = document.querySelector("#boton-sonidos");
let sonidosActivados = document.querySelector("#sonidos");
let sonidoOn = document.querySelector("#sonido-on");
let sonidoOff = document.querySelector("#sonido-off");
let sonidoStart = new Audio("sounds/intro.mp3");
let sonidoFicha = new Audio("sounds/insert.mp3");
let sonidoWin = new Audio("sounds/tada.mp3");
let nombrej1, colorj1, nombrej2, colorj2;
let turno = document.querySelector("#nombre-j1").value;
if (turno == "") 
    turno = "Jugador 1";

let turnocolor = document.querySelector("#color-j1").value;

document.querySelector("#boton-jugar").addEventListener("click", function (e) {
    setInicial();
});

document.querySelector("#boton-reiniciar").addEventListener("click", function (e) {
    window.location.reload();
});

sonidoOn.addEventListener("click", function (e) {
    e.preventDefault();
    sonidosActivados.value = "0";
    sonidoOn.style.display = "none";
    sonidoOff.style.display = "inline";
});

sonidoOff.addEventListener("click", function (e) {
    e.preventDefault();
    sonidosActivados.value = "1";
    sonidoOn.style.display = "inline";
    sonidoOff.style.display = "none";
});

function setInicial() {
    nombrej1 = document.querySelector("#nombre-j1").value;
    colorj1 = document.querySelector("#color-j1").value;
    nombrej2 = document.querySelector("#nombre-j2").value;
    colorj2 = document.querySelector("#color-j2").value;
    let error = document.querySelector("#error");
    if (nombrej1 == "") 
        nombrej1 = "Jugador 1";
    if (nombrej2 == "") 
        nombrej2 = "Jugador 2";
    error.style.display = "block";
    if (nombrej1 != nombrej2 && colorj1 != colorj2) {
        if (sonidosActivados.value == "1") 
            sonidoStart.play();
         else {
            sonidoOff.style.display = "inline";
            sonidoOn.style.display = "none";
        }
        bloque1.style.display = "none";
        bloque2.style.display = "inline";
        getj1.style.color = colorj1;
        getj1.innerHTML = nombrej1;
        getj2.style.color = colorj2;
        getj2.innerHTML = nombrej2;
        let canvas = document.querySelector("#canvas");
        let juego = new Juego(canvas);
        canvas.addEventListener("mousedown", function (e) {
            juego.onMouseDown(e);
            canvas.addEventListener("mousemove", moverMouse, false);
        });
        canvas.addEventListener("mouseup", function (e) {
            juego.tableroClickeado(e.layerX, e.layerY);
            canvas.removeEventListener("mousemove", moverMouse, false);
            juego.reDibujar();
        });
        
        function moverMouse(e) {
            juego.onMouseMove(e);
        }
        juego.nuevoJuego();
    }
}