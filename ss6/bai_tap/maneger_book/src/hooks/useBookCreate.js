import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createBook } from "../services/bookService.js";

const useBookCreate = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !quantity) {
            toast.warn("Vui lòng điền đầy đủ thông tin");
            return;
        }

        try {
            await createBook({ title, quantity: parseInt(quantity) });
            toast.success("Thêm sách thành công");
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error("Thêm sách thất bại");
        }
    };

    return {
        title,
        setTitle,
        quantity,
        setQuantity,
        navigate,
        handleSubmit
    };
};

export default useBookCreate;