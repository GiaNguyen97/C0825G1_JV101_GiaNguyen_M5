
import React from 'react';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import InputField from '../components/InputField';
import RadioGroup from '../components/RadioGroup';

const SEX_LIST = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' }
];

const PersonalInfo = () => {
    const formik = useFormikContext();
    const navigate = useNavigate();

    const handleNext = async () => {
        const errors = await formik.validateForm();
        const pageFields = [
            'name', 'passport', 'yearOfBirth', 'nationality', 'province',
            'district', 'ward', 'address', 'phone', 'email'
        ];

        const hasPageErrors = pageFields.some(field => errors[field]);

        if (hasPageErrors) {
            const touchedFields = {};
            pageFields.forEach(field => {
                touchedFields[field] = true;
            });
            formik.setTouched({ ...formik.touched, ...touchedFields });
            return;
        }

        navigate('/declaration');
    };

    return (
        <div>
            <h2 className="mb-4">Thông tin cá nhân</h2>

            <InputField label="Họ tên" name="name" formik={formik} />
            <InputField label="Số hộ chiếu /CMND" name="passport" formik={formik} />
            <InputField label="Năm sinh" name="yearOfBirth" type="number" formik={formik} />

            <RadioGroup label="Giới tính" name="gender" options={SEX_LIST} formik={formik} />

            <InputField label="Quốc tịch" name="nationality" formik={formik} />
            <InputField label="Công ty làm việc" name="company" formik={formik} />
            <InputField label="Bộ phận làm việc" name="department" formik={formik} />

            <Form.Group className="mb-3" controlId="insurance">
                <Form.Check
                    type="checkbox"
                    label="Có thẻ bảo hiểm y tế"
                    name="insurance"
                    checked={formik.values.insurance}
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <h3 className="mb-3 mt-4">Địa chỉ liên lạc tại Việt Nam</h3>

            <InputField label="Tỉnh thành" name="province" formik={formik} />
            <InputField label="Quận /huyện" name="district" formik={formik} />
            <InputField label="Phường /xã" name="ward" formik={formik} />
            <InputField label="Số nhà, phố, tổ dân phố /thôn /đội" name="address" formik={formik} />
            <InputField label="Điện thoại" name="phone" formik={formik} />
            <InputField label="Email" name="email" formik={formik} />

            <Button variant="primary" onClick={handleNext} className="mt-3">Tiếp tục</Button>
        </div>
    );
};

export default PersonalInfo;
