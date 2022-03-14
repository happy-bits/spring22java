/*
    Logga något vid klick

    onClick-event (notera case sensitive)

    Event skickas automatiskt
    Funktioner på två olika sätt
*/
import './Email.css'

function Email() {

    // function testy(event){
    //     console.log("testy!")
    //     console.log("event", event) // vilken knapp, altkey, clientX, clientY
    //     console.log("event.target", event.target) // själva knappen
    // }

    const testy = (event) => {
        console.log("testy!")
        console.log("event", event) // vilken knapp, altkey, clientX, clientY
        console.log("event.target", event.target) // själva knappen
    }


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

            <button onClick={testy}>Ok</button>

            <section className="result hidden">
                You entered ....
            </section>

        </article>

    )
}

export default Email