//imagen1
document.querySelector("#btn-origin").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
});

/*document.getElementById("filtroG1").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtro(FGRIS);
});*/

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
    setOrigin(canvasImg1);
    canvasImg1.filtroBrillo();
});

document.querySelector("#btn-darkness").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroOscuro();
});

document.querySelector("#btn-saturation").addEventListener("click", function(){
    event.preventDefault();
    setOrigin(canvasImg1);
    canvasImg1.filtroSaturacion();
});