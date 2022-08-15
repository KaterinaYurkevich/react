import React from 'react';

export default function Buttons(props) {
    const { filterTodo } = props;

    return (
    <div class="buttons">
        <button onClick={() => filterTodo('all')}>Все</button>
        <button onClick={() => filterTodo(false)}>Невыполненные</button>
        <button onClick={() => filterTodo(true)}>Выполненные</button>
    </div>
    )
}