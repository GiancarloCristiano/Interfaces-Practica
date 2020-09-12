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

  filtroFatality(){
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
  
 

  filtroBlur(){
    let matReference = [1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36,
      1/36, 1/36, 1/36 ];
      var opaque = false;
      var side = Math.round(Math.sqrt(matReference.length));
      var halfSide = Math.floor(side/2);
      var src = this.imageData.data;
      var sw = this.imageData.width;
      var sh = this.imageData.height;
      // pad output by the convolution matrix
      var w = sw;
      var h = sh;
      
      // go through the destination image pixels
      var alphaFac = opaque ? 1 : 0;
      for (var y=0; y<h; y++) {
          for (var x=0; x<w; x++) {
          var sy = y;
          var sx = x;
          // calculate the weighed sum of the source image pixels that
          // fall under the convolution matrix
          var r=0, g=0, b=0, a=0;
          for (var cy=0; cy<side; cy++) {
              for (var cx=0; cx<side; cx++) {
              var scy = sy + cy - halfSide;
              var scx = sx + cx - halfSide;
              if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                  var srcOff = (scy*sw+scx)*4;
                  var wt = matReference[cy*side+cx];
                  r += src[srcOff] * wt;
                  g += src[srcOff+1] * wt;
                  b += src[srcOff+2] * wt;
                  a += src[srcOff+3] * wt;
              }
              }
          }
          this.setPixel(this.imageData,r,g,b);
          }
      }
      this.ctx.putImageData(this.imageData, 0, 0);
  };
}

  let Filters = {}
  Filters.tmpCanvas = document.createElement('canvas');
  Filters.tmpCtx = Filters.tmpCanvas.getContext('2d');

  Filters.createImageData = function(w,h) {
      return this.tmpCtx.createImageData(w,h);
  }


  