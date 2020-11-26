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

    let openNav = document.querySelector("#open-comments");
    let closeNav = document.querySelector("#close-comments");

    const open = () =>{
        document.getElementById("comments").style.width = "100%";
    }
    /* Close when someone clicks on the "x" symbol inside the overlay */
    const  close = () => {
        document.getElementById("comments").style.width = "0%";
    }

    const openMenuProfile = () =>{
        document.getElementById("mySidenav").style.width = "280px";
    }
    /* Close when someone clicks on the "x" symbol inside the overlay */
    const  closeMenuProfile = () => {
        document.getElementById("mySidenav").style.width = "0%";
    }
    openNav.addEventListener("click", open);
    closeNav.addEventListener("click", close);

    openMenu.addEventListener("click", openMenuProfile);
    closeMenu.addEventListener("click", closeMenuProfile);
});
//toggleSwitch.addEventListener('change', switchTheme, true);
