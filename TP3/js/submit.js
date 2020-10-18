let enviar = document.querySelector('.btn-enviar');
//let form = document.querySelector('#formContacto');
enviar.addEventListener('submit', llenarBarra);
//form.addEventListener('submit', llenarBarra);


function llenarBarra(){
  //form.preventDefault();
  enviar.style.backgroundPosition = '300px 0';
  setTimeout(() => {
    enviar.innerHTML = '¡Enviado!';
    enviar.style.animation = "tamanio-boton 0.3s linear";	
  }, 1200);
  setTimeout(() => {	
    window.location.reload();
  }, 2500);

}