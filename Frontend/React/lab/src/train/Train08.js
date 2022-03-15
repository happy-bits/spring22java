/*
Justera så tilldatum alltid är senare än fråndatum
*/

import { useState } from 'react'
import './Train.css'

function Train() {

    const [way, setWay] = useState(null)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [showmessage, setShowmessage] = useState(false)

    const readyToPressOk = () => {
        return way == 'oneway' && from != "" ||
            way == 'roundtrip' && from != "" && to != "";
    }

    const changeWay = (direction) => {
        setWay(direction)
        setShowmessage(false)
    }

    const adjustFromTo = (fromDate, toDate) => {
        if (fromDate > toDate) {
            setTo(fromDate)
        }
    }

    return (
        <article className="train">

            <div className="way">
                <label htmlFor="oneway">Enkel</label>
                <input type="radio" id="oneway" name="ways" onChange={() => { changeWay('oneway') }} />

                <label htmlFor="roundtrip">Tur o retur</label>
                <input type="radio" id="roundtrip" name="ways" onChange={() => { changeWay('roundtrip') }} />
            </div>

            <input type="date" className="from" disabled={way == null} onChange={(event) => { setFrom(event.target.value); adjustFromTo(event.target.value, to) }} value={from} />
            <input type="date" className="to" disabled={way == null || way == 'oneway'} onChange={(event) => { setTo(event.target.value); adjustFromTo(from, event.target.value) }} value={to} />

            <button disabled={!readyToPressOk()} onClick={() => setShowmessage(true)}>Ok</button>

            {showmessage &&
                <section className="result">
                    {way == 'oneway' && <>Du har valt att resa <b>enkelresa</b> med utresa <b>{from}</b></>}
                    {way == 'roundtrip' && <>Du har valt att resa <b>tur o retur</b> med utresa <b>{from}</b> och hemresa <b>{to}</b></>}
                </section>
            }

        </article>

    )
}

export default Train