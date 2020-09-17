"use strict";

//GETERS Y SETERS
function setPixel(imageData, x, y, r, g, b) {
  var index = (x + y * imageData.width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = 255;
}

function setPixelColor(imageData, x, y, color) {
  var i = (x + y * imageData.width) * 4;
  imageData.data[i + 0] = color;
  imageData.data[i + 1] = color;
  imageData.data[i + 2] = color;
  imageData.data[i + 3] = 255;
}

function getRed(imageData, x, y) {
  return imageData.data[(x + y * imageData.width) * 4 + 0];
}

function getGreen(imageData, x, y) {
  return imageData.data[(x + y * imageData.width) * 4 + 1];
}

function getBlue(imageData, x, y) {
  return imageData.data[(x + y * imageData.width) * 4 + 2];
}

function setRed(imageData, x, y, color) {
  return (imageData.data[(x + y * imageData.width) * 4 + 0] = color);
}

function setGreen(imageData, x, y, color) {
  return (imageData.data[(x + y * imageData.width) * 4 + 1] = color);
}

function setBlue(imageData, x, y, color) {
  return (imageData.data[(x + y * imageData.width) * 4 + 2] = color);
}



//REESTABLECER IMAGEN
function reestablecerImagen() {
  context.putImageData(imagenBackUp, 0, 0);
}



//FILTROS
function filtroBrillo() {
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let red = getRed(imageData, x, y) + 15;
      let green = getGreen(imageData, x, y) + 15;
      let blue = getBlue(imageData, x, y) + 15;
      setPixel(imageData, x, y, red, green, blue);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroOscuro() {
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let red = getRed(imageData, x, y) - 15;
      let green = getGreen(imageData, x, y) - 15;
      let blue = getBlue(imageData, x, y) - 15;
      setPixel(imageData, x, y, red, green, blue);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroSaturacion() {
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let coeficiente = 1.05;
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let r = getRed(imageData, x, y);
      let g = getGreen(imageData, x, y);
      let b = getBlue(imageData, x, y);
      if (r > g) {
        r *= coeficiente;
      }
      if (r > b) {
        r *= coeficiente;
      }
      if (g > r) {
        g *= coeficiente;
      }
      if (g > b) {
        g *= coeficiente;
      }
      if (b > r) {
        b *= coeficiente;
      }
      if (b > g) {
        b *= coeficiente;
      }
      setPixel(imageData, x, y, r, g, b);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroDesaturacion() {
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let coeficiente = 0.95;
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let r = getRed(imageData, x, y);
      let g = getGreen(imageData, x, y);
      let b = getBlue(imageData, x, y);
      if (r > g) {
        r *= coeficiente;
      }
      if (r > b) {
        r *= coeficiente;
      }
      if (g > r) {
        g *= coeficiente;
      }
      if (g > b) {
        g *= coeficiente;
      }
      if (b > r) {
        b *= coeficiente;
      }
      if (b > g) {
        b *= coeficiente;
      }
      setPixel(imageData, x, y, r, g, b);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroGris() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    let red = imageData.data[i];
    let green = imageData.data[i + 1];
    let blue = imageData.data[i + 2];
    let color = (red + green + blue) / 3;
    imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = color;
  }
  context.putImageData(imageData, 0, 0);
}

function filtroBinario() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    let red = imageData.data[i];
    let green = imageData.data[i + 1];
    let blue = imageData.data[i + 2];
    let color = red + green + blue;
    if (color <= 382) color = 0;
    else color = 255;
    imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = color;
  }
  context.putImageData(imageData, 0, 0);
}

function filtroNegativo() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let red = 255 - getRed(imageData, x, y);
      let green = 255 - getGreen(imageData, x, y);
      let blue = 255 - getBlue(imageData, x, y);
      setPixel(imageData, x, y, red, green, blue);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroSepia() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      let red = getRed(imageData, x, y);
      let green = getGreen(imageData, x, y);
      let blue = getBlue(imageData, x, y);
      let color = (red + green + blue) / 3;
      setPixel(imageData, x, y, color + 60, color + 30, color);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function filtroSuave() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let red = 0.0;
  let green = 0.0;
  let blue = 0.0;
  let mat = [
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
  ];
  for (let x = 0; x < imageData.width; x++) {
    for (let y = 1; y < imageData.height - 1; y++) {
      red =
        getRed(imageData, x - 1, y - 1) * mat[0][0] +
        getRed(imageData, x, y - 1) * mat[0][1] +
        getRed(imageData, x + 1, y - 1) * mat[0][2] +
        getRed(imageData, x - 1, y) * mat[1][0] +
        getRed(imageData, x, y) * mat[1][1] +
        getRed(imageData, x + 1, y) * mat[1][2] +
        getRed(imageData, x - 1, y + 1) * mat[2][0] +
        getRed(imageData, x, y + 1) * mat[2][1] +
        getRed(imageData, x + 1, y + 1) * mat[2][2];

      green =
        getGreen(imageData, x - 1, y - 1) * mat[0][0] +
        getGreen(imageData, x, y - 1) * mat[0][1] +
        getGreen(imageData, x + 1, y - 1) * mat[0][2] +
        getGreen(imageData, x - 1, y) * mat[1][0] +
        getGreen(imageData, x, y) * mat[1][1] +
        getGreen(imageData, x + 1, y) * mat[1][2] +
        getGreen(imageData, x - 1, y + 1) * mat[2][0] +
        getGreen(imageData, x, y + 1) * mat[2][1] +
        getGreen(imageData, x + 1, y + 1) * mat[2][2];

      blue =
        getBlue(imageData, x - 1, y - 1) * mat[0][0] +
        getBlue(imageData, x, y - 1) * mat[0][1] +
        getBlue(imageData, x + 1, y - 1) * mat[0][2] +
        getBlue(imageData, x - 1, y) * mat[1][0] +
        getBlue(imageData, x, y) * mat[1][1] +
        getBlue(imageData, x + 1, y + 1) * mat[1][2] +
        getBlue(imageData, x - 1, y + 1) * mat[2][0] +
        getBlue(imageData, x, y + 1) * mat[2][1] +
        getBlue(imageData, x + 1, y + 1) * mat[2][2];

      setPixel(imageData, x, y, red, green, blue);
    }
  }

  context.putImageData(imageData, 0, 0);
}

function filtroBlur() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let red = 0.0;
  let green = 0.0;
  let blue = 0.0;
  let mat = 1 / 25;
  for (let x = 0; x < imageData.width; x++) {
    for (let y = 2; y < imageData.height - 2; y++) {
      red =
        getRed(imageData, x - 2, y - 2) * mat +
        getRed(imageData, x - 1, y - 2) * mat +
        getRed(imageData, x, y - 2) * mat +
        getRed(imageData, x + 1, y - 2) * mat +
        getRed(imageData, x + 2, y - 2) * mat +
        getRed(imageData, x - 2, y - 1) * mat +
        getRed(imageData, x - 1, y - 1) * mat +
        getRed(imageData, x, y - 1) * mat +
        getRed(imageData, x + 1, y - 1) * mat +
        getRed(imageData, x + 2, y - 1) * mat +
        getRed(imageData, x - 2, y) * mat +
        getRed(imageData, x - 1, y) * mat +
        getRed(imageData, x, y) * mat +
        getRed(imageData, x + 1, y) * mat +
        getRed(imageData, x + 2, y) * mat +
        getRed(imageData, x - 2, y + 1) * mat +
        getRed(imageData, x - 1, y + 1) * mat +
        getRed(imageData, x, y + 1) * mat +
        getRed(imageData, x + 1, y + 1) * mat +
        getRed(imageData, x + 2, y + 1) * mat +
        getRed(imageData, x - 2, y + 2) * mat +
        getRed(imageData, x - 1, y + 2) * mat +
        getRed(imageData, x, y + 2) * mat +
        getRed(imageData, x + 1, y + 2) * mat +
        getRed(imageData, x + 2, y + 2) * mat;

      green =
        getGreen(imageData, x - 2, y - 2) * mat +
        getGreen(imageData, x - 1, y - 2) * mat +
        getGreen(imageData, x, y - 2) * mat +
        getGreen(imageData, x + 1, y - 2) * mat +
        getGreen(imageData, x + 2, y - 2) * mat +
        getGreen(imageData, x - 2, y - 1) * mat +
        getGreen(imageData, x - 1, y - 1) * mat +
        getGreen(imageData, x, y - 1) * mat +
        getGreen(imageData, x + 1, y - 1) * mat +
        getGreen(imageData, x + 2, y - 1) * mat +
        getGreen(imageData, x - 2, y) * mat +
        getGreen(imageData, x - 1, y) * mat +
        getGreen(imageData, x, y) * mat +
        getGreen(imageData, x + 1, y) * mat +
        getGreen(imageData, x + 2, y) * mat +
        getGreen(imageData, x - 2, y + 1) * mat +
        getGreen(imageData, x - 1, y + 1) * mat +
        getGreen(imageData, x, y + 1) * mat +
        getGreen(imageData, x + 1, y + 1) * mat +
        getGreen(imageData, x + 2, y + 1) * mat +
        getGreen(imageData, x - 2, y + 2) * mat +
        getGreen(imageData, x - 1, y + 2) * mat +
        getGreen(imageData, x, y + 2) * mat +
        getGreen(imageData, x + 1, y + 2) * mat +
        getGreen(imageData, x + 2, y + 2) * mat;

      blue =
        getBlue(imageData, x - 2, y - 2) * mat +
        getBlue(imageData, x - 1, y - 2) * mat +
        getBlue(imageData, x, y - 2) * mat +
        getBlue(imageData, x + 1, y - 2) * mat +
        getBlue(imageData, x + 2, y - 2) * mat +
        getBlue(imageData, x - 2, y - 1) * mat +
        getBlue(imageData, x - 1, y - 1) * mat +
        getBlue(imageData, x, y - 1) * mat +
        getBlue(imageData, x + 1, y - 1) * mat +
        getBlue(imageData, x + 2, y - 2) * mat +
        getBlue(imageData, x - 2, y) * mat +
        getBlue(imageData, x - 1, y) * mat +
        getBlue(imageData, x, y) * mat +
        getBlue(imageData, x + 1, y) * mat +
        getBlue(imageData, x + 2, y) * mat +
        getBlue(imageData, x - 2, y + 1) * mat +
        getBlue(imageData, x - 1, y + 1) * mat +
        getBlue(imageData, x, y + 1) * mat +
        getBlue(imageData, x + 1, y + 1) * mat +
        getBlue(imageData, x + 2, y + 1) * mat +
        getBlue(imageData, x - 2, y + 2) * mat +
        getBlue(imageData, x - 1, y + 2) * mat +
        getBlue(imageData, x, y + 2) * mat +
        getBlue(imageData, x + 1, y + 2) * mat +
        getBlue(imageData, x + 2, y + 2) * mat;

      setPixel(imageData, x, y, red, green, blue);
    }
  }

  context.putImageData(imageData, 0, 0);
}

function filtroNitidez() {
  reestablecerImagen();
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let mat = [
    [0, -0.5, 0],
    [-0.5, 3, -0.5],
    [0, -0.5, 0],
  ];
  for (let x = 0; x < imageData.width; x++) {
    for (let y = 1; y < imageData.height - 1; y++) {
      let red =
        getRed(imageData, x - 1, y - 1) * mat[0][0] +
        getRed(imageData, x, y - 1) * mat[0][1] +
        getRed(imageData, x + 1, y - 1) * mat[0][2] +
        getRed(imageData, x - 1, y) * mat[1][0] +
        getRed(imageData, x, y) * mat[1][1] +
        getRed(imageData, x + 1, y) * mat[1][2] +
        getRed(imageData, x - 1, y + 1) * mat[2][0] +
        getRed(imageData, x, y + 1) * mat[2][1] +
        getRed(imageData, x + 1, y + 1) * mat[2][2];

      let green =
        getGreen(imageData, x - 1, y - 1) * mat[0][0] +
        getGreen(imageData, x, y - 1) * mat[0][1] +
        getGreen(imageData, x + 1, y - 1) * mat[0][2] +
        getGreen(imageData, x - 1, y) * mat[1][0] +
        getGreen(imageData, x, y) * mat[1][1] +
        getGreen(imageData, x + 1, y) * mat[1][2] +
        getGreen(imageData, x - 1, y + 1) * mat[2][0] +
        getGreen(imageData, x, y + 1) * mat[2][1] +
        getGreen(imageData, x + 1, y + 1) * mat[2][2];

      let blue =
        getBlue(imageData, x - 1, y - 1) * mat[0][0] +
        getBlue(imageData, x, y - 1) * mat[0][1] +
        getBlue(imageData, x + 1, y - 1) * mat[0][2] +
        getBlue(imageData, x - 1, y) * mat[1][0] +
        getBlue(imageData, x, y) * mat[1][1] +
        getBlue(imageData, x + 1, y + 1) * mat[1][2] +
        getBlue(imageData, x - 1, y + 1) * mat[2][0] +
        getBlue(imageData, x, y + 1) * mat[2][1] +
        getBlue(imageData, x + 1, y + 1) * mat[2][2];

      setPixel(imageData, x, y, red, green, blue);
    }
  }

  context.putImageData(imageData, 0, 0);
}

/* filtroSangrado(){
      reestablecerImagen();
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for(let i=0; i<imageData.data.length; i+=4){
      let red = imageData.data[i]+10;
      let green = imageData.data[i+1]+10;
      let blue = imageData.data[i+2]+10;
      setPixel(imageData,red,green,blue);

    }
    context.putImageData(imageData,0,0);
  }


      filtroSobel(){
        reestablecerImagen();
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let red = 0.0;
    let green = 0.0;
    let blue = 0.0;
    let r = 0.0;
    let g = 0.0;
    let b = 0.0;
    let mat = [[-1,-2,-1],[0,0,0],[1,2,1]];
    let mat2 = [[-1,0,1],[-2,0,2],[-1,0,1]];
    for (let x = 1; x < imageData.width-1; x++) {
      for (let y = 1; y < imageData.height-1; y++) {
        red = getRed(imageData, x-1, y-1) * mat[0][0] +  getRed(imageData,x, y-1) * mat[0][1] +  getRed(imageData,x+1, y-1) * mat[0][2]
        + getRed(imageData,x-1, y) * mat[1][0] +  getRed(imageData,x, y) * mat[1][1] +  getRed(imageData,x+1, y) * mat[1][2]
        + getRed(imageData,x-1, y+1) * mat[2][0] +  getRed(imageData,x, y+1) * mat[2][1] +  getRed(imageData,x+1, y+1) * mat[2][2];

        green = getGreen(imageData,x-1, y-1) * mat[0][0] +  getGreen(imageData,x, y-1) * mat[0][1] +  getGreen(imageData,x+1, y-1) * mat[0][2]
        +   getGreen(imageData,x-1, y) * mat[1][0] +  getGreen(imageData,x, y) * mat[1][1] +  getGreen(imageData,x+1, y) * mat[1][2]
        +   getGreen(imageData,x-1, y+1) * mat[2][0] +  getGreen(imageData,x, y+1) * mat[2][1] +  getGreen(imageData,x+1, y+1) * mat[2][2];

        blue = getBlue(imageData,x-1, y-1) * mat[0][0] +  getBlue(imageData,x, y-1) * mat[0][1] +  getBlue(imageData,x+1, y-1) * mat[0][2]
        +   getBlue(imageData,x-1, y) * mat[1][0] +  getBlue(imageData,x, y) * mat[1][1] +  getBlue(imageData,x+1, y+1) * mat[1][2]
        +   getBlue(imageData,x-1, y+1) * mat[2][0] +  getBlue(imageData,x, y+1) * mat[2][1] +  getBlue(imageData,x+1, y+1) * mat[2][2];

        r = getRed(imageData, x-1, y-1) * mat2[0][0] +  getRed(imageData,x, y-1) * mat2[0][1] +  getRed(imageData,x+1, y-1) * mat2[0][2]
        + getRed(imageData,x-1, y) * mat2[1][0] +  getRed(imageData,x, y) * mat2[1][1] +  getRed(imageData,x+1, y) * mat2[1][2]
        + getRed(imageData,x-1, y+1) * mat2[2][0] +  getRed(imageData,x, y+1) * mat2[2][1] +  getRed(imageData,x+1, y+1) * mat2[2][2];

        g = getGreen(imageData,x-1, y-1) * mat2[0][0] +  getGreen(imageData,x, y-1) * mat2[0][1] +  getGreen(imageData,x+1, y-1) * mat2[0][2]
        +   getGreen(imageData,x-1, y) * mat2[1][0] +  getGreen(imageData,x, y) * mat2[1][1] +  getGreen(imageData,x+1, y) * mat2[1][2]
        +   getGreen(imageData,x-1, y+1) * mat2[2][0] +  getGreen(imageData,x, y+1) * mat2[2][1] +  getGreen(imageData,x+1, y+1) * mat2[2][2];

        b = getBlue(imageData,x-1, y-1) * mat2[0][0] +  getBlue(imageData,x, y-1) * mat2[0][1] +  getBlue(imageData,x+1, y-1) * mat2[0][2]
        +   getBlue(imageData,x-1, y) * mat2[1][0] +  getBlue(imageData,x, y) * mat2[1][1] +  getBlue(imageData,x+1, y+1) * mat2[1][2]
        +   getBlue(imageData,x-1, y+1) * mat2[2][0] +  getBlue(imageData,x, y+1) * mat2[2][1] +  getBlue(imageData,x+1, y+1) * mat2[2][2];

        let color = (red + green + blue) / 3;
        let c = (r + g + b) / 3;

        let G=Math.sqrt(color*color+c*c);


        setPixel(imageData, x, y, G, G, G);
      }
  }

  context.putImageData(imageData, 0, 0);
  } */
