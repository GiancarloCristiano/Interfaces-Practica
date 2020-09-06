class CanvasImg extends Canvas{
    constructor(id){
      super(id);
      this.origin;
      this.imageData;
    }
  
  
    filtroGris(){
          for(let i=0; i<this.imageData.data.length; i+=4){
            let red = this.imageData.data[i];
            let green = this.imageData.data[i+1];
            let blue = this.imageData.data[i+2];
            let color = (red+green+blue)/3;
            this.imageData.data[i]=this.imageData.data[i+1]=this.imageData.data[i+2]=color;
          }
          this.ctx.putImageData(this.imageData,0,0);
        }



        
 filtroBinario(){
          for(let i=0; i<this.imageData.data.length; i+=4){
            let red = this.imageData.data[i];
            let green = this.imageData.data[i+1];
            let blue = this.imageData.data[i+2];
            let color = (red+green+blue);
            if (color <=382)
              color = 0;
            else
              color = 255;
            this.imageData.data[i]=this.imageData.data[i+1]=this.imageData.data[i+2]=color;
          }
          this.ctx.putImageData(this.imageData,0,0);
        }

        filtroNegativo(){
          for (let x=0; x<this.width; x++){
            for (let y=0;y<this.height;y++){
              let red = 255 - super.getRed(this.imageData,x,y);
              let green = 255 - super.getGreen(this.imageData,x,y);
              let blue = 255 - super.getBlue(this.imageData,x,y);
              this.setPixel(this.imageData,x,y,red,green,blue);
            }
          }
          this.ctx.putImageData(this.imageData,0,0);
        }

        filtroSepia(){
          for (let x=0; x<this.width; x++){
            for (let y=0;y<this.height;y++){
              let red = super.getRed(this.imageData,x,y) * 0.3;
              let green = super.getGreen(this.imageData,x,y) * 0.5;
              let blue = super.getBlue(this.imageData,x,y) * 0.2;
              let color = (red +  green + blue);
              this.setPixel(this.imageData,x,y,color+44.3,color+25.8,color+0.7);
            }
          }
          this.ctx.putImageData(this.imageData,0,0);
        }


        

filtroBrillo(){
  for (let x=0; x<this.width; x++){
    for (let y=0;y<this.height;y++){
      let red = super.getRed(this.imageData,x,y) + 50;
      let green = super.getGreen(this.imageData,x,y) + 50;
      let blue = super.getBlue(this.imageData,x,y) + 50;
      this.setPixel(this.imageData,x,y,red,green,blue);
    }
  }
  this.ctx.putImageData(this.imageData,0,0);
}

filtroOscuro(){
  for (let x=0; x<this.width; x++){
    for (let y=0;y<this.height;y++){
      let red = super.getRed(this.imageData,x,y) - 50;
      let green = super.getGreen(this.imageData,x,y) - 50;
      let blue = super.getBlue(this.imageData,x,y) - 50;
      this.setPixel(this.imageData,x,y,red,green,blue);
    }
  }
  this.ctx.putImageData(this.imageData,0,0);
}


  /*
  fatality
  filtroBrillo(){
    for(let i=0; i<this.imageData.data.length; i+=4){
      let red = this.imageData.data[i]+10;
      let green = this.imageData.data[i+1]+10;
      let blue = this.imageData.data[i+2]+10;
      this.setPixel(this.imageData,red,green,blue);

    }
    this.ctx.putImageData(this.imageData,0,0);
  }*/





  filtroSaturacion(){
    for (let x=0; x<this.width; x++){
      for (let y=0;y<this.height;y++){
          // convert r,g,b [0,255] range to [0,1]
        let r = super.getRed(this.imageData,x,y) / 255;
        let g = super.getGreen(this.imageData,x,y) / 255;
        let b = super.getBlue(this.imageData,x,y) / 255;
        this.setPixel(this.imageData,x,y,r,g,b);
    


    // get the min and max of r,g,b
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    // lightness is the average of the largest and smallest color components
    var lum = (max + min) / 2;
    var hue;
    var sat;
    if (max == min) { // no saturation
        hue = 0;
        sat = 0;
    } else {
        var c = max - min; // chroma
        // saturation is simply the chroma scaled to fill
        // the interval [0, 1] for every combination of hue and lightness
        sat = c / (1 - Math.abs(2 * lum - 1));
        switch(max) {
            case r:
                // hue = (g - b) / c;
                // hue = ((g - b) / c) % 6;
                // hue = (g - b) / c + (g < b ? 6 : 0);
                break;
            case g:
                hue = (b - r) / c + 2;
                break;
            case b:
                hue = (r - g) / c + 4;
                break;
        }
    }
    hue = Math.round(hue * 60); // °
    sat = Math.round(sat * 100); // %
    lum = Math.round(lum * 100); // %
    this.setPixel(this.imageData,x,y,hue,sat,lum);
  }
  this.ctx.putImageData(this.imageData,0,0);
  }
}










}

