import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en HomeScreen', () => {

    const user = {
        name: 'Osama',
        email: 'osama@react.com'
    }

    const wrapper = mount( // si usamos shallow solo se renderizaciía el primer componente, pero con mount renderiza todos los componentes
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
