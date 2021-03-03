const sectors = document.querySelectorAll("section")
const inputs = document.querySelectorAll("input")
const result = document.getElementById("aside-counter").children[0].children[0]
const modal = document.getElementById("modal-wrapper")
const showResult = document.querySelector("span")


for (let i = 0; i < sectors.length - 1; i++) {
    sectors[i].addEventListener("click", forListener)
}
function forListener(e) {
    if (e.target.name == "q1") {
        if (e.target.value == 3) {
            e.target.parentElement.classList.add("correct")
            result.textContent = (+result.textContent[0] + 1) + "/5"
        }
        else {
            e.target.parentElement.classList.add("incorrect")
            inputs[2].parentElement.classList.add("correct")
        }
        e.target.parentElement.parentElement.parentElement.removeEventListener('click', forListener)
    }
    if (e.target.name == "q2") {
        if (e.target.value == 1) {
            e.target.parentElement.classList.add("correct")
            result.textContent = (+result.textContent[0] + 1) + "/5"
        }
        else {
            e.target.parentElement.classList.add("incorrect")
            inputs[4].parentElement.classList.add("correct")
        }
        e.target.parentElement.parentElement.parentElement.removeEventListener('click', forListener)
    }
    if (e.target.name == "q3") {
        if (e.target.value == 3) {
            e.target.parentElement.classList.add("correct")
            result.textContent = (+result.textContent[0] + 1) + "/5"
        }
        else {
            e.target.parentElement.classList.add("incorrect")
            inputs[10].parentElement.classList.add("correct")
        }
        e.target.parentElement.parentElement.parentElement.removeEventListener('click', forListener)
    }
    if (e.target.name == "q4") {
        if (e.target.value == 3) {
            e.target.parentElement.classList.add("correct")
            result.textContent = (+result.textContent[0] + 1) + "/5"
        }
        else {
            e.target.parentElement.classList.add("incorrect")
            inputs[14].parentElement.classList.add("correct")
        }
        e.target.parentElement.parentElement.parentElement.removeEventListener('click', forListener)
    }
    if (e.target.name == "q5") {
        if (e.target.value == 2) {
            e.target.parentElement.classList.add("correct")
            result.textContent = (+result.textContent[0] + 1) + "/5"
        }
        else {
            e.target.parentElement.classList.add("incorrect")
            inputs[17].parentElement.classList.add("correct")
        }
        e.target.parentElement.parentElement.parentElement.removeEventListener('click', forListener)
    }
}
inputs[inputs.length - 1].onclick = () => {
    showResult.textContent = result.textContent
    modal.style.display = "block"
}