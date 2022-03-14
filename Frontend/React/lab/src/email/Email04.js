/*
    Håll reda på vad användaren skriver i textrutan (spara som ett "state")    
    
    State "input"
    GUI uppdateras automatiskt när användaren skriver nåt i input
*/
import { useState } from 'react'
import './Email.css'

function Email() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }

    return (
        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <h1>{input}</h1>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <h1>{inputAgain}</h1>

            <h1>{input === inputAgain ? "Same" : "Not the same"}</h1>
            <button>Ok</button>

            <section className="result hidden">
                You entered ....
            </section>

        </article>

    )
}

export default Email