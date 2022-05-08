import { useState } from "react"


function Counter(){
const[count, usecounter] = useState (0)

const Increment = () =>
{
    usecounter(count + 1)
}
const Decrement = () =>
{
    usecounter(count - 1)

}
const Reset = () =>
{
    usecounter (0)
}

    return (
        <div>
            <h2>Counter {count}</h2>
            <button onClick={() => Increment ()}>Increment</button>
            <button onClick={() => Decrement ()}>Decrement</button>
            <button onClick={() => Reset ()}>Reset</button>
        </div>
    )
}
export default Counter