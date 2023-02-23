var sparkleAudio = $("#glitterAudio")[0];

var sparkleHand = document.getElementById("btnGlitter");

let click = 0;
function glitter(val){
    click = click + val;
    //alert(click);
    
    if(click % 2 == 0) {
        sparkleAudio.src = "";
        sparkleHand.innerHTML = '<i class="fa-solid fa-hand-sparkles"></i>';
        
    }
    if(click % 2 != 0) {
        sparkleAudio.src = "src/glitter.mp3";
        sparkleHand.innerHTML = '<i class="fa-solid fa-hand-fist"></i>';
        $("#sparkleH1")
    .mousemove(function () {
        sparkleAudio.play();
    });
    }
    
    
}

let currentScrollPosition = 0;
let scrollAmount = 100;

const pCont = document.querySelector(".project-container");
const hScroll = document.querySelector(".horizontalScroll");
const buttonScrollLeft = document.querySelector("#buttonLeft");
const buttonScrollRight = document.querySelector("#buttonRight");
buttonScrollLeft.style.opacity = "0";

let maxScroll = (Math.floor(pCont.scrollWidth / pCont.offsetWidth)  * -100) +100;
let contWidth = pCont.offsetWidth;
//alert(pCont.offsetWidth);

function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
    
    if(currentScrollPosition >= 0){
        currentScrollPosition = 0;
        buttonScrollLeft.style.opacity = "0";
    }else{
        buttonScrollLeft.style.opacity = "1";
    }

    if(currentScrollPosition <= maxScroll){
       currentScrollPosition = maxScroll;
       buttonScrollRight.style.opacity = "0";
    }else{
        buttonScrollRight.style.opacity = "1";
    }

    pCont.style.left = currentScrollPosition + "%";
}