const opaco=255;

class Canvas {

  constructor(c){
    this.canvas = c;
    this.ctx = this.canvas.getContext("2d");
    this.height = this.canvas.height;
    this.width = this.canvas.width;
  }

  setPixel(imageData, x, y, r, g, b){
    var index = (x+y*imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=opaco;
  }

  setPixelColor(imageData, x, y, color){
    var i = (x+y*imageData.width)*4;
    imageData.data[i+0]=color;
    imageData.data[i+1]=color;
    imageData.data[i+2]=color;
    imageData.data[i+3]=opaco;
  }

  getRed(imageData,x,y){
    return imageData.data[(x+y*imageData.width)*4+0];
  }

  getGreen(imageData,x,y){
    return imageData.data[(x+y*imageData.width)*4+1];
  }

  getBlue(imageData,x,y){
    return imageData.data[(x+y*imageData.width)*4+2];
  }

  setRed(imageData,x,y,color){
    return imageData.data[(x+y*imageData.width)*4+0]=color;
  }

  setGreen(imageData,x,y,color){
    return imageData.data[(x+y*imageData.width)*4+1]=color;
  }

  setBlue(imageData,x,y,color){
    return imageData.data[(x+y*imageData.width)*4+2]=color;
  }

  get getContext(){
    return this.ctx;
  }
}
