const firstName = document.getElementById("first_name")
const lastName = document.getElementById("last_name")
const email = document.getElementById("email")
const firstCont = document.getElementById("StepOneContainer")
const secondCont = document.getElementById("StepTwoContainer")
const thirdCont = document.getElementById("StepThreeContainer")
const btn1 = document.getElementById("StepOneNext")
const phone = document.getElementById("contact")
const city = document.getElementById("city")
const country = document.getElementById("country")
const btn2back = document.getElementById("StepTwoPrevious")
const btn2next = document.getElementById("StepTwoNext")
const select = document.getElementById("select_program")
const message = document.getElementById("message")
const btn3back = document.getElementById("StepthreePrevious")
const btn3next = document.getElementById("StepThreeSubmit")
const lastWindow = document.getElementById("SuccessContainer")
// lastWindow.style.display = "block"
let FNFlag = false
let LNFlag = false
let EMFlag = false
let regexp = /(([a-z]+)|([а-я]+))/gi
let regexpMail = /.+(@gmail.com)|(@mail.ru)|(@yandex.ru)/g
let TFlag = false
let regexpTel = /[a-z]|[а-я]/gi
let regexpCity = /\d/gi
let CityFlag = true
let counryFlag = false
let selectFlag = false
let messageFlag = false
firstName.addEventListener("input", (e) => {
    if (e.target.value && e.target.value == e.target.value.match(regexp)[0]) {
        e.target.parentElement.children[2].style.display = "none"
        FNFlag = true
    }
    else {
        e.target.parentElement.children[2].style.display = "block"
        FNFlag = false
    }
})
lastName.addEventListener("input", (e) => {
    if (e.target.value == e.target.value.match(regexp)[0]) {
        e.target.parentElement.children[2].style.display = "none"
        LNFlag = true
    }
    else {
        e.target.parentElement.children[2].style.display = "block"
        LNFlag = false
    }
})
email.addEventListener("blur", (e) => {
    if (e.target.value.match(regexpMail)) {
        e.target.parentElement.children[2].style.display = "none"
        EMFlag = true
    }
    else {
        e.target.parentElement.children[2].style.display = "block"
        EMFlag = false
    }
})
btn1.onclick = () => {
    if (FNFlag && LNFlag && EMFlag) {
        firstCont.style.display = "none"
        secondCont.style.display = "block"
    }
    return false
}
phone.addEventListener("blur", (e) => {
    if (e.target.value.match(regexpTel)) {
        e.target.parentElement.children[2].style.display = "block"
        TFlag = false
    }
    else {
        e.target.parentElement.children[2].style.display = "none"
        TFlag = true
    }
})
city.addEventListener("input", (e) => {
    if (e.target.value.match(regexpCity)) {
        e.target.parentElement.children[2].style.display = "block"
        CityFlag = false
    }
    else {
        e.target.parentElement.children[2].style.display = "none"
        CityFlag = true
    }
})
country.addEventListener("input", (e) => {
    if (e.target.value.match(regexpCity)) {
        e.target.parentElement.children[2].style.display = "block"
        countryFlag = false
    }
    else {
        e.target.parentElement.children[2].style.display = "none"
        countryFlag = true
    }
})
btn2back.onclick = function() {
    if (TFlag && CityFlag && countryFlag) {
        firstCont.style.display = "block"
        secondCont.style.display = "none"
    }
    return false
}
btn2next.onclick = function() {
    if (TFlag && CityFlag && countryFlag) {
        secondCont.style.display = "none"
        thirdCont.style.display = "block"
    }
    return false
}
select.addEventListener("blur", (e) => {
    if (e.target.value != "") {
        e.target.parentElement.children[2].style.display = "none"
        selectFlag = true
    }
    else {
        e.target.parentElement.children[2].style.display = "block"
        selectFlag = false
    }
})
message.addEventListener("blur", (e) => {
    if (e.target.value != "") {
        e.target.parentElement.children[2].style.display = "none"
        messageFlag = true
    }
    else {
        e.target.parentElement.children[2].style.display = "block"
        messageFlag = false
    }
})
btn3back.onclick = function() {
    if (selectFlag && messageFlag) {
        thirdCont.style.display = "none"
        secondCont.style.display = "block"
    }
    return false
}
btn3next.onclick = function() {
    if (selectFlag && messageFlag) {
        lastWindow.style.display = "flex"
    }
    return false
}





