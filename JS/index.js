import slider from "./hero_banner.js"

const $HEADER = document.querySelector(".main-header")
const $ENLACES_HEADER = document.querySelectorAll(".nav a")
const $HEADER_LOGO = document.querySelector(".header .logo")

////////////////  HEADER SCROLL  //////////////////
window.onscroll = function() {
    

    let y = window.scrollY;
    if(y >80){
        $HEADER.classList.add("header-pintado")
        $ENLACES_HEADER.forEach(e => {
            e.classList.add("enlace-white")
        });
        $HEADER_LOGO.classList.add("logo-scroll")
    }else{
        $HEADER.classList.remove("header-pintado")
        $ENLACES_HEADER.forEach(e => {
            e.classList.remove("enlace-white")
        });
        $HEADER_LOGO.classList.remove("logo-scroll")
    }
};
//////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function (e) {

    slider()
    
    })