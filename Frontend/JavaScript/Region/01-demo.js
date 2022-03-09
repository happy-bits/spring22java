
const x = [1, 2, 3, 4, 5]

const y = [{}, {}, {}, {}]

const z = [{ firstname: "Kalle", age: 15 }, { firstname: "Lisa", age: 77 }]

const countyData = [
    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
]

console.log( countyData.find( c=> c.countyCode=="03" ).countyName )

const county = document.querySelector(".region .county")

renderCounty()

function renderCounty() {

    let html = `<option value="">Välj län...</option>`

    // { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    for (let x of countyData) {

        html += `<option value="${x.countyCode}">${x.countyName}</option>`
    }
    
    // <option value="01">aaaaaaa län</option>

    county.innerHTML = html
}