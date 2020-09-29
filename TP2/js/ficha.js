class Ficha {
    constructor(context, imgSrc, jugador) {
        this.context = context;
        this.imgSrc = imgSrc;
        this.img = new Image();
        this.radio = 35;
        this.pos = { X: 0, Y: 0 };
        this.posSuperficie = { X: 0, Y: 0 };
        this.seleccionada = false;
        this.usada = false;
        this.jugador = jugador;
        this.numJugador = jugador.getNumero();
        this.color = jugador.getColor();
    }

    getRadio() {
        return this.radio;
    }

    getFill() {
        return this.fill;
    }

    esSeleccionada() {
        return this.seleccionada;
    }

    clickeada(mX, mY) {
        let _x = this.posSuperficie.X - mX;
        let _y = this.posSuperficie.Y - mY;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }

    esUsada() {
        return this.usada;
    }

    getNumJugador() {
        return this.numJugador;
    }

    getJugador() {
        return this.jugador;
    }

    getPosicion() {
        return this.pos;
    }

    getPosSuperficie() {
        return this.posSuperficie;
    }

    setFill(fill) {
        this.fill = fill;
    }

    setPosiciones(posX, posY) {
        this.pos.X = posX;
        this.pos.Y = posY;
        this.posSuperficie.X = posX + this.radio;
        this.posSuperficie.Y = posY + this.radio;
    }

    setFicha() {
        this.dibujarFicha(this.pos.X, this.pos.Y);
    }

    dibujarFicha(posX, posY) {
        this.setPosiciones(posX, posY);
        this.context.beginPath();
        this.context.fillStyle = this.jugador.getColor();
        this.context.arc(this.posSuperficie.X, this.posSuperficie.Y + 1, this.radio, 0, Math.PI * 2);
        this.context.fill();
        if (this.img.src == "") {
            this.img.src = this.imgSrc;
            let cargarImg = function () {
                this.context.drawImage(this.img, this.pos.X, this.pos.Y, this.radio * 2, this.radio * 2);
            };
            this.img.onload = cargarImg.bind(this);
        } else
            this.context.drawImage(this.img, this.pos.X, this.pos.Y, this.radio * 2, this.radio * 2);
        this.context.closePath();
    }

    setSeleccionada(bool) {
        this.seleccionada = bool;
    }

    setUsada() {
        this.usada = true;
    }

}