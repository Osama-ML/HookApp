import React from 'react'
import './styles.css';

export const TodoListItem = ({todo, index, toggle, borrar}) => {
    return (
        <li
        key={todo.id}
        className="list-group-item"
        >
            <p 
            className={`${ todo.done && 'complete' }`}
            onClick={ () => toggle(todo.id) }
            >{index + 1}. {todo.desc}</p>
            <button 
            className="btn btn-danger"
            onClick={() => borrar(todo.id)}
            >Borrar</button>
        </li>
    )
}
