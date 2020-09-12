document.querySelector("#btn-origin").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
});


document.querySelector("#btn-sepia").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSepia();
});


document.querySelector("#btn-gray").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroGris();
});

document.querySelector("#btn-binary").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroBinario();
});

document.querySelector("#btn-negative").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroNegativo();
});

document.querySelector("#btn-brightness").addEventListener("click", function(){
    event.preventDefault();
    canvasImg1.filtroBrillo();
});

document.querySelector("#btn-darkness").addEventListener("click", function(){
    event.preventDefault();
    canvasImg1.filtroOscuro();
});

document.querySelector("#btn-blood").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSangrado();
});

document.querySelector("#btn-saturation").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSaturacion();
});

document.querySelector("#btn-soft").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSuave();
});



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