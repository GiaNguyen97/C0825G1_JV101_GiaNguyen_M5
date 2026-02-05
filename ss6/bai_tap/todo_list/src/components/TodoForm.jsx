import React from 'react';
import './TodoApp.css';

const TodoForm = ({ task, handleChange, handleSubmit, isEditing }) => {
    return (
        <div className="todo-input-group">
            <input
                type="text"
                value={task}
                onChange={handleChange}
                className="todo-input"
                placeholder="Nhập task mới..."
            />
            <button
                onClick={handleSubmit}
                className={`todo-button ${isEditing ? 'btn-update' : ''}`}
            >
                {isEditing ? "Update" : "Add"}
            </button>
        </div>
    );
};

export default TodoForm;
