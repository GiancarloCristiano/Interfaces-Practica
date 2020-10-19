document.body.onload = startSite();
/* document.addEventListener('DOMContentLoaded', setTimeout(() => {
	let fondo = document.querySelector("#page");
	fondo.style.display="block";
}, 1000); */


function startSite() {
	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

    window.addEventListener("scroll", function(){
        if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){
			document.querySelector('#video').style.display = "block";
			document.querySelector('#video').style.animation = "slide-up 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			}  
        if (document.body.scrollTop > 800|| document.documentElement.scrollTop > 800){
			document.querySelector('#countdown').style.display = "block";
			document.querySelector('#countdown').style.animation = "slide-up 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			}  
		if (document.body.scrollTop > 850|| document.documentElement.scrollTop > 850){
			document.querySelector('#cont-num').style.display = "block";
			document.querySelector('#cont-num').style.animation = "slide-up 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			document.querySelector('.intro-slideshow').style.opacity = "1";
			document.querySelector('.intro-slideshow').style.animation = "slide-up 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			}  
		if (document.body.scrollTop > 1700|| document.documentElement.scrollTop > 1700){
				document.querySelector('.section-description').style.display = "block";
				document.querySelector('.section-description').style.animation = "slide 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			} 
		if (document.body.scrollTop > 2300|| document.documentElement.scrollTop > 2300){
			document.querySelector('.personajes-b').style.opacity="1";
			document.querySelector('.personajes-m').style.opacity="1";
			document.querySelector('.personajes-b').style.animation = "slide-rg 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
			document.querySelector('.personajes-m').style.animation = "slide-rg 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
		}  
    });/*
	let scroll = window.scrollY;
	document.title = scroll;
	//checkVisible(scroll);
	if (scroll > 100){
		document.querySelector('#video').style.animation = "slide 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
		console.log("hola");
	}
	//if (scroll>1500)
       //animarCalendar(scroll);
	//if (scroll>1800)
    //animarComents(scroll);*/
	




const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 4000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;
  
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  
  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 0.75;

}