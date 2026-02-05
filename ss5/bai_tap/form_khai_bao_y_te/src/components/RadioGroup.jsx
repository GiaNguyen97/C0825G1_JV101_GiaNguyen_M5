
import React from 'react';
import { Form } from 'react-bootstrap';

const RadioGroup = ({ label, name, options, formik }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <div className="d-flex gap-3">
                {options.map((option) => (
                    <Form.Check
                        key={option.value}
                        type="radio"
                        id={`${name}-${option.value}`}
                        label={option.label}
                        name={name}
                        value={option.value}
                        checked={formik.values[name] === option.value}
                        onChange={formik.handleChange}
                    />
                ))}
            </div>
        </Form.Group>
    );
};

export default RadioGroup;
