/*

Klick på enkel/turochretur => disble'a eller enablea

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

            <input type="date" className="from" disabled={way == null} />
            <input type="date" className="to" disabled={way == null || way == 'oneway'} />

            <button>Ok</button>
            <section className="result hide">
                Du har valt ...
            </section>

        </article>

    )
}

export default Train