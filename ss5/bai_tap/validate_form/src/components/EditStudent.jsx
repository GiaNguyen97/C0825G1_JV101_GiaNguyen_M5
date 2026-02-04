
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as studentService from "../service/studentService";
import StudentForm from "./StudentForm";
import { toast } from "react-toastify";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const foundStudent = studentService.getById(id);
        if (foundStudent) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStudent(foundStudent);
        } else {
            toast.error("Không tìm thấy học sinh!");
            navigate("/");
        }
    }, [id, navigate]);

    const handleSubmit = (values) => {
        studentService.update(values);
        toast.success("Cập nhật thành công!");
        navigate("/");
    };

    if (!student) return <div>Loading...</div>;

    return (
        <StudentForm
            title="Chỉnh sửa học sinh"
            initialValues={student}
            onSubmit={handleSubmit}
            submitLabel="Cập nhật"
        />
    );
}

export default EditStudent;
