/*

Kopiera in HTML
- stäng taggar
- for => htmlFor
- className

*/

import './Train.css'

function Train() {

    return (
        <article className="train">

            <div className="way">
                <label htmlFor="oneway">Enkel</label>
                <input type="radio" id="oneway" name="ways" />

                <label htmlFor="roundtrip">Tur o retur</label>
                <input type="radio" id="roundtrip" name="ways" />
            </div>

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