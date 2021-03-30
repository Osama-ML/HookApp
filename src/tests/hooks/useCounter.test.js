import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter())

        expect(result.current.state).toBe(10)
        expect(typeof result.current.increment).toBe("function")
        expect(typeof result.current.decrement).toBe("function")
        expect(typeof result.current.reset).toBe("function")
    })
})