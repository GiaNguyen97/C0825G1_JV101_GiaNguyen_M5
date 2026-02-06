import React from 'react';
import useBookEdit from '../hooks/useBookEdit';

const BookEdit = () => {
    const {
        title,
        setTitle,
        quantity,
        setQuantity,
        handleSubmit
    } = useBookEdit();

    return (
        <div className="container">
            <div className="header">
                <h1>Chỉnh sửa sách</h1>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>Tiêu đề</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Số lượng</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-save">Lưu</button>
            </form>
        </div>
    );
};

export default BookEdit;
