function round(number) {
    return +number.toFixed(10);
}

function isNumber(x) {
    return /^ *[-+]?[0-9]+(\.[0-9]*)? *$/.test(x);
}

// Above code for free

update()

function update() {
    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    const result = document.querySelector(".result")

    first.classList.remove("error")
    second.classList.remove("error")
    result.classList.remove("wow")
    
    result.innerText=""
    let hasError = false

    if (!isNumber(first.value)){
        first.classList.add("error")
        hasError = true
    }

    if (!isNumber(second.value)){
        second.classList.add("error")
        hasError = true
    }

    if (hasError){
        result.innerText="Invalid"
        return
    }

    const sum = round(parseFloat(first.value) + parseFloat(second.value))

    result.innerText = sum

    if (sum > 100) {
        result.classList.add("wow")
    }

}

