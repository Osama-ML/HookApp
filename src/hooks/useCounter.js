import { useState } from 'react'

// estamos extrayendo la logica del contador en el custom hook

export const useCounter = (initialState = 100) => {

    const [state, setstate] = useState(initialState);
    
    const increment = (factor = 1) => {
        setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    return {
        state,
        increment, 
        decrement
    };

}
