const result = document.querySelector(".result")

let chosenStars = 0

function hoverStar(number) {
    lightAllStarsUpTo(number)
}

function leftStar() {
    lightAllStarsUpTo(chosenStars)
}

function clickStar(number) {
    result.innerText = `You rated ${number} stars!`
    chosenStars = number
}

function resetStars() {
    result.innerHTML = "&nbsp;"
    chosenStars = 0
    lightAllStarsUpTo(chosenStars)
}

function lightAllStarsUpTo(number) {

    const allStars = document.querySelectorAll(".movie .rating img")

    for (let i = 1; i <= number; i++) {
        allStars[i - 1].src = "stars/star.png"
    }

    for (let i = number + 1; i <= 5; i++) {
        allStars[i - 1].src = "stars/star-gray.png"
    }
}