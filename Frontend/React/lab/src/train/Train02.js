/*

Klick på enkel/turochretur => visa en text

*/

import { useState } from 'react'
import './Train.css'

function Train() {

    const [way, setWay] = useState(null)

    return (
        <article className="train">

            <div className="way">
                <label htmlFor="oneway">Enkel</label>
                <input type="radio" id="oneway" name="ways" onChange={() => setWay('oneway')} />

                <label htmlFor="roundtrip">Tur o retur</label>
                <input type="radio" id="roundtrip" name="ways" onChange={() => setWay('roundtrip')} />
            </div>

            <h1>{way}</h1>

            <input type="date" className="from" />
            <input type="date" className="to" />

            <button>Ok</button>
            <section className="result hide">
                Du har valt ...
            </section>

        </article>

    )
}

export default Train