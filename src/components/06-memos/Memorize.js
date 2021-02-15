import React, {useState} from 'react'
import "../02-useEffect/effects.css";
import {useCounter} from "../../hooks/useCounter";
import { Small } from './Small';


export const Memorize = () => {

    const [algo, setAlgo] = useState(true)
    const {state, increment} = useCounter(10);

    return (
        <div>
            <h1>Counter:  <Small valor={state}/> </h1>
            <hr/>
            <button onClick={increment}>+1</button>
            <button onClick={()=> {setAlgo(!algo)}}>Show/Hide {JSON.stringify(algo)}</button>
        </div>
    )
}
