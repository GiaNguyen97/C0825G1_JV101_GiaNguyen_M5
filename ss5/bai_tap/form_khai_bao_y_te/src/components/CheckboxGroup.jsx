
import React from 'react';
import { Form } from 'react-bootstrap';

const CheckboxGroup = ({ label, name, options, formik }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <div>
                {options.map((option, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        id={`${name}-${index}`}
                        label={option}
                        name={name}
                        value={option}
                        onChange={formik.handleChange}
                        checked={formik.values[name].includes(option)}
                    />
                ))}
            </div>
        </Form.Group>
    );
};

export default CheckboxGroup;
