import React from 'react'
import { TodoListItem } from './TodoListItem'
import './styles.css';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    
                <TodoListItem key={todo.id} todo={todo} index={i} toggle={handleToggle} borrar={handleDelete}/>
                
                ))
            }
        </ul>
    )
}
