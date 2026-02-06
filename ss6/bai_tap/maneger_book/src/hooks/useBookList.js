import { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import { toast } from 'react-toastify';

const useBookList = () => {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.log(error);
            toast.error("Tải danh sách thất bại");
        }
    };

    const handleDeleteClick = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedBook) return;
        try {
            await deleteBook(selectedBook.id);
            toast.success("Xóa sách thành công");
            loadBooks();
        } catch (error) {
            console.log(error);
            toast.error("Xóa sách thất bại");
        } finally {
            closeModal();
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    return {
        books,
        showModal,
        selectedBook,
        handleDeleteClick,
        confirmDelete,
        closeModal
    };
};

export default useBookList;
