const hoverText = document.getElementsByClassName("hoverText");
const hoverText2 = document.getElementsByClassName("hoverText");
const moveText =  document.getElementById("text-move")
const textMove = document.getElementById("text-main")
const bio = hoverText[0].innerHTML;
const rules = hoverText[1].innerHTML;
const social = hoverText[2].innerHTML;
const arrayHover = [bio, rules, social]
let estados = 0
//0 = bio
//1 = rules
//2 = socials
for (let index = 0; index < hoverText.length; index++) {
    let textActual = hoverText[index].innerHTML
    
    hoverText[index].addEventListener("mouseenter", function(event) {
        hoverText[index].innerHTML = `<box-icon class="arrow-small" name='right-arrow' type='solid' color='#e04c98' ></box-icon> ${textActual}`
    })
    hoverText[index].addEventListener("mouseleave", () => {
        if (estados != index) {
        hoverText[index].innerHTML = `${textActual}`
        }

    })
}
function cambioDeEstado(i) {
    estados+= i
    if (estados < 0 ) {
        estados = 0;
    }
    else if (estados > 2) {
        estados = 2;
    }
    if(estados == 0) { // biograf
        hoverText[0].innerHTML = `<box-icon class="arrow-small" name='right-arrow' type='solid' color='#e04c98' ></box-icon> ${bio}`
        moveText.innerHTML= `<p>About Me</p>`
        textMove.innerHTML= `<p id="text-main">
        Soy akewiwi un chico uwu otaku y me gusta mi mejor amiga elenea llegamos a cuatro
        </p>`
    }
    else if (estados == 1) { //rules
        hoverText[1].innerHTML = `<box-icon class="arrow-small" name='right-arrow' type='solid' color='#e04c98' ></box-icon> ${rules}`
        moveText.innerHTML= `<p>Rules</p>`
        textMove.innerHTML= `<p id="text-main">
        Reglas number 1. dar plata
        number two. donarme plata
        third = regalarme plata
        </p>`
    }
    else if (estados == 2) { //social
        hoverText[2].innerHTML = `<box-icon class="arrow-small" name='right-arrow' type='solid' color='#e04c98' ></box-icon> ${social}`
        moveText.innerHTML= `<p>Social</p>`
        textMove.innerHTML= `<p id="text-main">
        MI IG= AKEzzzz
        mi facebook = akemizzz 
        mi x(twitter og) = akecituozzzz
        </p>`
    }
    for (let index = 0; index < hoverText2.length; index++) {
        let textActual = arrayHover[index]          
        if (estados != index) {
            hoverText[index].innerHTML = `${textActual}`
        }

    }
};