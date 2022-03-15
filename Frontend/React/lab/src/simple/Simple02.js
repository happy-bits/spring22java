import { useState } from "react"

function Simple() {

    const [counter, setCounter] = useState(123);

    const aaaaaaaaa = () => {
        setCounter(100)  // counter = 100
    }

    // Tänk:
    // function setTo100 () {
    //     setCounter(100)
    // }

    return (
        <div>
            <h1>My header</h1>
            <p>Value: {counter}</p>
            <button onClick={aaaaaaaaa}>Set to 100</button>
        </div>
    )
}

export default Simple