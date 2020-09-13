class CanvasImg2 extends Canvas {
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
    for (let x = 0; x < this.imageData.width; x++) {
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


  filtroBlur(){
    let red = 0.0;
    let green = 0.0;
    let blue = 0.0;
    let mat = 1/25;
    for (let x = 0; x < this.imageData.width; x++) {
      for (let y = 2; y < this.imageData.height-2; y++) {
        red = this.getRed(this.imageData, x-2, y-2) * mat + this.getRed(this.imageData, x-1, y-2) * mat +  this.getRed(this.imageData,x, y-2) * mat +  this.getRed(this.imageData,x+1, y-2) * mat  +  this.getRed(this.imageData,x+2, y-2) * mat
        + this.getRed(this.imageData, x-2, y-1) * mat + this.getRed(this.imageData, x-1, y-1) * mat +  this.getRed(this.imageData,x, y-1) * mat +  this.getRed(this.imageData,x+1, y-1) * mat  +  this.getRed(this.imageData,x+2, y-1) * mat
        + this.getRed(this.imageData, x-2, y) * mat + this.getRed(this.imageData,x-1, y) * mat +  this.getRed(this.imageData,x, y) * mat +  this.getRed(this.imageData,x+1, y) * mat  +  this.getRed(this.imageData,x+2, y) * mat
        + this.getRed(this.imageData, x-2, y+1) * mat + this.getRed(this.imageData,x-1, y+1) * mat +  this.getRed(this.imageData,x, y+1) * mat +  this.getRed(this.imageData,x+1, y+1) * mat  +  this.getRed(this.imageData,x+2, y+1) * mat
        + this.getRed(this.imageData, x-2, y+2) * mat + this.getRed(this.imageData,x-1, y+2) * mat +  this.getRed(this.imageData,x, y+2) * mat +  this.getRed(this.imageData,x+1, y+2) * mat  +  this.getRed(this.imageData,x+2, y+2) * mat;

        green = this.getGreen(this.imageData,x-2, y-2) * mat +  this.getGreen(this.imageData,x-1, y-2) * mat +  this.getGreen(this.imageData,x, y-2) * mat  +  this.getGreen(this.imageData,x+1, y-2) * mat  +  this.getGreen(this.imageData,x+2, y-2) * mat 
        +  this.getGreen(this.imageData,x-2, y-1) * mat +  this.getGreen(this.imageData,x-1, y-1) * mat +  this.getGreen(this.imageData,x, y-1) * mat +  this.getGreen(this.imageData,x+1, y-1) * mat  +  this.getGreen(this.imageData,x+2, y-1) * mat 
        +  this.getGreen(this.imageData,x-2, y) * mat +  this.getGreen(this.imageData,x-1, y) * mat +  this.getGreen(this.imageData,x, y) * mat +  this.getGreen(this.imageData,x+1, y) * mat  +  this.getGreen(this.imageData,x+2, y) * mat 
        +  this.getGreen(this.imageData,x-2, y+1) * mat +  this.getGreen(this.imageData,x-1, y+1) * mat +  this.getGreen(this.imageData,x, y+1) * mat +  this.getGreen(this.imageData,x+1, y+1) * mat +  this.getGreen(this.imageData,x+2, y+1) * mat 
        +  this.getGreen(this.imageData,x-2, y+2) * mat +  this.getGreen(this.imageData,x-1, y+2) * mat +  this.getGreen(this.imageData,x, y+2) * mat +  this.getGreen(this.imageData,x+1, y+2) * mat +  this.getGreen(this.imageData,x+2, y+2) * mat;
 
        blue = this.getBlue(this.imageData,x-2, y-2) * mat +  this.getBlue(this.imageData,x-1, y-2) * mat +  this.getBlue(this.imageData,x, y-2) * mat +  this.getBlue(this.imageData,x+1, y-2) * mat  +  this.getBlue(this.imageData,x+2, y-2) * mat 
        +  this.getBlue(this.imageData,x-2, y-1) * mat +  this.getBlue(this.imageData,x-1, y-1) * mat +  this.getBlue(this.imageData,x, y-1) * mat +  this.getBlue(this.imageData,x+1, y-1) * mat  +  this.getBlue(this.imageData,x+2, y-2) * mat 
        +  this.getBlue(this.imageData,x-2, y) * mat   +  this.getBlue(this.imageData,x-1, y) * mat + this.getBlue(this.imageData,x, y) * mat  +  this.getBlue(this.imageData,x+1, y) * mat +  this.getBlue(this.imageData,x+2, y) * mat 
        +  this.getBlue(this.imageData,x-2, y+1) * mat + this.getBlue(this.imageData,x-1, y+1) * mat +  this.getBlue(this.imageData,x, y+1) * mat +  this.getBlue(this.imageData,x+1, y+1) * mat +  this.getBlue(this.imageData,x+2, y+1) * mat 
        +  this.getBlue(this.imageData,x-2, y+2) * mat +  this.getBlue(this.imageData,x-1, y+2) * mat +  this.getBlue(this.imageData,x, y+2) * mat +  this.getBlue(this.imageData,x+1, y+2) * mat +  this.getBlue(this.imageData,x+2, y+2) * mat;


        this.setPixel(this.imageData, x, y, red, green, blue);
      }
  }

  this.ctx.putImageData(this.imageData, 0, 0);
  }

  /* filtroSangrado(){
    for(let i=0; i<this.imageData.data.length; i+=4){
      let red = this.imageData.data[i]+10;
      let green = this.imageData.data[i+1]+10;
      let blue = this.imageData.data[i+2]+10;
      this.setPixel(this.imageData,red,green,blue);

    }
    this.ctx.putImageData(this.imageData,0,0);
  } 
  

  filtroEnfoque(){
    let red = 0.0;
    let green = 0.0;
    let blue = 0.0;
    let mat = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]];
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

    filtroSobel(){
    let red = 0.0;
    let green = 0.0;
    let blue = 0.0;
    let r = 0.0;
    let g = 0.0;
    let b = 0.0;
    let mat = [[-1,-2,-1],[0,0,0],[1,2,1]];
    let mat2 = [[-1,0,1],[-2,0,2],[-1,0,1]];
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
      
        r = this.getRed(this.imageData, x-1, y-1) * mat2[0][0] +  this.getRed(this.imageData,x, y-1) * mat2[0][1] +  this.getRed(this.imageData,x+1, y-1) * mat2[0][2]
        + this.getRed(this.imageData,x-1, y) * mat2[1][0] +  this.getRed(this.imageData,x, y) * mat2[1][1] +  this.getRed(this.imageData,x+1, y) * mat2[1][2]
        + this.getRed(this.imageData,x-1, y+1) * mat2[2][0] +  this.getRed(this.imageData,x, y+1) * mat2[2][1] +  this.getRed(this.imageData,x+1, y+1) * mat2[2][2];
      
        g = this.getGreen(this.imageData,x-1, y-1) * mat2[0][0] +  this.getGreen(this.imageData,x, y-1) * mat2[0][1] +  this.getGreen(this.imageData,x+1, y-1) * mat2[0][2] 
        +   this.getGreen(this.imageData,x-1, y) * mat2[1][0] +  this.getGreen(this.imageData,x, y) * mat2[1][1] +  this.getGreen(this.imageData,x+1, y) * mat2[1][2]
        +   this.getGreen(this.imageData,x-1, y+1) * mat2[2][0] +  this.getGreen(this.imageData,x, y+1) * mat2[2][1] +  this.getGreen(this.imageData,x+1, y+1) * mat2[2][2];
      
        b = this.getBlue(this.imageData,x-1, y-1) * mat2[0][0] +  this.getBlue(this.imageData,x, y-1) * mat2[0][1] +  this.getBlue(this.imageData,x+1, y-1) * mat2[0][2] 
        +   this.getBlue(this.imageData,x-1, y) * mat2[1][0] +  this.getBlue(this.imageData,x, y) * mat2[1][1] +  this.getBlue(this.imageData,x+1, y+1) * mat2[1][2] 
        +   this.getBlue(this.imageData,x-1, y+1) * mat2[2][0] +  this.getBlue(this.imageData,x, y+1) * mat2[2][1] +  this.getBlue(this.imageData,x+1, y+1) * mat2[2][2];
        
        let color = (red + green + blue) / 3;
        let c = (r + g + b) / 3;

        let G=Math.sqrt(color*color+c*c);


        this.setPixel(this.imageData, x, y, G, G, G);
      }
  }

  this.ctx.putImageData(this.imageData, 0, 0);
  } */






  }


  