import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBookById, updateBook } from '../services/bookService';

const useBookEdit = () => {
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
            console.log(error);
            toast.error("Tải dữ liệu sách thất bại");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBook(id, { title, quantity: parseInt(quantity) });
            toast.success("Cập nhật sách thành công");
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error("Cập nhật sách thất bại");
        }
    };

    return {
        title,
        setTitle,
        quantity,
        setQuantity,
        handleSubmit
    };
};

export default useBookEdit;
