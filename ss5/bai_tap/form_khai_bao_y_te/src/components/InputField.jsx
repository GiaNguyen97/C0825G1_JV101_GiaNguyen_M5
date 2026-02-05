
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const InputField = ({ label, name, formik, type = 'text' }) => {
    const isError = formik.touched[name] && formik.errors[name];

    return (
        <Form.Group className="mb-3">
            <FloatingLabel controlId={name} label={label}>
                <Form.Control
                    type={type}
                    name={name}
                    placeholder={label}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!isError}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors[name]}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Form.Group>
    );
};

export default InputField;
