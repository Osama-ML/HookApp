import React, {useMemo, useState} from 'react'
import "../02-useEffect/effects.css";
import {useCounter} from "../../hooks/useCounter";
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {

    const [algo, setAlgo] = useState(true);
    const {state, increment} = useCounter(5000);

    

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:  <small>{state}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button onClick={increment}>+1</button>
            <button onClick={()=> {setAlgo(!algo)}}>Show/Hide {JSON.stringify(algo)}</button>
        </div>
    )
}
