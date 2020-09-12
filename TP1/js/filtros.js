class CanvasImg extends Canvas {
  constructor(id) {
    super(id);
    this.origin;
    this.imageData;
  }




  filtroGris() {
    for (let i = 0; i < this.imageData.data.length; i += 4) {
      let red = this.imageData.data[i];
      let green = this.imageData.data[i + 1];
      let blue = this.imageData.data[i + 2];
      let color = (red + green + blue) / 3;
      this.imageData.data[i] = this.imageData.data[i + 1] = this.imageData.data[
        i + 2
      ] = color;
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroBinario() {
    for (let i = 0; i < this.imageData.data.length; i += 4) {
      let red = this.imageData.data[i];
      let green = this.imageData.data[i + 1];
      let blue = this.imageData.data[i + 2];
      let color = red + green + blue;
      if (color <= 382) color = 0;
      else color = 255;
      this.imageData.data[i] = this.imageData.data[i + 1] = this.imageData.data[i + 2] = color;
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroNegativo() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let red = 255 - super.getRed(this.imageData, x, y);
        let green = 255 - super.getGreen(this.imageData, x, y);
        let blue = 255 - super.getBlue(this.imageData, x, y);
        this.setPixel(this.imageData, x, y, red, green, blue);
      }
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroSepia() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let red = super.getRed(this.imageData, x, y) * 0.33;
        let green = super.getGreen(this.imageData, x, y) * 0.33;
        let blue = super.getBlue(this.imageData, x, y) * 0.33;
        let color = red + green + blue;
        this.setPixel(
          this.imageData,
          x,
          y,
          color + 60,
          color + 30,
          color 
        );
      }
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroBrillo() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let red = super.getRed(this.imageData, x, y) + 15;
        let green = super.getGreen(this.imageData, x, y) + 15;
        let blue = super.getBlue(this.imageData, x, y) + 15;
        this.setPixel(this.imageData, x, y, red, green, blue);
      }
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroOscuro() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let red = super.getRed(this.imageData, x, y) - 15;
        let green = super.getGreen(this.imageData, x, y) - 15;
        let blue = super.getBlue(this.imageData, x, y) - 15;
        this.setPixel(this.imageData, x, y, red, green, blue);
      }
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  filtroSangrado(){
    for(let i=0; i<this.imageData.data.length; i+=4){
      let red = this.imageData.data[i]+10;
      let green = this.imageData.data[i+1]+10;
      let blue = this.imageData.data[i+2]+10;
      this.setPixel(this.imageData,red,green,blue);

    }
    this.ctx.putImageData(this.imageData,0,0);
  }


  filtroSaturacion() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let r = super.getRed(this.imageData, x, y);
        let g = super.getGreen(this.imageData, x, y);
        let b = super.getBlue(this.imageData, x, y);
        if (r > g){
          r *=1.1;
        }
        if (r > b){
          r *=1.1;
        }
        if (g > r){
          g *=1.1;
        }
        if (g > b){
          g *=1.1;
        }
        if (b > r){
          b *=1.1;
        }
        if (b > g){
          b *=1.1;
        }
        this.setPixel(this.imageData, x, y, r, g, b);
      }
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }
  
 

  filtroSuave(){
    let red = 0.0;
    let green = 0.0;
    let blue = 0.0;
    let mat = [[1/9, 1/9, 1/9], [1/9, 1/9, 1/9], [1/9, 1/9, 1/9]];
    for (let x = 1; x < this.imageData.width-1; x++) {
      for (let y = 1; y < this.imageData.height-1; y++) {
        red = this.getRed(this.imageData, x-1, y-1) * mat[0][0] +  this.getRed(this.imageData,x, y-1) * mat[0][1] +  this.getRed(this.imageData,x+1, y-1) * mat[0][2]
        + this.getRed(this.imageData,x-1, y) * mat[1][0] +  this.getRed(this.imageData,x, y) * mat[1][1] +  this.getRed(this.imageData,x+1, y) * mat[1][2]
        + this.getRed(this.imageData,x-1, y+1) * mat[2][0] +  this.getRed(this.imageData,x, y+1) * mat[2][1] +  this.getRed(this.imageData,x+1, y+1) * mat[2][2];
      
        green = this.getGreen(this.imageData,x-1, y-1) * mat[0][0] +  this.getGreen(this.imageData,x, y-1) * mat[0][1] +  this.getGreen(this.imageData,x+1, y-1) * mat[0][2] 
        +   this.getGreen(this.imageData,x-1, y) * mat[1][0] +  this.getGreen(this.imageData,x, y) * mat[1][1] +  this.getGreen(this.imageData,x+1, y) * mat[1][2]
        +   this.getGreen(this.imageData,x-1, y+1) * mat[2][0] +  this.getGreen(this.imageData,x, y+1) * mat[2][1] +  this.getGreen(this.imageData,x+1, y+1) * mat[2][2];
      
        blue = this.getBlue(this.imageData,x-1, y-1) * mat[0][0] +  this.getBlue(this.imageData,x, y-1) * mat[0][1] +  this.getBlue(this.imageData,x+1, y-1) * mat[0][2] 
        +   this.getBlue(this.imageData,x-1, y) * mat[1][0] +  this.getBlue(this.imageData,x, y) * mat[1][1] +  this.getBlue(this.imageData,x+1, y+1) * mat[1][2] 
        +   this.getBlue(this.imageData,x-1, y+1) * mat[2][0] +  this.getBlue(this.imageData,x, y+1) * mat[2][1] +  this.getBlue(this.imageData,x+1, y+1) * mat[2][2];
      
        this.setPixel(this.imageData, x, y, red, green, blue);
      }
  }

  this.ctx.putImageData(this.imageData, 0, 0);


  }
  
  }


  