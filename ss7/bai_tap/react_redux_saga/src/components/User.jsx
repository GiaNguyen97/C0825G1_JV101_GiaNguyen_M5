import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { Table, Button, Container, Card } from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';

const User = () => {
    const { users, getAllUsers, removeUser } = useUser();
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const handleConfirmDelete = () => {
        if (selectedUser) {
            removeUser(selectedUser);
            handleCloseModal();
        }
    };

    return (
        <Container className="mt-5">
            <Card>
                <Card.Header as="h1" className="text-center text-uppercase fw-bold py-3">Danh sách người dùng</Card.Header>
                <Card.Body>
                    <div className="mb-3 text-center">
                        <Button variant="primary" onClick={getAllUsers}>
                            Lấy danh sách
                        </Button>
                    </div>
                    <Table striped bordered hover responsive>
                        <thead className="table-dark">
                            <tr>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center">Danh sách trống</td>
                                </tr>
                            ) : (
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td className="text-center">{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                        <td className="text-center">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleShowModal(user)}
                                            >
                                                Xóa
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <ConfirmationModal
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirmDelete}
                title="Xác nhận xóa"
                body= {<>
                    Bạn có chắc chắn muốn xóa người dùng <strong>{user?.name}</strong> không?
            </>}
            />
        </Container>
    );
};

export default User;
