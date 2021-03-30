import { useState } from 'react'

// estamos extrayendo la logica del contador en el custom hook

export const useCounter = (initialState = 10) => {

    

    const [state, setstate] = useState(initialState);
    
    const increment = () => {
        setstate(state + 1);
    }

    const decrement = () => {
        setstate(state - 1);
    }

    const reset = () => {
        setstate(initialState)
    }

    return {
        state,
        increment, 
        decrement,
        reset
    };

}
