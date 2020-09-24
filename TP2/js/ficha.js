class Ficha{
    constructor(posX, posY, color, context, radius, img){
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.context = context;
        this.radius = radius;
        this.img = img;
    }
    

    getPosX(){
        return this.posX;
    }


    getPosY(){
        return this.posY;
    }


    getFill(){
        return this.fill;
    }
    
    getImg(){
        return this.img;
    }

    getPosition(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }
    
    getRadius(){
        return this.radius;
    }
    

    setFill(fill){
        this.fill = fill;
    }


    draw(){
        let imgX = this.posX - this.radius;
        let imgY = this.posY - this.radius;
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.context.fill();
        this.context.drawImage(this.img, imgX, imgY);
        this.context.closePath();
    }

    /*
    estaAdentro(x, y){
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }*/


}