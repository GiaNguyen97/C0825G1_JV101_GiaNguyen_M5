import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    render() {
        const { item, handleChange, handleAddItem, handleUpdate, isEditing } = this.props;
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
}

export default TodoForm;
