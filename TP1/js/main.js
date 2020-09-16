//BLOQUE PARA CARGAR LA IMAGEN
var canvas = document.querySelector('#canvas');
let input = document.querySelector('.input1');

let context = canvas.getContext('2d');
let imagenBackUp;

let download = document.querySelector("#btn-download");
let white = document.querySelector('#btn-clear');

let original = document.querySelector("#btn-origin");
let grays = document.querySelector("#btn-gray");
let binary = document.querySelector("#btn-binary");
let sepia = document.querySelector("#btn-sepia");
let negative = document.querySelector("#btn-negative");
let brightness = document.querySelector("#btn-brightness");
let darkness = document.querySelector("#btn-darkness")
let saturation = document.querySelector("#btn-saturation");
let soft = document.querySelector("#btn-soft");
let blur = document.querySelector("#btn-blur");
let focus = document.querySelector("#btn-focus");
//let blood = document.querySelector("#btn-blood");
//let sobel = document.querySelector("#btn-sobel");

original.addEventListener("click", reestablecerImagen); 
grays.addEventListener("click", filtroGris);
binary.addEventListener("click", filtroBinario);
sepia.addEventListener("click", filtroSepia);
negative.addEventListener("click", filtroNegativo);
brightness.addEventListener("click", filtroBrillo);
darkness.addEventListener("click", filtroOscuro);
saturation.addEventListener("click", filtroSaturacion);
soft.addEventListener("click", filtroSuave);
blur.addEventListener("click", filtroBlur);
focus.addEventListener("click", filtroEnfoque);
//blood.addEventListener("click", filtroSangrado);
//sobel.addEventListener("click", filtroSobel);


//DESCARGAR IMAGEN
download.addEventListener('click', function (e) {
    let dataURL = canvas.toDataURL('image/png');
    download.href = dataURL;
});//FIN DESCARGAR IMAGEN


//LIMPIAR CANVAS
white.addEventListener('click', function (e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

    
//CARGAR IMAGEN
context.fillStyle = "#F0F0F0"; // canvas background color
context.fillRect(0, 0, canvas.width, canvas.height);
input.onchange = e => {
    // getting a hold of the file reference
    let file = e.target.files[0];
        // setting up the reader
    let reader = new FileReader();
    reader.readAsDataURL(file); // this is reading as data url
    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
        if (file.type.match('image.*')) {
            let content = readerEvent.target.result; // this is the content!
            let image = new Image();
            image.src = content;  
            image.onload = function () {
                let imageAspectRatio = (1.0 * this.height) / this.width;
                let imageScaledWidth = canvas.width;
                let imageScaledHeight = canvas.width * imageAspectRatio;
                // draw image on canvas
                context.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);
                // get imageData from content of canvas
                let imageData = context.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
                // draw the modified image
                context.putImageData(imageData, 0, 0);
                imagenBackUp = imageData;  
            }
        } else {
            alert('El archivo seleccionado no es una imagen.');
        }
    }
}//FIN CARGAR IMAGEN