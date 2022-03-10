
const area = document.querySelector(".area")

function hideArea() {
    area.classList.add("hideMe")
}

function showArea() {
    area.classList.remove("hideMe")
}


function changeText() {
    area.innerHTML = "Ny text!"
}

function pow() {
    area.classList.add("standout")
}
