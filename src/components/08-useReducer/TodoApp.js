import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
} 


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {

        const action = {
            type:'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    // const handleSubmit = (e)=>{

    //     e.preventDefault();

    //     if(description.trim().length <= 1) return;

    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     };

    //     const action = {
    //         type:'add',
    //         payload: newTodo
    //     }
    //     dispatch(action);

    //     reset();
    // }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type:'add',
            payload: newTodo
        });

    }

    return (
        <div className="container">
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">

                <div className="col-7">

                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                
                </div>

                <div className="col-5">
                    
                    <TodoAdd handleAddTodo={handleAddTodo}/>

                </div>

            </div>

        </div>
    )
}
