
import React from "react";
import { useNavigate } from "react-router-dom";
import * as studentService from "../service/studentService";
import StudentForm from "./StudentForm";
import { toast } from "react-toastify";

function CreateStudent() {
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        address: "",
        email: "",
        phone: "",
        gender: "0",
        dob: ""
    };

    const handleSubmit = (values) => {
        studentService.save(values);
        toast.success("Thêm mới thành công!");
        navigate("/");
    };

    return (
        <StudentForm
            title="Thêm mới học sinh"
            initialValues={initialValues}
            onSubmit={handleSubmit}
            submitLabel="Thêm mới"
        />
    );
}

export default CreateStudent;
