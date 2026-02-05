import React, { useEffect, useState } from 'react';
import { getBookById, updateBook } from '../services/bookService';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookEdit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadBook();
    }, [id]);

    const loadBook = async () => {
        try {
            const data = await getBookById(id);
            setTitle(data.title);
            setQuantity(data.quantity);
        } catch (error) {
            toast.error("Failed to load book data");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBook(id, { title, quantity: parseInt(quantity) });
            toast.success("Edit book successfully");
            navigate('/');
        } catch (error) {
            toast.error("Failed to update book");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Edit</h1>
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
                <button type="submit" className="btn btn-save">Save</button>
            </form>
        </div>
    );
};

export default BookEdit;
