export default function slider() {
    const $PREVIEW = document.querySelector(".preview")
    const $NEXT = document.querySelector(".next")
    const $SLIDER = document.querySelectorAll(".slider")
    const $CIRCLE = document.querySelectorAll(".circle-hero-banner .circle")
    console.log($CIRCLE)
    let i=0
    let c=0
    document.addEventListener("click", function (e) {
        if(e.target === $PREVIEW || e.target.matches(`.preview *`)){
            e.preventDefault()
            $SLIDER[i].classList.remove("slider-is-active")
            i--
            if(i<0){
                i = $SLIDER.length - 1
            }
            $SLIDER[i].classList.add("slider-is-active")


            $CIRCLE[c].classList.remove("circle-is-active")
            c--
            if(c<0){
                c = $CIRCLE.length - 1
            }
            $CIRCLE[c].classList.add("circle-is-active")
        }

        if(e.target === $NEXT || e.target.matches(`.next *`)){
            e.preventDefault()
            $SLIDER[i].classList.remove("slider-is-active")
            i++
            if(i>$SLIDER.length - 1){
                i = 0
            }
            $SLIDER[i].classList.add("slider-is-active")


            $CIRCLE[c].classList.remove("circle-is-active")
            c++
            if(c> $CIRCLE.length - 1){
                c = 0
            }
            $CIRCLE[c].classList.add("circle-is-active")

        }

        
    })
}



