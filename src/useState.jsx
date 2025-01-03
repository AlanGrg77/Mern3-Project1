import { useState } from "react"

const UseState = () =>{
    const [count,setCount] = useState(0);
    const [data,setData] = useState({
        name: 'Alan',
        age: 24
    })
    const increment = () =>{
        setCount(count+1)
    };
    const decrement = () =>{
        setCount(count-1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2>Name:{data.name},Age:{data.age}</h2>
        </>
    )
}

export default UseState;