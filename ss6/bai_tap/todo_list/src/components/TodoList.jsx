import React from 'react';
import './TodoApp.css';

const TodoList = ({ todos, handleEdit, handleDelete }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <span className="todo-text">{todo.text}</span>
                    <div className="action-buttons">
                        <button
                            className="btn-edit"
                            onClick={() => handleEdit(todo)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn-delete"
                            onClick={() => handleDelete(todo)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
