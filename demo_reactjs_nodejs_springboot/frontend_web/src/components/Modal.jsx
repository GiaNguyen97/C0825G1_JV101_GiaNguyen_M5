import React from 'react';
import './Modal.css';

// Component Modal (Cửa sổ bật lên)
// - isOpen: Trạng thái đóng/mở
// - onClose: Hàm xử lý đóng modal
// - title: Tiêu đề modal
// - children: Nội dung bên trong modal
const Modal = ({ isOpen, onClose, title, children }) => {
    // Nếu không mở -> không render gì cả
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    {/* Nút X để đóng modal */}
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
