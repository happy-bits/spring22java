/*

Användning av "this"

+ Lätt att lägga till nya email-komponenter
+ Lättläst kod, ingen upprepning av JavaScript-koden

- Om en komponent ska bete sig liiite annorlunda
- Om knappen flyttas i förhållande till "article" så kan koden sluta fungera

*/

function sendForm(buttonReference) {

    const article = buttonReference.parentElement

    // article.style.border="solid 1px red"

    const inputEmail = article.querySelector(".inputEmail")
    const inputEmailAgain = article.querySelector(".inputEmailAgain")
    const resultArea = article.querySelector("section")

    resultArea.classList.remove("hidden")
    resultArea.classList.remove("sad")
    resultArea.classList.remove("happy")

    if (inputEmail.value === "") {
        resultArea.classList.add("sad")
        resultArea.innerText = "Empty email address"
        return 
    }

    if (isValidEmailAddress(inputEmail.value)) {

        if (inputEmail.value === inputEmailAgain.value) {
            resultArea.classList.add("happy")
            resultArea.innerText = "The email addresses are the same :)"
        } else {
            resultArea.classList.add("sad")
            resultArea.innerText = "Not the same"
        }

    } else {
        resultArea.classList.add("sad")
        resultArea.innerText = "Invalid email address"
    }

}


function isValidEmailAddress(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
