import React from 'react';
import './TodoList.css';

function TodoList({ list, handleEdit, handleDelete }) {
    return (
        <ul className="todo-list">
            {list.map((todo, index) => (
                <li key={index} className="todo-item">
                    <span className="todo-text">{todo}</span>
                    <div className="action-buttons">
                        <button
                            className="btn-edit"
                            onClick={() => handleEdit(index)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn-delete"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
