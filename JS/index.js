
$HEADER = document.querySelector(".main-header")
$ENLACES_HEADER = document.querySelectorAll(".nav a")
$HEADER_LOGO = document.querySelector(".header .logo")


document.addEventListener("DOMContentLoaded", function (e) {


    
    


})
console.log($HEADER_LOGO)
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