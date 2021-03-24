import slider from "./hero_banner.js"
import getHTML from "./menu_tabs.js"

const $HEADER = document.querySelector(".main-header")
const $HEADER_LOGO = document.querySelector(".header .logo")
const $CONTENEDOR = document.querySelector(".contenedor")

////////////////  HEADER SCROLL  //////////////////
window.onscroll = function() {
    let y = window.scrollY;
    if(y >30){
        $HEADER.classList.add("header-pintado")
        $HEADER_LOGO.classList.add("logo-scroll")
    }else{
        $HEADER.classList.remove("header-pintado")
        $HEADER_LOGO.classList.remove("logo-scroll")
    }
};
//////////////////////////////////////////////////


    
const $MAIN = document.querySelector(".tabs-content")

document.addEventListener("DOMContentLoaded", function (e) {
    slider()
    getHTML({
        url:"../TABS/tabs1.html",
        succes: function (html) {
            $MAIN.innerHTML = html
        },
        error: function(error) {
          $MAIN.innerHTML = `<h1>${error}</h1>`  
        }
    })
})

document.addEventListener("click", function (e) {
    if(e.target.matches(".tabs a")){
        e.preventDefault()

        $CONTENEDOR.classList.remove("cerrar")
        setTimeout(() => {
            $CONTENEDOR.classList.add("cerrar")
        }, 1000);

        setTimeout(() => {
            getHTML({
                url:e.target.href,
                succes: function (html) {
                    $MAIN.innerHTML = html
                },
                error: function(error) {
                    $MAIN.innerHTML = `<h1>${error}</h1>`  
                }
            })    
        }, 1000);  
    }
})