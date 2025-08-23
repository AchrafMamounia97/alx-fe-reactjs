import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form className="add-todo-form" onSubmit={addTodo} data-testid="todo-form">
        <input
          className="add-todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          data-testid="todo-input"
        />
        <button className="add-todo-btn" type="submit" data-testid="add-button">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
