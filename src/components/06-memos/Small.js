import React from 'react'

export const Small = React.memo(({valor}) => {
    console.log('hi')
    return (
        <small>
            {valor}   
        </small>
    )
})
