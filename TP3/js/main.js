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
	document.querySelector('.page').style.display="block";
}, 1500);