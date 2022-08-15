import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Buttons from './Buttons';

const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "Вымыть кухню",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Купить продукты",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "Сделать работу",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "Приготовить ужин",
        "completed": false
    },
    {
        "userId": 1,
        "id": 5,
        "title": "Сходить в театр",
        "completed": false
    },
]

export default function Todo() {

    const [todos, setTodos] = useState(initialState);
    const [filtered, setFiltered] = useState(todos);

    useEffect( () => {
        setFiltered(todos)
    }, [todos]);


    function addTodo(todo) {
        let copy = [...filtered];
        if (todo) {
        copy.push({
            userId: 1,
            id: Math.floor(Math.random() * 50),
            title: todo,
            completed: false
        }
        )};
        setTodos(copy)
    }
    
    function handleDeleteTodo(id) {
        
        let filteredTodo = todos.filter(todo => todo.id !== id);
       
        setTodos(filteredTodo);
    }
    
    function handleActiveTodo(id) {
        let newTodos = [...todos];
        newTodos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
        })
        setFiltered(newTodos);
    }

    function handleFilterTodo(status) {
        if (status === 'all') {
            setFiltered(todos)
        } else {
            let filteredTodos = todos.filter(todo => todo.completed === status);
            setFiltered(filteredTodos);
        }
    }

    return (
        <div class="todo">
         <h1 class="todo_header">Мои списки дел</h1>
            <Input addTodo={addTodo} />
            <ul  class="todos">
                {filtered.map(todo => <List key={todo.id} {...todo} deleteTodo={handleDeleteTodo} activeTodo={handleActiveTodo} />)}
            </ul>
            <Buttons filterTodo={handleFilterTodo} />
        </div>
    )
};

