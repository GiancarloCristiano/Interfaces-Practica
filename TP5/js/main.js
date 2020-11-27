"use strict";


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        //toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}


document.addEventListener("DOMContentLoaded", () => {

    let openMenu = document.querySelector("#open-menu-profile");
    let closeMenu = document.querySelector("#close-menu-profile");
    let screenWidth = innerWidth;

    let openComments = document.querySelector("#open-comments");
    let closeComments = document.querySelector("#close-comments");

    const open = () =>{
        document.getElementById("comments").style.right = "0%";
    }
    /* Close when someone clicks on the "x" symbol inside the overlay */
    const  close = () => {
        document.getElementById("comments").style.right = "-100%";
    }

    const openMenuProfile = () =>{
        if (screenWidth <= 500)
            document.getElementById("mySidenav").style.width = innerWidth+"px";
        else
            document.getElementById("mySidenav").style.width = "280px";
    }
    /* Close when someone clicks on the "x" symbol inside the overlay */
    const  closeMenuProfile = () => {
        document.getElementById("mySidenav").style.width = "0%";
    }

    openComments.addEventListener("click", open);
    closeComments.addEventListener("click", close);

    openMenu.addEventListener("click", openMenuProfile);
    closeMenu.addEventListener("click", closeMenuProfile);


    let border1 = document.querySelector("#border1");
    let border2 = document.querySelector("#border2");
    let border3 = document.querySelector("#border3");
    let border4 = document.querySelector("#border4");
    let border5 = document.querySelector("#border5");
   

    window.addEventListener("scroll", () =>{
        let valueY = window.scrollY;

        let posicionTop1 = border1.offsetTop;

        let posicionTop2 = border2.offsetTop;
        
        let posicionTop3 = border3.offsetTop;
        
        let posicionTop4 = border4.offsetTop;
        
        let posicionTop5 = border5.offsetTop;

       
        if (valueY < posicionTop1) {
            border2.classList.remove("scale-up-center");

            border1.classList.add("scale-up-center");
            border2.classList.add("scale-down-center");
            border3.classList.add("scale-down-center");
            border4.classList.add("scale-down-center");
            border5.classList.add("scale-down-center");
        }else if(valueY < posicionTop2 && valueY > posicionTop1){
            border1.classList.remove("scale-up-center");
            border3.classList.remove("scale-up-center");

            border1.classList.add("scale-down-center");
            border2.classList.add("scale-up-center");
            border3.classList.add("scale-down-center");
            border4.classList.add("scale-down-center");
            border5.classList.add("scale-down-center");
        }else if(valueY < posicionTop3 && valueY > posicionTop2){
            border2.classList.remove("scale-up-center");
            border4.classList.remove("scale-up-center");

            border1.classList.add("scale-down-center");
            border2.classList.add("scale-down-center");
            border3.classList.add("scale-up-center");
            border4.classList.add("scale-down-center");
            border5.classList.add("scale-down-center");
        }else if(valueY < posicionTop4 && valueY > posicionTop3){
            border3.classList.remove("scale-up-center");
            border5.classList.remove("scale-up-center");
            border1.classList.add("scale-down-center");
            border2.classList.add("scale-down-center");
            border3.classList.add("scale-down-center");
            border4.classList.add("scale-up-center");
            border5.classList.add("scale-down-center");

        }else if(valueY < posicionTop5 && valueY > posicionTop4){
            border4.classList.remove("scale-up-center");

            border1.classList.add("scale-down-center");
            border2.classList.add("scale-down-center");
            border3.classList.add("scale-down-center");
            border4.classList.add("scale-down-center");
            border5.classList.add("scale-up-center");
        }
        
        
        
       

    });









});
//toggleSwitch.addEventListener('change', switchTheme, true);
