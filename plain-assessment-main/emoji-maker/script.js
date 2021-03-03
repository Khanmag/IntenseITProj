 const skinEmoji = document.getElementById("select-skin-card")
 const eyesEmoji = document.getElementById("select-eyes-card")
 const mouthEmoji = document.getElementById("select-mouth-card")
 const nextStep = document.querySelectorAll("i.next-step")
 const previousStep = document.querySelectorAll("i.previous-step")
 const images = document.querySelectorAll("img")
 
 function goNext(e) {
    e.target.parentElement.style.display = "none"
    if (e.target.parentElement == skinEmoji) eyesEmoji.style.display = 'block'
    if (e.target.parentElement == eyesEmoji) mouthEmoji.style.display = 'block'
}
for (let i = 0; i < nextStep.length; i++) {
    nextStep[i].onclick = goNext
}
function goPrevious(e) {
    e.target.parentElement.style.display = "none"
    if (e.target.parentElement == mouthEmoji) eyesEmoji.style.display = 'block'
    if (e.target.parentElement == eyesEmoji) skinEmoji.style.display = 'block'
}
for (let i = 0; i < previousStep.length; i++) {
    previousStep[i].onclick = goPrevious
}

function getImage(e) {
    // e.target.url
    if (e.target.parentElement.parentElement == skinEmoji) {
        images[images.length - 3].src = e.target.src
        skinEmoji.style.display = "none"
        eyesEmoji.style.display = "block"
    }
    if (e.target.parentElement.parentElement == eyesEmoji) {
        images[images.length - 2].src = e.target.src
        eyesEmoji.style.display = "none"
        mouthEmoji.style.display = "block"
    }
    if (e.target.parentElement.parentElement == mouthEmoji) {
        images[images.length - 1].src = e.target.src
    }

}
for (let i = 0; i < images.length - 3; i++) {
    images[i].onclick = getImage
}

