
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as studentService from "../service/studentService";
import { styles } from "../styles/common";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { formatDateVN } from "../utils/dateUtils.js";

function ListStudent() {
    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStudents(studentService.getAll());
    }, []);

    const handleShowModal = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStudent(null);
    };

    const handleConfirmDelete = () => {
        if (selectedStudent) {
            studentService.deleteById(selectedStudent.id);
            setStudents(studentService.getAll());
            toast.success("Xóa thành công!");
            handleCloseModal();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Danh sách học sinh</h1>
            <Link to="/create" className={`${styles.btnPrimary} mb-4 inline-block`}>
                Thêm mới học sinh
            </Link>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead className="bg-gray-100">
                        <tr>
                            <th className={styles.th}>STT</th>
                            <th className={styles.th}>Tên</th>
                            <th className={styles.th}>Địa chỉ</th>
                            <th className={styles.th}>Giới tính</th>
                            <th className={styles.th}>Ngày sinh</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>SĐT</th>
                            <th className={`py-2 px-4 border-b text-center bg-gray-100`}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className="hover:bg-gray-50">
                                <td className={styles.td}>{index + 1}</td>
                                <td className={styles.td}>{student.name}</td>
                                <td className={styles.td}>{student.address}</td>
                                <td className={styles.td}>{parseInt(student.gender) === 0 ? "Nam" : "Nữ"}</td>
                                <td className={styles.td}>{formatDateVN(student.dob)}</td>
                                <td className={styles.td}>{student.email}</td>
                                <td className={styles.td}>{student.phone}</td>
                                <td className={styles.tdCenter}>
                                    <div className="flex justify-center gap-2">
                                        <Link to={`/edit/${student.id}`} className={styles.btnWarning}>
                                            Sửa
                                        </Link>
                                        <button onClick={() => handleShowModal(student)} className={styles.btnDanger}>
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {students.length === 0 && (
                            <tr>
                                <td colSpan="8" className="py-4 text-center">Không có dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa học sinh <span className="font-bold">{selectedStudent?.name}</span> không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ListStudent;