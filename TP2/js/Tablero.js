class Tablero {

    constructor(canvas, imgSrc) {
        this.columnas = 7;
        this.filas = 6;
        this.encastre = 30;
        this.casillero = 100;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.imgSrc = imgSrc;
        this.img = new Image();
        this.fichas = [];
        this.ultJugador = null;
        this.ultInsertada = { j: 0, i: 0 };
        this.pos = { X: 0, Y: 0 };
    }

    getCantCeldas() {
        return this.columnas * this.filas;
    }

    cargarCeldas() {
        for (let i = 1; i <= this.columnas; i++)
            this.fichas[i] = [null, null, null, null, null, null];
    }

    dibujarTablero() {
        if (this.img.src == "") {
            this.img.src = this.imgSrc;
            let cargarImg = function () {
                this.pos.X = (this.canvas.width / 2) - (this.img.width / 2);
                this.pos.Y = (this.canvas.height / 2) - (this.img.height / 2) + 25;
                this.context.drawImage(this.img, this.pos.X, this.pos.Y, this.img.width, this.img.height);
            }
            this.img.onload = cargarImg.bind(this);
        } else {
            this.context.drawImage(this.img, this.pos.X, this.pos.Y, this.img.width, this.img.height);
        }
    }

    clickeado(mX, mY) {
        return !(mX < this.pos.X + 25 || mX > this.pos.X + (this.img.width - 25) || mY < this.pos.Y || mY > this.pos.Y + this.img.height)
    }

    selecColumna(mX) {
        let pos = 1;
        if (mX > this.pos.X && mX < this.pos.X + this.img.width) {
            while (pos <= this.columnas) {
                if (mX < this.pos.X + this.casillero * pos) {
                    return pos;
                } else {
                    pos++;
                }
            }
        }
    }

    posFicha(ficha) {
        let posX = 0;
        let posY = 0;
        if (this.ultInsertada.j == 1) {
            posX = this.pos.X + this.encastre / 2;
        } else {
            posX = this.pos.X + this.encastre / 2 + (this.ultInsertada.j - 1) * (this.encastre + ficha.getRadio() * 2);
        }
        if (this.ultInsertada.i == 1) {
            posY = this.pos.Y + this.img.height - ficha.getRadio() * 2 - this.encastre / 2;
        } else {
            posY = this.pos.Y + this.img.height - ficha.getRadio() * 2 - this.encastre / 2 - (this.ultInsertada.i - 1) * (this.encastre + ficha.getRadio() * 2);
        }
        ficha.setPosiciones(posX, posY);
        if (sonidosActivados.value == "1")
            sonidoFicha.play();
    }

    insertarFicha(ficha, mX) {
        this.ultInsertada.j = this.selecColumna(mX);
        let j = this.ultInsertada.j;
        let pos = 0;
        while (pos < this.filas) {
            if (this.fichas[j][pos] == null) {
                this.ultInsertada.i = pos + 1;
                this.posFicha(ficha);
                this.fichas[j].splice(pos, 1, ficha);
                this.ultJugador = ficha.getNumJugador();
                return true;
            }
            pos++;
        }
        return false;
    }

    checkGanador() {
        let i = this.ultInsertada.i;
        let j = this.ultInsertada.j;
        return (this.checkVert(j) || this.checkHor(i) || this.checkAsc(j, i) || this.checkDesc(j, i));
    }

    checkVert(j) {
        let match = 1;
        let pos = 0;
        while (pos + 1 < this.filas) {
            if (this.fichas[j][pos] != null && this.fichas[j][pos + 1] != null) {
                if (this.fichas[j][pos].getNumJugador() == this.fichas[j][pos + 1].getNumJugador()) {
                    match ++;
                    if (match == 4)
                        return true;
                } else
                    match = 1;
            } else
                match = 1;
            pos ++;
        }
        return false;
    }

    checkHor(i) {
        let match = 1;
        let pos = 1;
        while (pos < this.columnas) {
            if (this.fichas[pos][i - 1] != null && this.fichas[pos + 1][i - 1] != null) {
                if (this.fichas[pos][i - 1].getNumJugador() == this.fichas[pos + 1][i - 1].getNumJugador()) {
                    match ++;
                    if (match == 4)
                        return true;
                } else
                    match = 1;
            } else
                match = 1;
            pos ++;
        }
        return false;
    }

    checkAsc(j, i) {
        i --;
        let match = 1;
        while (i < this.filas - 1 && j < this.columnas) {
            i ++;
            j ++;
        }
        while (i > 0 && j > 1) {
            if (this.fichas[j][i] != null && this.fichas[j - 1][i - 1] != null) {
                if (this.fichas[j][i].getNumJugador() == this.fichas[j - 1][i - 1].getNumJugador()) {
                    match ++;
                    if (match == 4)
                        return true;
                } else
                    match = 1;
            } else
                match = 1;
            i --;
            j --;
        }
        return false;
    }

    checkDesc(j, i) {
        i --;
        let match = 1;
        while (i < this.filas - 1 && j > 1) {
            i ++;
            j --;
        }
        while (i > 0 && j < this.columnas) {
            if (this.fichas[j][i] != null && this.fichas[j + 1][i - 1] != null) {
                if (this.fichas[j][i].getNumJugador() == this.fichas[j + 1][i - 1].getNumJugador()) {
                    match ++;
                    if (match == 4)
                        return true;
                } else
                    match = 1;
            } else
                match = 1;
            i --;
            j ++;
        }
        return false;
    }
}