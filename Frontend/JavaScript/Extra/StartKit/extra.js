function round(number) {
    return +number.toFixed(10);
}

function isNumber(x) {
    return /^ *[-+]?[0-9]+(\.[0-9]*)? *$/.test(x);
}
