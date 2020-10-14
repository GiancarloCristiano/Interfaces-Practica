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