/*
Uppgift:

- Skriv enbart ut texten vid klick på Ok (om användaren byter mellan enkel/tur-o-return så dölj texten)

*/

import { useState } from 'react'
import './Train.css'

function Train() {

    const [way, setWay] = useState(null)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const readyToPressOk = () => {
        return way=='oneway' && from != "" ||
               way=='roundtrip' && from != "" && to != "";
    }

    const describeTravel = () => {
        if (way == 'oneway'){
            return <span>Du har valt att resa <b>enkelresa</b> med utresa <b>{from}</b></span>
        }
        if (way == 'roundtrip'){
            return <span>Du har valt att resa <b>tur o retur</b> med utresa <b>{from}</b> och hemresa <b>{to}</b></span>
        }
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
            <section className="result">
                {describeTravel()}
            </section>

        </article>

    )
}

export default Train