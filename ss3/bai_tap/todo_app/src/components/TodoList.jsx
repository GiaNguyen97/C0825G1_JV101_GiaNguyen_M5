import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
    render() {
        const { list, handleEdit, handleDelete } = this.props;
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
}

export default TodoList;
