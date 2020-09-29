class Juego {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.fondo = new Image();
        this.jugador1 = null;
        this.jugador2 = null;
        this.fichas = [];
        this.tablero = null;
        this.clickFicha = null;
        this.turno = 1;
    }

    nuevoJuego() {
        this.dibujarFondo();
        this.setJugadores();
        this.fichas = []
        this.dibujarTablero();
        setTimeout(() => {
            this.cargarFichas();
        }, 350);
    }

    limpiarCanvas() {
        this.context.fillStyle = "rgb(0,0,0)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    dibujarFondo() {
        if (this.fondo.src == "") {
            this.fondo.src = "images/fondo.png";
            let cargarImg = function () {
                this.context.drawImage(this.fondo, 0, 0, this.canvas.width, this.canvas.height);
            }
            this.fondo.onload = cargarImg.bind(this);
        } else {
            this.context.drawImage(this.fondo, 0, 0, this.canvas.width, this.canvas.height);
        }
    }

    setJugadores() {
        this.jugador1 = new Jugador(nombrej1, 1, colorj1);
        this.jugador2 = new Jugador(nombrej2, 2, colorj2);
    }

    dibujarTablero() {
        if (this.tablero == null) {
            this.tablero = new Tablero(this.canvas, "images/tablero.png");
        }
        this.tablero.dibujarTablero();
    }

    cargarFichas() {
        let ficha1;
        let ficha2;
        let fichasCreadas = 0;
        let imgSrc = "images/ficha.png";
        let cantCeldas = this.tablero.getCantCeldas();
        let posX = 15;
        let posY = 65;
        while (fichasCreadas < cantCeldas) {
            ficha1 = new Ficha(this.context, imgSrc, this.jugador1, 1, colorj1);
            ficha2 = new Ficha(this.context, imgSrc, this.jugador2, 2, colorj2);
            this.fichas.push(ficha1);
            this.fichas.push(ficha2);
            ficha1.dibujarFicha(posX, posY);
            ficha2.dibujarFicha(posX + 890, posY);
            fichasCreadas += 2;
            posX += 45;
            if (fichasCreadas % 3 == 0) {
                posX = 15;
                posY += 83;
            }
        }
        this.tablero.cargarCeldas();
    }

    dibujarFichas() {
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].setFicha();
        }
    }


    setTurno() {
        if (!this.gameover) {
            if (this.turno == 1) {
                spanTurno.innerHTML = "Turno de " + nombrej1;
                spanTurno.style = `background-color :${colorj1}`;
            } else {
                spanTurno.innerHTML = "Turno de " + nombrej2;
                spanTurno.style = `background-color :${colorj2}`;
            }
        }
    }

    onMouseMove(e) {
        if (this.clickFicha != null) {
            this.clickFicha.setPosiciones(e.layerX - 35, e.layerY - 35);
            this.reDibujar();
        }
    }

    onMouseDown(e) {
        if (this.clickFicha != null) {
            this.clickFicha.setSeleccionada(false);
            this.clickFicha = null;
        }
        this.encontrarFicha(e.layerX, e.layerY);
        this.reDibujar();
    }

    reDibujar() {
        this.limpiarCanvas();
        this.dibujarFondo();
        this.dibujarTablero();
        this.setTurno();
        this.dibujarFichas();
    }

    encontrarFicha(mX, mY) {
        let find = false;
        let pos = 0;
        let ficha;
        while (!find && pos < this.fichas.length) {
            ficha = this.fichas[pos];
            if (ficha.getNumJugador() == this.turno && !ficha.esUsada() && ficha.clickeada(mX, mY)) {
                this.clickFicha = ficha;
                ficha.setSeleccionada(true);
                find = true;
            }
            pos++;
        }
    }

    tableroClickeado(mX, mY) {
        if ((this.clickFicha != null) && (this.tablero.clickeado(mX, mY))) {
            if (this.tablero.insertFicha(this.clickFicha, mX)) {
                this.clickFicha.setUsada();
                this.clickFicha.setSeleccionada(false);
                if (this.tablero.checkGanador()) {
                    this.juegoFinalizado();
                } else {
                    this.cambiarTurno();
                }
            }
        }
    }


}