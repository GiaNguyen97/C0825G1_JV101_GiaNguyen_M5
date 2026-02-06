import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal visibility state
    const [deleteId, setDeleteId] = useState(null);
    const [deleteName, setDeleteName] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:8080/todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
            toast.error("Lỗi khi tải danh sách sách");
        }
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = async () => {
        if (!task.trim()) return;

        if (editingId) {
            await updateTodo();
        } else {
            await addTodo();
        }
    };

    const addTodo = async () => {
        try {
            const response = await axios.post("http://localhost:8080/todos", {
                text: task,
                completed: false,
            });
            toast.success("Thêm thành công!");
            setTodos([...todos, response.data]);
            setTask("");
        } catch (error) {
            console.error("Error adding todo:", error);
            toast.error("Có lỗi xảy ra khi thêm sách.");
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/todos/${editingId}`, {
                text: task,
                completed: false, // Giữ nguyên hoặc xử lý logic completed nếu cần
            });
            toast.success("Cập nhật thành công!");

            const updatedTodos = todos.map(todo =>
                todo.id === editingId ? response.data : todo
            );
            setTodos(updatedTodos);
            setTask("");
            setEditingId(null);
        } catch (error) {
            console.error("Error updating todo:", error);
            toast.error("Có lỗi xảy ra khi cập nhật sách.");
        }
    };

    const handleDeleteClick = (todo) => {
        setDeleteId(todo.id);
        setDeleteName(todo.text);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!deleteId) return;
        try {
            const response = await axios.delete(`http://localhost:8080/todos/${deleteId}`);
            toast.success("Xóa thành công!");

            const newTodos = todos.filter(todo => todo.id !== deleteId);
            setTodos(newTodos);

            if (editingId === deleteId) {
                setTask("");
                setEditingId(null);
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
            toast.error("Có lỗi xảy ra khi xóa sách.");
        } finally {
            setShowDeleteModal(false);
            setDeleteId(null);
            setDeleteName("");
        }
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
        setDeleteId(null);
        setDeleteName("");
    };

    const handleEdit = (todo) => {
        setTask(todo.text);
        setEditingId(todo.id);
    };

    return (
        <div className="todo-container">
            <h1 className="todo-header">Todo List</h1>
            <TodoForm
                task={task}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={!!editingId}
            />
            <TodoList
                todos={todos}
                handleEdit={handleEdit}
                handleDelete={handleDeleteClick}
            />

            <Modal show={showDeleteModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa sách <strong>{deleteName}</strong> không? <br />
                    Hành động này không thể hoàn tác.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TodoApp;
