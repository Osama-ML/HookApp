import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodo } from '../../fixtures/demoTodos';

describe('pruebas en TodoList', () => {

    const handleDelete= jest.fn();
    const handleToggle= jest.fn();

    const wrapper = shallow(<TodoList 
        todos={demoTodo}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de tener dos TodoListItem', () => {
        
        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('borrar')).toEqual(expect.any(Function));
    })

})
