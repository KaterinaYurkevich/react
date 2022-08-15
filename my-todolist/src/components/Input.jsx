import React, { useState } from 'react'

export default function Input({addTodo}) {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value)
    };

    function handleonKeyDown(event) {
       if (event.keyCode === 13) {
        handleAddTodo()
       }
    };

    function handleAddTodo() {
        addTodo(value);
        setValue('');
    };
    
    return (
        <div class="input-wrapper">
            <input type="text" placeholder="Добавить список" value={value}
            onChange={handleChange} onKeyDown={handleonKeyDown}/>
            <button class="input_button" onClick={handleAddTodo}>Добавить</button>
        </div>
    )
}