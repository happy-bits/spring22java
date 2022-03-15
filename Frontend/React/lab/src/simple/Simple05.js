import { useState } from "react"

function Simple(param) {

    console.log(param)
    const [counter, setCounter] = useState(123);

    const header = param.header === undefined ? "Default" : param.header

    const setTo100 = () => {
        setCounter(100)
    }

    const addOne = () => {
        setCounter(counter + 1)
    }

    const removeOne = () => {
        setCounter(counter - 1)
    }

    const describe = () => {
        if (counter > 100){
            return <p>Counter is higher than 100 :)</p>
        } else {
            return <p>I'm sad :(</p>
        }
    }
    return (
        <div>
            <h1>{header}</h1>
            <p>{param.valuetext}: {counter}</p>
            <p>Färg: {param.color}</p>
            <button onClick={setTo100}>Set to 100</button>
            <button onClick={addOne}>Add one</button>
            <button onClick={removeOne}>Remove one</button>

            {describe()}
        </div>
    )
}

export default Simple