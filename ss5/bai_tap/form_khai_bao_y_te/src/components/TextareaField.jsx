
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

const TextareaField = ({ label, name, formik }) => {
    const isError = formik.touched[name] && formik.errors[name];

    return (
        <Form.Group className="mb-3">
            <FloatingLabel controlId={name} label={label}>
                <Form.Control
                    as="textarea"
                    placeholder={label}
                    style={{ height: '100px' }}
                    name={name}
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

export default TextareaField;
