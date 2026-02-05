import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error("Failed to load books");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deleteBook(id);
                toast.success("Delete book successfully");
                loadBooks();
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                toast.error("Failed to delete book");
            }
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Library</h1>
                <Link to="/create" className="btn btn-add">Add a new Book</Link>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <Link to={`/edit/${book.id}`} className="btn btn-edit">Edit</Link>
                                    <button onClick={() => handleDelete(book.id)} className="btn btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookList;
