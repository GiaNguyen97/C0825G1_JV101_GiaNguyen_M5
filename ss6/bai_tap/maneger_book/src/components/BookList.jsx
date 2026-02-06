import React from 'react';
import { Link } from 'react-router-dom';
import useBookList from '../hooks/useBookList';
import ConfirmModal from './ConfirmModal';

const BookList = () => {
    const {
        books,
        showModal,
        selectedBook,
        handleDeleteClick,
        confirmDelete,
        closeModal
    } = useBookList();

    return (
        <div className="container">
            <div className="header">
                <h1>Thư viện</h1>
                <Link to="/create" className="btn btn-add">Thêm sách mới</Link>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th>Số lượng</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <Link to={`/edit/${book.id}`} className="btn btn-edit">Sửa</Link>
                                    <button onClick={() => handleDeleteClick(book)} className="btn btn-delete">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ConfirmModal
                show={showModal}
                onHide={closeModal}
                onConfirm={confirmDelete}
                title="Xác nhận xóa"
                bodyContent={
                    <>
                        Bạn có chắc chắn muốn xóa sách <strong>{selectedBook?.title}</strong> không?
                    </>
                }
            />
        </div>
    );
};

export default BookList;
