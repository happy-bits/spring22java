/*
Datumen => states
*/

import { useState } from 'react'
import './Train.css'

function Train() {

    const [way, setWay] = useState(null)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

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

            <h1>From: {from}</h1>
            <h1>To: {to}</h1>
            <button>Ok</button>
            <section className="result hide">
                Du har valt ...
            </section>

        </article>

    )
}

export default Train