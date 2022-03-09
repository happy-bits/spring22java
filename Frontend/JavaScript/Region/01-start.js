const result = document.querySelector(".region .result")
const county = document.querySelector(".region .county")
const municipality = document.querySelector(".region .municipality")

let selectedCountyCode = ""

const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
    /* insert code here (one more county with municipalites) */
    // Here is a list of län counties and municipalites: https://www.scb.se/hitta-statistik/regional-statistik-och-kartor/regionala-indelningar/lan-och-kommuner/lan-och-kommuner-i-kodnummerordning/
]

renderCounty()

function renderCounty() {
    let html = `<option value="">Välj län...</option>`

    for(let c of countyData) {
        const name = c.countyName
        const code = c.countyCode

        html += `<option value="${code}">${code} ${name}</option>`
        
    }
    county.innerHTML = html
}

function renderMunicipality() {

    if (selectedCountyCode == "") {
        municipality.classList.add("hide")
        return
    }
    let html= `<option value="">Välj kommun...</option>`

    /* insert code here */

}

function countyChanged() {
    const countyCode = county.value

    selectedCountyCode = countyCode

    renderMunicipality()
    result.classList.add("hide")
}

function municipalityChanged() {
    if (municipality.value == "") {
        result.classList.add("hide")
        return
    }

    municipality.classList.remove("hide")
    result.classList.remove("hide")

    const selectedCounty = countyData.find(c=>c.countyCode == selectedCountyCode)
    const municipalityFullCode = selectedCounty.countyCode + municipality.value
    result.innerHTML = `Du har valt kommun med kod ${municipalityFullCode}`
}