import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../api/userApi";
import Button from "../components/Button";
import Modal from "../components/Modal";
import "./UserPage.css";

export default function UserPage() {
    // State lưu danh sách user lấy từ API
    const [users, setUsers] = useState([]);
    // State kiểm soát hiển thị Modal (true/false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State lưu user đang sửa (null = thêm mới)
    const [editingUser, setEditingUser] = useState(null);
    // State lưu dữ liệu form nhập liệu
    const [formData, setFormData] = useState({ name: "", email: "" });

    // Hàm load dữ liệu từ API
    const loadData = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (error) {
            console.error("Failed to load users", error);
        }
    };

    // useEffect: Chạy 1 lần khi trang được tải
    useEffect(() => {
        loadData();
    }, []);

    // Hàm mở Modal
    const openModal = (user = null) => {
        if (user) {
            // Nếu có user -> Chế độ Edit
            setEditingUser(user);
            setFormData({ name: user.name, email: user.email });
        } else {
            // Nếu không -> Chế độ Add New
            setEditingUser(null);
            setFormData({ name: "", email: "" });
        }
        setIsModalOpen(true);
    };

    // Hàm đóng Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    // Xử lý Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Chặn reload trang
        try {
            if (editingUser) {
                // Nếu đang sửa -> Gọi API Update
                await updateUser(editingUser.id, formData);
            } else {
                // Nếu đang thêm -> Gọi API Add
                await addUser(formData);
            }
            loadData(); // Load lại danh sách sau khi lưu thành công
            closeModal(); // Đóng modal
        } catch (error) {
            console.error("Failed to save user", error);
            alert("Error saving user!");
        }
    };

    // Xử lý Xóa User
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(id);
                loadData();
            } catch (error) {
                console.error("Failed to delete user", error);
                alert("Error deleting user!");
            }
        }
    };

    return (
        <div className="user-page">
            <div className="page-header">
                <div>
                    <h2>User Management</h2>
                    <span className="user-count">{users.length} users</span>
                </div>
                {/* Nút mở Modal thêm mới */}
                <Button onClick={() => openModal()}>+ Add User</Button>
            </div>

            <div className="card">
                {users.length === 0 ? (
                    <div className="empty-state">No users schema.</div>
                ) : (
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id}>
                                    <td><strong>{u.name}</strong></td>
                                    <td>{u.email}</td>
                                    <td className="actions-cell">
                                        {/* Nút Edit */}
                                        <Button
                                            variant="secondary"
                                            onClick={() => openModal(u)}
                                        >
                                            Edit
                                        </Button>
                                        {/* Nút Delete */}
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(u.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Component Modal chứa Form */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingUser ? "Edit User" : "Add New User"}
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-input"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-input"
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <Button type="button" variant="secondary" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary">
                            {editingUser ? "Save Changes" : "Create User"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
