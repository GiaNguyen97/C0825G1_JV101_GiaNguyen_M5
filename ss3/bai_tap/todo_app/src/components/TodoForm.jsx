import React from 'react';
import './TodoForm.css';

function TodoForm({ item, handleChange, handleAddItem, handleUpdate, isEditing }) {
    return (
        <div className="input-group">
            <input
                type="text"
                value={item}
                onChange={handleChange}
                placeholder="Nhập công việc..."
            />
            <button
                className={isEditing ? "btn-update" : "btn-add"}
                onClick={isEditing ? handleUpdate : handleAddItem}
            >
                {isEditing ? "Update" : "Add"}
            </button>
        </div>
    );
}

export default TodoForm;
