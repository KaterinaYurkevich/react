import React, { useState } from 'react'

export default function List(props) {
    const { id, completed, title, deleteTodo, activeTodo } = props;
    const [activeState, setActiveState] = useState(completed);

    function handleCheckedTodo() {
        activeTodo(id);
        setActiveState(!activeState);
    }

    return (
        <li>
            <span className={activeState ? 'checked' : ''} onClick={() => handleCheckedTodo()} >{`${id}. ${title}`}</span>
            <button className="todos_button" onClick={() => deleteTodo(id)}>Удалить</button>
        </li>
    )
}
