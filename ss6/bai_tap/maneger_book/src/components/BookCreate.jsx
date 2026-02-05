import React, { useState } from 'react';
import { createBook } from '../services/bookService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !quantity) {
            toast.warn("Please full fill inputs");
            return;
        }

        try {
            await createBook({ title, quantity: parseInt(quantity) });
            toast.success("Create book successfully");
            navigate('/');
        } catch (error) {
            toast.error("Failed to create book");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Add a new Book</h1>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-add">Add</button>
            </form>
        </div>
    );
};

export default BookCreate;
