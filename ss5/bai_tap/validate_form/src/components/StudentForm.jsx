import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { styles } from "../styles/common";

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Vui lòng nhập tên")
        .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Tên chỉ được chứa chữ cái và khoảng trắng"),

    address: Yup.string()
        .required("Vui lòng nhập địa chỉ")
        .min(10, "Địa chỉ quá ngắn, vui lòng nhập chi tiết"),

    email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không đúng định dạng"),

    phone: Yup.string().matches(/^[0-9]{10}$/, "SĐT phải đủ 10 số"),

    gender: Yup.string()
        .required("Vui lòng chọn giới tính"),

    dob: Yup.date()
        .required("Vui lòng chọn ngày sinh")
        .min(new Date(new Date().getFullYear() - 100, 0, 1), "Tuổi không được quá 100")
        .max(new Date(new Date().getFullYear() - 6, 11, 31), "Tuổi phải từ 6 trở lên")
});

function StudentForm({ initialValues, onSubmit, title, submitLabel = "Lưu" }) {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>{title}</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
                enableReinitialize>
                <Form className="bg-white p-6 rounded shadow-md border border-gray-200">
                    <div className={styles.gridContainer}>

                        <div>
                            <label htmlFor="name" className={styles.label}>Họ tên</label>
                            <Field name="name" type="text" className={styles.input} />
                            <ErrorMessage name="name" component="div" className={styles.error} />
                        </div>

                        <div>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <Field name="email" type="email" className={styles.input} />
                            <ErrorMessage name="email" component="div" className={styles.error} />
                        </div>

                        <div>
                            <label htmlFor="phone" className={styles.label}>Số điện thoại</label>
                            <Field name="phone" type="text" className={styles.input} />
                            <ErrorMessage name="phone" component="div" className={styles.error} />
                        </div>

                        <div>
                            <label htmlFor="dob" className={styles.label}>Ngày sinh</label>
                            <Field name="dob" type="date" className={styles.input} />
                            <ErrorMessage name="dob" component="div" className={styles.error} />
                        </div>

                        <div className={styles.colFull}>
                            <label className={styles.label}>Giới tính</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <Field type="radio" name="gender" value="0" className="mr-2" />
                                    Nam
                                </label>
                                <label className="flex items-center">
                                    <Field type="radio" name="gender" value="1" className="mr-2" />
                                    Nữ
                                </label>
                            </div>
                            <ErrorMessage name="gender" component="div" className={styles.error} />
                        </div>

                        <div className={styles.colFull}>
                            <label htmlFor="address" className={styles.label}>Địa chỉ</label>
                            <Field name="address" type="text" className={styles.input} />
                            <ErrorMessage name="address" component="div" className={styles.error} />
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <Link to="/" className={styles.btnBack}>Quay lại</Link>
                        <button type="submit" className={styles.btnPrimary}>
                            {submitLabel}
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default StudentForm;
