import React from 'react';

// Component Button tái sử dụng
// - children: Nội dung hiển thị trong nút
// - onClick: Hàm xử lý sự kiện click
// - variant: Loại nút (primary, section, danger)
// - className: Class tùy chỉnh
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    // Style cơ bản cho mọi nút
    const baseStyle = {
        padding: '10px 16px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        fontWeight: 600,
        fontSize: '14px',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
    };

    // Định nghĩa màu sắc cho từng loại nút
    const variants = {
        primary: {
            backgroundColor: 'var(--primary)',
            color: 'white',
        },
        danger: {
            backgroundColor: 'var(--danger)',
            color: 'white',
        },
        secondary: {
            backgroundColor: 'white',
            color: 'var(--text-main)',
            border: '1px solid var(--border)',
        },
    };

    return (
        <button
            onClick={onClick}
            // Gộp style base + style variant
            style={{ ...baseStyle, ...variants[variant] }}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
