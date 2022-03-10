// console.log("aaaaaaaaaaaaaaaa")
// console.log("bbbbbbbbbbbbbbbb")
// console.log("ccccccccccccccc")


const inputEmail = document.querySelector(".email .inputEmail")
const inputEmailAgain = document.querySelector(".email .inputEmailAgain")
const resultArea = document.querySelector(".email .result")
const okeyButton = document.querySelector(".email .okeyButton")
const copiedField = document.querySelector(".email .copiedField")

function doStuff() {
    
    
    // console.log("Första textfältet: " + inputEmail.value)
    // console.log("Andra textfältet: " + inputEmailAgain.value)

    // Visa texten "You entered..."

    // myElement.classList.remove("xxxx")

    resultArea.classList.remove("hidden")

    // Om "email" är tom så skriv ut nåt i konsolen

    if (inputEmail.value === "") {

        // myElement.innerText
        // myElement.innerHTML
        resultArea.innerHTML ="<b>Empty</b> email adress"
        // console.log("It's empty!")
    } else {
        
        resultArea.innerText = "I html kan du använda <b>-tagg"

    }

    // "Skriv email address contain"

}

function makeRed() {
    okeyButton.classList.add("sad")
}

function copyText() {
    const x = inputEmail.value // textrutor och dropdowns etc använd "value"
    console.log(x)

    copiedField.value = inputEmail.value
    copiedField.classList.add("sad")

}

function upperify() {
    inputEmail.value = inputEmail.value.toUpperCase()
    
}