import { useState } from "react"

function Simple() {

    const [counter, setCounter] = useState(123);

    const setTo100 = () => {
        setCounter(100)
    }

    const addOne = () => {
        setCounter(counter + 1)
    }

    const removeOne = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>My header</h1>
            <p>Value: {counter}</p>
            <button onClick={setTo100}>Set to 100</button>
            <button onClick={addOne}>Add one</button>
            <button onClick={removeOne}>Remove one</button>
        </div>
    )
}

export default Simple