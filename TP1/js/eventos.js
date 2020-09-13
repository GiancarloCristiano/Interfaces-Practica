document.querySelector("#btn-origin").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva)
        setOrigin(canvasImg1);
    else
        setOrigin2(canvasImg2);
});


document.querySelector("#btn-sepia").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroSepia();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroSepia();
    }
});


document.querySelector("#btn-gray").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroGris();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroGris();
    }
});

document.querySelector("#btn-binary").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroBinario();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroBinario();
    }
});

document.querySelector("#btn-negative").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroNegativo();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroNegativo();
    }
});

document.querySelector("#btn-brightness").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva)
        canvasImg1.filtroBrillo();
    else
        canvasImg2.filtroBrillo();
});

document.querySelector("#btn-darkness").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva)
        canvasImg1.filtroOscuro();
    else
        canvasImg2.filtroOscuro();
});


document.querySelector("#btn-saturation").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroSaturacion();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroSaturacion();
    }
});

document.querySelector("#btn-soft").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroSuave();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroSuave();
    }
});

document.querySelector("#btn-blur").addEventListener("click", function(){
    event.preventDefault();
    if (!imagenNueva){
        setOrigin(canvasImg1);
        canvasImg1.filtroBlur();
    }else{
        setOrigin2(canvasImg2);
        canvasImg2.filtroBlur();
    }
});

/* document.querySelector("#btn-blood").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSangrado();
});

document.querySelector("#btn-focus").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroEnfoque();
});
 
document.querySelector("#btn-sobel").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSobel();
}); */


//DESCARGAR IMAGEN
let download = document.querySelector('#btn-download');
download.addEventListener('click', function (e) {
    let dataURL = canvas.toDataURL('image/png');
    download.href = dataURL;
});//FIN DESCARGAR IMAGEN

let blanco = document.querySelector('#btn-clear');
blanco.addEventListener('click', function (e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
});