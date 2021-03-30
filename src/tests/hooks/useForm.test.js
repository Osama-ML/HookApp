import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", ()=> {

    const initialForm = {
        name: "Osama",
        email: "osama@react.com"
    };

    test('Debe regresar un formulario por defecto', () => {
        
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm); // se usa toEqual porque estamos trabajando con objetos
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar el name)', () => {
        
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Paco'
                }
            });
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Paco'})

    });

    test('Debe de reestabler el formulario con RESET', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Paco'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm)

    });

})