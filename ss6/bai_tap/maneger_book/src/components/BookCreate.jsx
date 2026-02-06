import React from 'react';
import useBookCreate from "../hooks/useBookCreate.js";

const BookCreate = () => {
    const {
        title,
        setTitle,
        quantity,
        setQuantity,
        handleSubmit
    } = useBookCreate();

    return (
        <div className="container">
            <div className="header">
                <h1>Thêm sách mới</h1>
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
                <button type="submit" className="btn btn-add">Thêm</button>
            </form>
        </div>
    );
};

export default BookCreate;
