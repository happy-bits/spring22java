/*
Kopiera in HTML-koden från övningen

Ändra class => className
Notera att React är petigare med HTML-koden
*/
import './Email.css'

function Email() {
    return (
        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" />
            </div>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" />
            </div>

            <button>Ok</button>

            <section className="result hidden">
                You entered ....
            </section>

        </article>

    )
}

export default Email