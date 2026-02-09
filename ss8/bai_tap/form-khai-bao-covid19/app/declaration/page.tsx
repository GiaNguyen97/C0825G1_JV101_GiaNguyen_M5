'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useFormData } from '@/src/context/FormContext';
import { declarationSchema, MedicalDeclarationValues } from '@/src/schema/medical-declaration';
import { Checkbox } from '@/src/components/ui/Checkbox';
import { Textarea } from '@/src/components/ui/Textarea';
import { toast } from 'react-toastify';

import { FormSection } from '@/src/components/ui/FormSection';
import { CheckboxGroup } from '@/src/components/ui/CheckboxGroup';
import { SYMPTOM_OPTIONS, CONTACT_OPTIONS } from '@/src/constants/medical-form';
import { LAYOUT_STYLES, BUTTON_STYLES } from '@/src/styles/form-styles';

export default function DeclarationPage() {
    const { data, updateData } = useFormData();
    const router = useRouter();

    const handleSubmit = (values: MedicalDeclarationValues) => {
        // Simulate API call
        setTimeout(() => {
            updateData(values);
            console.log('Form Submitted:', values);
            toast.success('Gửi tờ khai thành công!');
            router.push('/success');
        }, 500);
    };

    return (
        <div className={LAYOUT_STYLES.pageWrapper}>
            <h2 className={LAYOUT_STYLES.sectionTitle}>Thông tin dịch tễ</h2>

            <Formik
                initialValues={data}
                validationSchema={declarationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-8">
                        <FormSection title="Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều nước)">
                            <Textarea
                                label="Quốc gia / Vùng lãnh thổ (nếu có)"
                                name="visitedCountries"
                                placeholder="Nhập tên các quốc gia..."
                            />
                        </FormSection>

                        <CheckboxGroup
                            label="Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?"
                            name="symptoms"
                            options={SYMPTOM_OPTIONS}
                            columns={2}
                        />

                        <CheckboxGroup
                            label="Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với"
                            name="contacts"
                            options={CONTACT_OPTIONS}
                            columns={1}
                        />

                        <div className={LAYOUT_STYLES.flexBetween + " pt-6 border-t"}>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className={BUTTON_STYLES.secondary}
                            >
                                Quay lại
                            </button>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={BUTTON_STYLES.success}
                            >
                                {isSubmitting ? 'Đang gửi...' : 'Gửi tờ khai'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
