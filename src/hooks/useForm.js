import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value //target.name es un identificador de input por texto
        })
    }

    return [values, handleInputChange, reset]
 
}