let burger = document.querySelector('.burger');
burger.addEventListener("click", menuHamburguesa);
function menuHamburguesa() {
	var x = document.querySelector(".btns-social");
	if (x.style.display === "inline") {
	  x.style.display = "none";
	} else {
	  x.style.display = "inline";
	}
  }


window.onload = setTimeout(function(){
	document.querySelector('.loader-container').style.display="none";
	document.querySelector('#parallax').style.display = "block";
	document.querySelector('#parallax').style.animation = "slide 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
	document.querySelector('.page').style.display="block";
	
}, 3000);