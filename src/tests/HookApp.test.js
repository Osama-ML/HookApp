import React from 'react';
import HookApp from '../HookApp';
import {shallow} from 'enzyme';

describe('Pruebas en HookApp.js', () => {
    
    test('Debe mostrar <HookApp/> correctamente', () => {
        let wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
})