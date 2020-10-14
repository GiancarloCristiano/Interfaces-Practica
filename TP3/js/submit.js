let enviar = document.querySelector('.btn-enviar');
enviar.addEventListener("click", llenarBarra);

function llenarBarra(){
  enviar.style.backgroundPosition = '300px 0';
  setTimeout(() => {
	enviar.innerHTML = '¡Enviado!';
	enviar.style.animation = "tamanio-boton 0.3s linear";	
}, 1200);
}