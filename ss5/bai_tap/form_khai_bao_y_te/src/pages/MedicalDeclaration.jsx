
import React from 'react';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import TextareaField from '../components/TextareaField';
import CheckboxGroup from '../components/CheckboxGroup';

const MedicalDeclaration = () => {
    const formik = useFormikContext();
    const navigate = useNavigate();

    return (
        <div>
            <h2 className="mb-4">Thông tin khai báo</h2>

            <TextareaField
                label="Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)"
                name="visitedCountries"
                formik={formik}
            />

            <CheckboxGroup
                label="Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?"
                name="symptoms"
                options={['Sốt', 'Ho', 'Khó thở', 'Viêm phổi', 'Đau họng', 'Mệt mỏi']}
                formik={formik}
            />

            <CheckboxGroup
                label="Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?"
                name="contacts"
                options={[
                    'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19',
                    'Người từ nước có bệnh COVID-19',
                    'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)'
                ]}
                formik={formik}
            />

            <div className="d-flex gap-2 mt-4">
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Quay lại
                </Button>
                <Button variant="success" type="submit">
                    Gửi tờ khai
                </Button>
            </div>
        </div>
    );
};

export default MedicalDeclaration;
