// Same functionality but cleaner by removing "else" and new helper methods "displaySadMessage" and "displayHappyMessage"

const resultArea = document.querySelector("section")

function sendForm() {
    
    const inputEmail = document.querySelector(".inputEmail")   
    const inputEmailAgain = document.querySelector(".inputEmailAgain")
    
    if (inputEmail.value === "") {
        displaySadMessage("Empty email address")
        return 
    }
    
    if (!isValidEmailAddress(inputEmail.value)) {
        displaySadMessage("Invalid email address")
        return
    }
    
    if (inputEmail.value !== inputEmailAgain.value) {
        displaySadMessage("Not the same")
        return
    }
    
    displayHappyMessage("The email addresses are the same :)")
    
}

function displaySadMessage(message) {
    resultArea.classList.remove("hidden", "happy")
    resultArea.classList.add("sad")
    resultArea.innerText = message
}

function displayHappyMessage(message) {
    resultArea.classList.remove("hidden", "sad")
    resultArea.classList.add("happy")
    resultArea.innerText = message        
}

function isValidEmailAddress(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
