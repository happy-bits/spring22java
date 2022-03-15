/*
Uppgift: gör klart "readyToPressOk". Funktionen ska returnera true eller false
*/

import { useState } from 'react'
import './Train.css'

function Train() {

    const [way, setWay] = useState(null)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const readyToPressOk = () => {
        /* insert code here */
    }
    return (
        <article className="train">

            <div className="way">
                <label htmlFor="oneway">Enkel</label>
                <input type="radio" id="oneway" name="ways" onChange={() => setWay('oneway')} />

                <label htmlFor="roundtrip">Tur o retur</label>
                <input type="radio" id="roundtrip" name="ways" onChange={() => setWay('roundtrip')} />
            </div>

            <input type="date" className="from" disabled={way == null} onChange={(event) => setFrom(event.target.value)} />
            <input type="date" className="to" disabled={way == null || way == 'oneway'} onChange={(event) => setTo(event.target.value)} />

            <button disabled={!readyToPressOk()}>Ok</button>
            <section className="result hide">
                Du har valt ...
            </section>

        </article>

    )
}

export default Train