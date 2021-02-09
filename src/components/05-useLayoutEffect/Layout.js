import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'


export const Layout = () => {
    

    const {state, increment} = useCounter(1)
    
    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const {author, quote} = !!data && data[0];

    console.log(author, quote)

    return (
        <>
            <h1>BreakingBad Quotes !!</h1>   
            <hr/>
            
            <figure className="blockquote text-end">
                <blockquote className="mb-0">
                    <p>
                        {quote}
                    </p>
                </blockquote>
                <footer className="blockquote-footer">
                    {author}
                </footer>
            </figure>

            <button className="btn btn-secondary m-5" onClick={increment}>
                Siguiente frase
            </button>

        </>
    )
}
