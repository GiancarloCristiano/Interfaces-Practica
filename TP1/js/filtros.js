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
      this.imageData.data[i] = this.imageData.data[i + 1] = this.imageData.data[
        i + 2
      ] = color;
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
        let red = super.getRed(this.imageData, x, y) * 0.3;
        let green = super.getGreen(this.imageData, x, y) * 0.5;
        let blue = super.getBlue(this.imageData, x, y) * 0.2;
        let color = red + green + blue;
        this.setPixel(
          this.imageData,
          x,
          y,
          color + 44.3,
          color + 25.8,
          color + 0.7
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
        // convert r,g,b [0,255] range to [0,1]
        let r = super.getRed(this.imageData, x, y) / 255;
        let g = super.getGreen(this.imageData, x, y) / 255;
        let b = super.getBlue(this.imageData, x, y) / 255;

        let cmin = Math.min(r, g, b),
          cmax = Math.max(r, g, b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;
        // Calculate hue
        // No difference
        if (delta == 0) h = 0;
        // Red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // Blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.setPixel(this.imageData, x, y, h, s, l);
      }
      this.ctx.putImageData(this.imageData, 0, 0);
    }
  }



  filtroConvolute(){
    Filters = {};
        Filters.getPixels = function(img) {
          var c,ctx;
          if (img.getContext) {
            c = img;
            try { ctx = c.getContext('2d'); } catch(e) {}
          }
          if (!ctx) {
            c = this.getCanvas(img.width, img.height);
            ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);
          }
          return ctx.getImageData(0,0,c.width,c.height);
        };

        Filters.getCanvas = function(w,h) {
          var c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          return c;
        };

        Filters.filterImage = function(filter, image, var_args) {
          var args = [this.getPixels(image)];
          for (var i=2; i<arguments.length; i++) {
            args.push(arguments[i]);
          }
          return filter.apply(null, args);
        };

        Filters.tmpCanvas = document.createElement('canvas');
        Filters.tmpCtx = Filters.tmpCanvas.getContext('2d');

        Filters.createImageData = function(w,h) {
          return this.tmpCtx.createImageData(w,h);
        };

        Filters.convolute = function(pixels, weights, opaque) {
          var side = Math.round(Math.sqrt(weights.length));
          var halfSide = Math.floor(side/2);

          var src = pixels.data;
          var sw = pixels.width;
          var sh = pixels.height;

          var w = sw;
          var h = sh;
          var output = Filters.createImageData(w, h);
          var dst = output.data;

          var alphaFac = opaque ? 1 : 0;

          for (var y=0; y<h; y++) {
            for (var x=0; x<w; x++) {
              var sy = y;
              var sx = x;
              var dstOff = (y*w+x)*4;
              var r=0, g=0, b=0, a=0;
              for (var cy=0; cy<side; cy++) {
                for (var cx=0; cx<side; cx++) {
                  var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
                  var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
                  var srcOff = (scy*sw+scx)*4;
                  var wt = weights[cy*side+cx];
                  r += src[srcOff] * wt;
                  g += src[srcOff+1] * wt;
                  b += src[srcOff+2] * wt;
                  a += src[srcOff+3] * wt;
                }
              }
              dst[dstOff] = r;
              dst[dstOff+1] = g;
              dst[dstOff+2] = b;
              dst[dstOff+3] = a + alphaFac*(255-a);
            }
          }
          return output;
        };

  
    var img = document.getElementById('orig');
    img.addEventListener('load', function() {

      var canvases = document.getElementsByTagName('canvas');
      for (var i=0; i<canvases.length; i++) {
        var c = canvases[i];
        c.parentNode.insertBefore(img.cloneNode(true), c);
        c.style.display = 'none';
      }

      function runFilter(id, filter, arg1, arg2, arg3) {
        var c = document.getElementById(id);
        var s = c.previousSibling.style;
        var b = c.parentNode.getElementsByTagName('button')[0];
        if (b.originalText == null) {
          b.originalText = b.textContent;
        }
        if (s.display == 'none') {
          s.display = 'inline';
          c.style.display = 'none';
          b.textContent = b.originalText;
        } else {
          var idata = Filters.filterImage(filter, img, arg1, arg2, arg3);
          c.width = idata.width;
          c.height = idata.height;
          var ctx = c.getContext('2d');
          ctx.putImageData(idata, 0, 0);
          s.display = 'none';
          c.style.display = 'inline';
          b.textContent = 'Restore original image';
        }
      }


      blurC = function() {
        runFilter('blurC', Filters.convolute,
          [ 1/9, 1/9, 1/9,
            1/9, 1/9, 1/9,
            1/9, 1/9, 1/9 ]);
      }

  

    }, false);
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
}
