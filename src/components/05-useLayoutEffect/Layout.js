import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'


export const Layout = () => {
    

    const {state, increment} = useCounter(1)
    
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const {quote} = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>Layout effect !!</h1>   
            <hr/>

            <figure className="blockquote text-end">
                <blockquote className="mb-0">
                    <p
                    className="mb-0"
                    ref={pTag}
                    >
                        {quote}
                    </p>
                </blockquote>
            </figure>

            <button className="btn btn-secondary" onClick={increment}>
                Siguiente frase
            </button>

        </>
    )
}
