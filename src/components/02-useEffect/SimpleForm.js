import React, {useEffect, useState} from 'react'
import './effects.css'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState

    useEffect( () => {
        console.log('hey!')
    }, []) 

    useEffect( () => {
        console.log('formState cambió')
    }, [formState]) 

    useEffect( () => {
        console.log('email cambió')
    }, [email]) 

    const handleInputChange = ({ target }) => {
        console.log(target.name);
        console.log(target.value);
        setFormState({
            ...formState,
            [target.name]: target.value //target.name es un identificador de input por texto
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>  
            <div className="from-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange= {handleInputChange}
                />
            </div>

            <div className="from-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                autoComplete="off"
                value={email}
                onChange= {handleInputChange}
                />
            </div>
        </>
    )
}
